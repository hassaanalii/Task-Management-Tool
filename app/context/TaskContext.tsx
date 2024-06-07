"use client"
import { ReactNode, createContext, useEffect, useState } from "react";
import { Task, TaskContextType } from "../types/types";

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
    children: ReactNode;
}

const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as Task[];
        setTasks(storedTasks);
    }, []);

    const addTask = (task: Task) => {
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const deleteTask = (taskId: string) => {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const markTaskAsCompleted = (taskId: string) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, isActive: false, isCompleted: true } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, markTaskAsCompleted }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;