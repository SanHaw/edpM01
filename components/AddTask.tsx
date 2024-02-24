'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Button from './Button';


const AddTask = () => {

  const router = useRouter()
  const [title, setTitle] = useState('')

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      fetch('/api/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title})
      })
      setTitle('')
      router.refresh()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flexCenter flex gap-5 mb-5'>
        <input type="text" name='title' placeholder='New Task' className='rounded-xl py-3 px-7 text-indigo-900 w-2/6' onChange={handleTitleChange}/>
        <Button
        label="✔"
        variant="btn_primary"
        />
    </form>
  )
}

export default AddTask