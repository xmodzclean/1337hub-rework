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

    // Check if user is admin (using login field)
    const userLogin = (session.user as any).login;
    const isAdmin = userLogin === 'azaki' || userLogin === 'amezioun';
    if (!isAdmin) {
      return NextResponse.json({ message: 'Access denied. Admin privileges required.' }, { status: 403 });
    }

    const { title, message, isGlobal, targetLogin, isAnonymous } = await request.json();

    if (!title || !message) {
      return NextResponse.json({ message: 'Title and message are required' }, { status: 400 });
    }

    if (!isGlobal && !targetLogin) {
      return NextResponse.json({ message: 'Target login is required for non-global announcements' }, { status: 400 });
    }

    // Create announcement in database
    const announcement = await (prisma as any).announcement.create({
      data: {
        title,
        message,
        created_by: userLogin,
        is_global: isGlobal,
        target_login: isGlobal ? null : targetLogin,
        is_active: true,
        is_anonymous: isAnonymous || false,
        dismissed_by: [],
        viewed_by: [],
        view_count: 0,
      },
    });

    return NextResponse.json({ 
      message: 'Announcement created successfully',
      announcement
    }, { status: 200 });

  } catch (error) {
    console.error('Error creating announcement:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
