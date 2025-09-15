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

    const { login, reason } = await request.json();

    if (!login || !reason) {
      return NextResponse.json({ message: 'Login and reason are required' }, { status: 400 });
    }

    // Check if user is already banned
    const existingBan = await (prisma as any).bannedUser.findUnique({
      where: { login }
    });

    if (existingBan) {
      return NextResponse.json({ message: 'User is already banned' }, { status: 400 });
    }

    // Create ban record
    const bannedUser = await (prisma as any).bannedUser.create({
      data: {
        login,
        reason,
        banned_by: userLogin,
        banned_at: new Date(),
      },
    });

    return NextResponse.json({ 
      message: 'User banned successfully',
      bannedUser
    }, { status: 200 });

  } catch (error) {
    console.error('Error banning user:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
