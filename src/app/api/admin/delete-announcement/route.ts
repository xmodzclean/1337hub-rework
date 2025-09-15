import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../../lib/authOptions';
import prisma from '../../../../utils/prisma';

export async function DELETE(request: NextRequest) {
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

    const { announcementId } = await request.json();

    if (!announcementId) {
      return NextResponse.json({ message: 'Announcement ID is required' }, { status: 400 });
    }

    // Delete the announcement
    const deletedAnnouncement = await (prisma as any).announcement.delete({
      where: { id: announcementId }
    });

    return NextResponse.json({ 
      message: 'Announcement deleted successfully'
    }, { status: 200 });

  } catch (error: any) {
    if (error.code === 'P2025') {
      // Record not found
      return NextResponse.json({ message: 'Announcement not found' }, { status: 404 });
    }
    console.error('Error deleting announcement:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
