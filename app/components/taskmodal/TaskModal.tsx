"use client"
import { useContext, useState } from "react";
import CustomInputField from "../custominputfield/CustomInputField";
import CustomButton from "../custombutton/CustomButton";
import { TaskContext } from "@/app/context/TaskContext";
import { TaskContextType } from "@/app/types/types";
import { v4 as uuidv4 } from 'uuid';


interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const TaskModal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const { addTask } = useContext(TaskContext) as TaskContextType;

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };

  const handleAddTask = () => {
    const newTask = {
      id: uuidv4(), 
      name: taskName,
      description: taskDescription,
      date: new Date().toISOString(),
      isCompleted: false,
      isActive: true,
    };
    addTask(newTask);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full p-6">
        <div className="flex justify-center flex-col gap-10">
          <p className="leading-none text-center tracking-wide text-[20px] font-semibold">Add a Task!</p>
          <div className="flex flex-col gap-5">
            <CustomInputField
              label="Name"
              type="text"
              placeholder="Name"
              value={taskName}
              onChange={handleChange(setTaskName)}
              inputClassName="rounded-md border-2 w-[100%] px-3 py-2 text-[12px] bg-white text-gray-800 outline-none placeholder-white::placeholder"
            />
            <CustomInputField
              label="Description"
              type="text"
              placeholder="Description"
              value={taskDescription}
              onChange={handleChange(setTaskDescription)}
              inputClassName="rounded-md border-2 w-[100%] px-3 py-2 text-[12px] bg-white text-gray-800 outline-none placeholder-white::placeholder"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <CustomButton
              text="Cancel"
              onClick={onClose}
              classname="bg-black flex-grow rounded-md sm:px-10 px-5 py-3 
                leading-none tracking-wide sm:text-[15px] text-[12px] 
                text-white hover:bg-black/80"
            />
            <CustomButton
              text="Add Task"
              onClick={handleAddTask}
              classname="bg-customBlue flex-grow  rounded-md sm:px-10 px-5 py-3 
                leading-none tracking-wide sm:text-[15px] text-[12px] 
                text-white hover:bg-customBlue/80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
