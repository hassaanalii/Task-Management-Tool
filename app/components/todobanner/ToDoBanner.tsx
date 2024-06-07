"use client"
import { useState } from "react";
import CustomButton from "../custombutton/CustomButton"
import TaskModal from "../taskmodal/TaskModal";

const ToDoBanner = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const triggerModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    return (
        <>
        <div className="flex items-center justify-between">
            <p className="text-[20px] font-bold leading-none tracking-wide">To Do's</p>
            <CustomButton
                text="Add Task"
                onClick={triggerModal}
                classname="bg-customBlue rounded-md sm:px-10 px-5 py-3 
                leading-none tracking-wide sm:text-[15px] text-[12px] 
                text-white hover:bg-customBlue/50"
            />
        </div>
        {isModalVisible && <TaskModal isVisible={isModalVisible} onClose={triggerModal}/>}
        </>
    )

}

export default ToDoBanner;