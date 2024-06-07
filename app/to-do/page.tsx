import CustomButton from "../components/custombutton/CustomButton";
import TaskList from "../components/tasklist/TaskList";
import ToDoBanner from "../components/todobanner/ToDoBanner";

const ToDo = () => {
    return (
        <div className="w-[71%] mx-auto flex items-center ">
            <div className="py-20 flex flex-col w-full gap-16">
                <TaskList />
            </div>
        </div>
    )
}

export default ToDo;