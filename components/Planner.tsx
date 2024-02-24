import React, { useState } from 'react'
import TodoCard from './TodoCard'
import { prisma } from '@/db/db'
import AddTask from './AddTask'

const getTodos = async () => {
  return await prisma.todo.findMany()
}

const Planner = async () => {
  const todos = await getTodos()

  return (
    <section className='flex flex-col gap-4 mt-8 h-screen padding-container max-container'>
      <div>
        <AddTask />
      </div>

      <div className='flex flex-col gap-2'>
        {todos.map(todo => (
          <TodoCard 
            key={todo.id}
            id={todo.id}
            title={todo.title}
            complete={todo.complete}
          />
        ))}
      </div>
    </section>
  )
}

export default Planner