"use client"
import { TaskContext } from "@/app/context/TaskContext";
import { TaskContextType } from "@/app/types/types";
import { useContext, useState } from "react";
import TaskCard from "../taskcard/TaskCard";
import ToDoBanner from "../todobanner/ToDoBanner";

const TaskList = () => {
    const { tasks } = useContext(TaskContext) as TaskContextType;
    const [filter, setFilter] = useState<string>('all');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return task.isActive;
        if (filter === 'completed') return task.isCompleted;
        return true;
    });
    return (
        <>
            <ToDoBanner setFilter={setFilter} />

            {tasks && (
                <div className="flex flex-col gap-3">
                    {filteredTasks.length === 0 ? (
                        <p className="text-center text-[30px] font-bold tracking-widest text-red-500 leading-none mt-20">No tasks available!</p>
                    ) : (
                        <div className="rounded-lg bg-customGray/10 py-10 px-10">
                            {
                                filteredTasks.map((task) => (
                                    <TaskCard task={task} />
                                ))
                            }
                        </div>
                    )}
                </div>
            )}
        </>
    )
}
export default TaskList;