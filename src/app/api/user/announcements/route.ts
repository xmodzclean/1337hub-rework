import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../../lib/authOptions';
import prisma from '../../../../utils/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userLogin = (session.user as any).login || '';

    // Fetch all active announcements first
    const allAnnouncements = await (prisma as any).announcement.findMany({
      where: {
        is_active: true,
        OR: [
          { is_global: true },
          { target_login: userLogin }
        ]
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    // Filter out announcements that this user has already dismissed
    const announcements = allAnnouncements.filter((announcement: any) => 
      !announcement.dismissed_by.includes(userLogin)
    );

    return NextResponse.json(announcements, { status: 200 });

  } catch (error) {
    console.error('Error fetching user announcements:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
