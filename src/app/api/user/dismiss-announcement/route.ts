import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../../lib/authOptions';
import prisma from '../../../../utils/prisma';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { announcementId } = await request.json();
    const userLogin = (session.user as any).login || '';

    if (!announcementId) {
      return NextResponse.json({ message: 'Announcement ID is required' }, { status: 400 });
    }

    // Add user login to the dismissed_by array
    const updatedAnnouncement = await (prisma as any).announcement.update({
      where: { id: announcementId },
      data: {
        dismissed_by: {
          push: userLogin
        }
      }
    });

    return NextResponse.json({ 
      message: 'Announcement dismissed successfully'
    }, { status: 200 });

  } catch (error: any) {
    if (error.code === 'P2025') {
      // Record not found
      return NextResponse.json({ message: 'Announcement not found' }, { status: 404 });
    }
    console.error('Error dismissing announcement:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
