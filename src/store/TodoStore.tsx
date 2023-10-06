"use client"
import { ReactNode, createContext, useContext, useState } from "react";

export type Todo ={
    id:string;
    task:string;
    completed:boolean;
    createdAt: Date
}

export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void; //call signature
    toggleTodoAsCompleted: (id: string) => void;
    handleDeleteTodo: (id: string) => void;
}

export const TodoContext = createContext<TodosContext | null>(null)

export const TodoProvider = ({children} :{children: ReactNode} )=>{

    const [todos, setTodos] = useState<Todo[]>(()=>{
        try{
            const newTodos = localStorage.getItem('todos') || "[]";
            return JSON.parse(newTodos) as Todo[]
            }catch (e) {
                return []
            }
    })

    const handleAddTodo =(task : string)=>{
        setTodos((prev)=>{
            const newTodos : Todo[] =[
                {
                    id: Math.random().toString(),
                    task,
                    completed: false,
                    createdAt: new Date()
                },
                ...prev,
            ]
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos
        })
    }

        // toggleTodoAsCompleted
    const toggleTodoAsCompleted =(id:string)=>{
        setTodos((prev)=>{
            const newTodos = prev.map((task)=>{
                if(task.id === id){
                    return {...task, completed:!task.completed}
                }
                return task
            })
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos
        })
    }

        // handleDeleteTodo
        function handleDeleteTodo(id: string) {
            setTodos((prev) => {
                const newTodos = prev.filter((task) => task.id !== id)
                localStorage.setItem("todos", JSON.stringify(newTodos));
                return newTodos
            });
    
        }
    


    return <TodoContext.Provider value={{todos,handleAddTodo , toggleTodoAsCompleted, handleDeleteTodo}}>
        {children}
    </TodoContext.Provider>
}


export function useTodos() {
    const todosContextValue = useContext(TodoContext);
    if (!todosContextValue) {
        throw new Error("useTodos used outside of Provider");
    }

    return todosContextValue;
}