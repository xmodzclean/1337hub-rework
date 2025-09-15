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

    const { login } = await request.json();

    if (!login) {
      return NextResponse.json({ message: 'Login is required' }, { status: 400 });
    }

    // Delete the ban record
    const deletedBan = await (prisma as any).bannedUser.delete({
      where: { login }
    });

    return NextResponse.json({ 
      message: 'User unbanned successfully',
      unbannedUser: { login }
    }, { status: 200 });

  } catch (error: any) {
    if (error.code === 'P2025') {
      // Record not found
      return NextResponse.json({ message: 'User is not currently banned' }, { status: 404 });
    }
    console.error('Error unbanning user:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
