import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../../../lib/authOptions";
import { db } from "../../../../../../lib/db";

export async function DELETE(req: NextRequest) {
  const session = await getServerSession({ req, ...authOptions });

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { feedbackId } = await req.json();

    if (!feedbackId) {
      return NextResponse.json({ error: "Missing feedback ID" }, { status: 400 });
    }

    // First, find the feedback to verify ownership
    const feedback = await db.feedback.findUnique({
      where: { id: feedbackId },
      include: {
        giver: {
          select: {
            user_name: true,
          },
        },
      },
    });

    if (!feedback) {
      return NextResponse.json({ error: "Feedback not found" }, { status: 404 });
    }

    // Check if the current user is the giver of this feedback
    if (feedback.giver.user_name !== session.user.login) {
      return NextResponse.json({ 
        error: "You can only delete your own feedbacks" 
      }, { status: 403 });
    }

    // Delete the feedback
    await db.feedback.delete({
      where: { id: feedbackId },
    });

    return NextResponse.json({ 
      message: "Feedback deleted successfully" 
    }, { status: 200 });

  } catch (error) {
    console.error("Failed to delete feedback:", error);
    return NextResponse.json(
      { error: "Failed to delete feedback" },
      { status: 500 }
    );
  }
}
