import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../../../lib/authOptions";
import { db } from "../../../../../../lib/db";

export async function GET(req: NextRequest) {
  const session = await getServerSession({ req, ...authOptions });
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Find user by login (user_name)
    const user = await db.user.findUnique({
      where: { user_name: session.user.login },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Fetch feedbacks given by this user (where giver_id = user.id)
    const givenFeedbacks = await db.feedback.findMany({
      where: { giver_id: user.id },
      include: {
        receiver: {
          select: {
            id: true,
            user_name: true,
            nickname: true,
            image_url: true,
            is_verified: true,
          },
        },
      },
      orderBy: { created_at: "desc" },
    });

    return NextResponse.json({ feedbacks: givenFeedbacks }, { status: 200 });
    
  } catch (error) {
    console.error("Failed to fetch given feedbacks:", error);
    return NextResponse.json(
      { error: "Failed to fetch given feedbacks." },
      { status: 500 }
    );
  }
}
