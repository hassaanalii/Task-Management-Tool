"use client"
import CustomButton from "../custombutton/CustomButton"

const ToDoBanner = () => {
    const onAddTaskClick = () => {
        console.log("onAddTaskClick")
    }
    return (
        <div className="flex items-center justify-between">
            <p className="text-[20px] font-bold leading-none tracking-wide">To Do's</p>
            <CustomButton
                text="Add Task"
                onClick={onAddTaskClick}
                classname="bg-customBlue rounded-md sm:px-10 px-5 py-3 
                leading-none tracking-wide sm:text-[15px] text-[12px] 
                text-white hover:bg-customBlue/50"
            />
        </div>
    )

}

export default ToDoBanner;