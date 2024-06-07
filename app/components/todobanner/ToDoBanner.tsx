"use client"
import { useState } from "react";
import CustomButton from "../custombutton/CustomButton"
import TaskModal from "../taskmodal/TaskModal";
import { ToDoBannerProps } from "@/app/types/types";
import Image from "next/image";

const ToDoBanner: React.FC<ToDoBannerProps> = ({ setFilter }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const triggerModal = () => {
        setIsModalVisible(!isModalVisible)
    }
    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
    };

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

            </div>
            <div className="flex md:justify-end">
                <div className="md:w-[20%] w-[100%]">
                    <div className="flex gap-2 items-center md:justify-end ">
                        <label className="block text-gray-700 text-center font-bold mb-2">Filters</label>
                    </div>
                    <select
                        onChange={handleFilterChange}
                        className="block text-[12px] appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            </div>
            {isModalVisible && <TaskModal isVisible={isModalVisible} onClose={triggerModal} />}
        </>
    )

}

export default ToDoBanner;