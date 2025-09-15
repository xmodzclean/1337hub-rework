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

    // Update announcement to track the view
    const updatedAnnouncement = await (prisma as any).announcement.update({
      where: { id: announcementId },
      data: {
        viewed_by: {
          push: userLogin
        },
        view_count: {
          increment: 1
        }
      }
    });

    return NextResponse.json({ 
      message: 'View tracked successfully'
    }, { status: 200 });

  } catch (error: any) {
    if (error.code === 'P2025') {
      // Record not found
      return NextResponse.json({ message: 'Announcement not found' }, { status: 404 });
    }
    console.error('Error tracking view:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
