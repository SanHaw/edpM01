'use client';

import { useRouter } from 'next/navigation';

type idProps = {
    todoId: string
}

const Button = ({todoId}: idProps) => {
  
  const router = useRouter()

  async function handleClick(){
    try {
        await fetch(`/api/todo/${todoId}`, {
            method: 'DELETE'
          })
        router.refresh()
    } catch (error) {
        console.log(error)
    }
    
  }

  return (
    <button onClick={handleClick} className='border-none bg-indigo-400 px-5 py-1 text-white hover:bg-indigo-500 font-bold rounded-full'>
        ☓
    </button>
  )
}

export default Button