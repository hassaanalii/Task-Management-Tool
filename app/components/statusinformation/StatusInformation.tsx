"use client"
import { TaskContext } from "@/app/context/TaskContext";
import { TaskContextType } from "@/app/types/types";
import { useContext } from "react";
import StatusCard from "../statuscard/StatusCard";
import { PieChart } from "react-minimal-pie-chart";

const StatusInformation = () => {
    const { tasks } = useContext(TaskContext) as TaskContextType;

    const allTasks = tasks.length;
    const inProgressTasks = tasks.filter(task => task.isActive).length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;
    return (
        <div className="flex flex-col w-[100%] sm:gap-10 gap-3">
            <div className="flex flex-col sm:flex-row flex-grow gap-3">
                <StatusCard title="All Tasks" count={allTasks} color="bg-customBlue" />
                <StatusCard title="In Progress" count={inProgressTasks} color="bg-orangeYellow" />
                <StatusCard title="Completed" count={completedTasks} color="bg-darkGreen" />
            </div>
            <div className="flex justify-center w-full">
                <PieChart
                    style={{ height: '400px', width: '400px' }}
                    data={[
                        { title: 'In Progress', value: inProgressTasks, color: '#ffb703' },
                        { title: 'Completed', value: completedTasks, color: '#008000' },
                        { title: 'Todo', value: allTasks - inProgressTasks - completedTasks, color: '#6A2135' },
                    ]}
                    label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}% ${dataEntry.title}`}
                    labelStyle={{
                        fontSize: '5px',
                        fontStyle: 'italic',
                        fill: '#fff',
                    }}
                    labelPosition={70}
                />
            </div>
        </div>
    )
}
export default StatusInformation;