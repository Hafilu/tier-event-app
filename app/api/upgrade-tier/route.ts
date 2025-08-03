import { clerkClient } from "@clerk/clerk-sdk-node";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();  
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { nextTier } = await req.json();  

    await clerkClient.users.updateUser(userId, {
      publicMetadata: {
        tier: nextTier,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error updating tier:", error);
    return NextResponse.json(
      { error: "Internal Server Error", detail: error.message },
      { status: 500 }
    );
  }
}
