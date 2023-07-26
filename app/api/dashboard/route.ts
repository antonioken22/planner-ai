import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { Event } from ".prisma/client";

export async function POST(req: Request) {
  try {
    // Check if the user is authenticated
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Parse the request body
    const body = await req.json();
    // Extract the necessary data from the request body
    const { title, description, label, day } = body;

    // Validate the data (you can add your own validation logic here)
    if (
      title === undefined ||
      title === null ||
      description === undefined ||
      description === null ||
      label === undefined ||
      label === null ||
      day === undefined ||
      day === null
    ) {
      return new NextResponse("Invalid data", { status: 400 });
    }

    // Create the event in the database
    const eventData = {
      title,
      description,
      label,
      day: new Date(day), // Assuming 'day' is a string representing the date
      userId, // Include the userId in the data
    };
    const event = await prismadb.event.create({ data: eventData });

    return new NextResponse(JSON.stringify(event), { status: 200 });
  } catch (error) {
    console.log("[DASHBOARD_CREATE_EVENT_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    // Check if the user is authenticated
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Fetch all events for the authenticated user
    const events = await prismadb.event.findMany({
      where: { userId },
    });

    return new NextResponse(JSON.stringify(events), { status: 200 });
  } catch (error) {
    console.log("[DASHBOARD_GET_EVENTS_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    // Check if the user is authenticated
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Parse the request body
    const body = await req.json();
    // Extract the necessary data from the request body
    const { eventId, title, description, label, day } = body;

    // Validate the data (you can add your own validation logic here)
    if (
      title === undefined ||
      title === null ||
      description === undefined ||
      description === null ||
      label === undefined ||
      label === null ||
      day === undefined ||
      day === null
    ) {
      return new NextResponse("Invalid data", { status: 400 });
    }

    // Update the event in the database
    const eventData = {
      title,
      description,
      label,
      day: new Date(day), // Assuming 'day' is a string representing the date
    };
    const updatedEvent = await prismadb.event.update({
      where: { id: eventId, userId }, // Make sure to include userId in the query
      data: eventData,
    });

    return new NextResponse(JSON.stringify(updatedEvent), { status: 200 });
  } catch (error) {
    console.log("[DASHBOARD_UPDATE_EVENT_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    // Check if the user is authenticated
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Parse the request body
    const body = await req.json();
    // Extract the necessary data from the request body
    const { eventId } = body;

    // Validate the data (you can add your own validation logic here)
    if (!eventId) {
      return new NextResponse("Invalid data", { status: 400 });
    }

    // Delete the event from the database
    const deletedEvent = await prismadb.event.delete({
      where: { id: eventId, userId }, // Make sure to include userId in the query
    });

    return new NextResponse(JSON.stringify(deletedEvent), { status: 200 });
  } catch (error) {
    console.log("[DASHBOARD_DELETE_EVENT_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
