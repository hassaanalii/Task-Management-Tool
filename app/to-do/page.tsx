import TaskList from "../components/tasklist/TaskList";

const ToDo = () => {
    return (
        <div className="lg:w-[71%] w-[85%] mx-auto flex items-center ">
            <div className="py-20 flex flex-col w-full gap-10">
                <TaskList />
            </div>
        </div>
    )
}

export default ToDo;