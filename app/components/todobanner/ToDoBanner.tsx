"use client"
import { useState } from "react";
import CustomButton from "../custombutton/CustomButton"
import TaskModal from "../taskmodal/TaskModal";
import { ToDoBannerProps } from "@/app/types/types";

const ToDoBanner: React.FC<ToDoBannerProps> = ({ setFilter }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const triggerModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <p className="text-[25px] font-bold leading-none tracking-wide">To Do's</p>
                <CustomButton
                    text="Add Task"
                    onClick={triggerModal}
                    classname="bg-customBlue rounded-md sm:px-10 px-5 py-3 
                leading-none tracking-wide sm:text-[15px] text-[12px] 
                text-white hover:bg-customBlue/50"
                />
                <div className="flex gap-2">
                    <button onClick={() => setFilter('all')} className="px-3 py-1 bg-gray-200 rounded">All</button>
                    <button onClick={() => setFilter('active')} className="px-3 py-1 bg-gray-200 rounded">Active</button>
                    <button onClick={() => setFilter('completed')} className="px-3 py-1 bg-gray-200 rounded">Completed</button>
                </div>
            </div>
            {isModalVisible && <TaskModal isVisible={isModalVisible} onClose={triggerModal} />}
        </>
    )

}

export default ToDoBanner;