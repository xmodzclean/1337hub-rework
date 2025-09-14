import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../../../lib/authOptions";
import { db } from "../../../../../../lib/db";

export async function POST(req: NextRequest) {
  const session = await getServerSession({ req, ...authOptions });

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { _userName, feedbackText } = await req.json();

  if (!_userName || !feedbackText?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    // 1. Find or create receiver
    const receiver = await db.user.upsert({
      where: { user_name: _userName },
      update: {}, // Nothing to update
      create: {
        user_name: _userName,
        full_name: null,         // Optional fields, adjust as needed
        nickname: null,
        image_url: null,
        banner_url: null,
        curr_level: 0,
        last_level: 0,
      },
    });

    // 2. Get the giver user info for notification
    const giver = await db.user.findUnique({
      where: { user_name: session.user.login },
      select: { id: true, user_name: true, nickname: true },
    });

    if (!giver) {
      return NextResponse.json({ error: "Giver not found" }, { status: 404 });
    }

    // 3. Create feedback
    const feedback = await db.feedback.create({
      data: {
        feedback_text: feedbackText.trim(),
        giver: { connect: { user_name: session.user.login } },
        receiver: { connect: { user_name: _userName } },
      },
    });

    // 4. Create notification for the receiver (using any to bypass TypeScript issue)
    try {
      const giverDisplayName = giver.nickname || giver.user_name;
      await (db as any).notification.create({
        data: {
          user_id: receiver.id,
          type: "feedback",
          title: "New Feedback Received",
          message: `${giverDisplayName} left you a feedback`,
          data: JSON.stringify({
            feedbackId: feedback.id,
            giverLogin: session.user.login,
            giverName: giverDisplayName,
            feedbackText: feedbackText.trim(),
          }),
          is_read: false,
        },
      });
    } catch (notificationError) {
      console.error("Failed to create notification:", notificationError);
      // Don't fail the feedback creation if notification fails
    }

    return NextResponse.json({ feedback }, { status: 201 });
  } catch (error) {
    console.error("Failed to create feedback:", error);
    return NextResponse.json(
      { error: "Failed to create feedback" },
      { status: 500 }
    );
  }
}
