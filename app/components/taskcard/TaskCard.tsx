import { TaskContext } from "@/app/context/TaskContext"
import { TaskCardProps, TaskContextType } from "@/app/types/types"
import { formatDate } from "@/app/utils/dateUtils"
import Image from "next/image"
import { useContext } from "react"

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    const { deleteTask, markTaskAsCompleted } = useContext(TaskContext) as TaskContextType;

    const handleDelete = () => {
        if (deleteTask) {
            deleteTask(task.id);
        }
    };

    const handleMarkAsCompleted = () => {
        if (markTaskAsCompleted) {
            markTaskAsCompleted(task.id);
        }
    };

    return (
        <div className={`rounded-md px-5 py-6 flex flex-col gap-5 mb-3 ${task.isActive ? "bg-customYellow/10" : "bg-customGreen/10"}`}>
            <div className="flex flex-row items-center justify-between">
                <p className="font-bold text-[25px] tracking-wide leading-none">{task.name}</p>
                <div className="flex items-center justify-center gap-3">
                    <Image src="/delete.png" width={20} height={20} className="cursor-pointer" alt="delete" onClick={handleDelete} />
                </div>

            </div>
            <p className="font-light leading-none text-justify tracking-wide md:text-[14px] text-[12px]">{task.description}</p>
            <div className="flex md:flex-row flex-col md:gap-0 gap-4 md:items-center md:justify-between">
                <div className="flex md:flex-row flex-col gap-3">
                    <p className="font-semibold text-[14px]">Status: <span className={`px-3 text-[12px] ml-2 font-medium py-1 rounded-md ${task.isActive ? "bg-customYellow/30" : "bg-customGreen/30"} `}>{task.isActive ? "Active" : "Completed"}</span></p>
                    {
                        task.isActive && (
                            <div className="flex gap-3">
                                <p className="font-semibold text-[14px]">Mark as Complete: </p>
                                <Image src="/complete.png" width={20} height={20} className="cursor-pointer" alt="complete" onClick={handleMarkAsCompleted} />
                            </div>
                        )
                    }


                </div>
                <p className="font-semibold text-[14px]">Task Initiated: <span className={`px-3 text-[12px] ml-2 font-medium py-1 rounded-md ${task.isActive ? "bg-customYellow/30" : "bg-customGreen/30"} `}>{formatDate(task.date)}</span></p>
            </div>

        </div>
    )
}
export default TaskCard