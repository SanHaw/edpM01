import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/db/db'

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }){
    const id = params.id;
    
    const todo = await prisma.todo.delete({
        where: {id}
    })

    return NextResponse.json(todo)
}

export async function PATCH(request: NextRequest, { params, body }: { params: { id: string }, body: { title: string, complete: boolean } }){
    const id = params.id;
    const { title } = body;

    const todo = await prisma.todo.update({
        where: {id},
        data: {title}
    })

    return NextResponse.json(todo)
}
