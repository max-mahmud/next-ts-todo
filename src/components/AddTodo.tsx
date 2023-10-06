"use client"
import { useTodos } from '@/store/TodoStore'
import React, { FormEvent, useState } from 'react'

const AddTodo = () => {
    const [data, setData] = useState("")
    const {handleAddTodo} = useTodos()
    const handleSubmit =(e:FormEvent)=>{
        e.preventDefault()
        handleAddTodo(data)
        setData("")
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex gap-2'>
        <input className='border flex-1 px-5' placeholder='Write your todo' type="text" name="" id="add" value={data} onChange={(e)=>setData(e.target.value)} />
        <button className="py-[6px] px-7 bg-green-500 text-white font-medium">Add</button>
      </form>
    </div>
  )
}

export default AddTodo
