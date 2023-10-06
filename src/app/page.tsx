import AddTodo from '@/components/AddTodo'
import Navbar from '@/components/Navbar'
import Todos from '@/components/Todos'
import React from 'react'
import { RiTodoLine } from "react-icons/ri";

const page = () => {
  return (
    <div className='mt-20 container mx-auto flex justify-center '>
      <main className='max-w-xl'>
        <h2 className='text-3xl font-semibold flex text-slate-700'> <RiTodoLine className="text-green-500" /> TODO NEXT + TYPESCRIPT <RiTodoLine className="text-green-500" /></h2>
        <Navbar />
        <AddTodo />
        <Todos />
      </main>
    </div>
  )
}

export default page
