import { prisma } from "@/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const res = await request.json();
    const {title} = res 

    const result = await prisma.todo.create({
        data: {
            title,
            complete: false
        }
    })
    
    return NextResponse.json({result});
}