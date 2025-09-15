import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../utils/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const login = searchParams.get('login');

    if (!login) {
      return NextResponse.json({ banned: false });
    }

    // Check if user is banned
    const bannedUser = await (prisma as any).bannedUser.findUnique({
      where: { 
        login: login,
      }
    });

    if (bannedUser && bannedUser.is_active) {
      return NextResponse.json({ 
        banned: true, 
        reason: bannedUser.reason 
      });
    }

    return NextResponse.json({ banned: false });

  } catch (error) {
    console.error('Error checking ban status:', error);
    return NextResponse.json({ banned: false });
  }
}
