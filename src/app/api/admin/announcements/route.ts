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

    // Check if user is admin (using login field)
    const userLogin = (session.user as any).login;
    const isAdmin = userLogin === 'azaki' || userLogin === 'amezioun';
    if (!isAdmin) {
      return NextResponse.json({ message: 'Access denied. Admin privileges required.' }, { status: 403 });
    }

    // Fetch all announcements from database
    const announcements = await (prisma as any).announcement.findMany({
      where: {
        is_active: true
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return NextResponse.json(announcements, { status: 200 });

  } catch (error) {
    console.error('Error fetching announcements:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
