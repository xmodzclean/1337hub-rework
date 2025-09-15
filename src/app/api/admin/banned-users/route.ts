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

    // Fetch all banned users from database
    const bannedUsers = await (prisma as any).bannedUser.findMany({
      where: {
        is_active: true
      },
      orderBy: {
        banned_at: 'desc'
      }
    });

    return NextResponse.json(bannedUsers, { status: 200 });

  } catch (error) {
    console.error('Error fetching banned users:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
