import CustomButton from "../components/custombutton/CustomButton";
import ToDoBanner from "../components/todobanner/ToDoBanner";

const ToDo = () => {
    return (
        <div className="w-[71%] mx-auto flex items-center ">
            <div className="py-20 flex flex-col w-full">
                <ToDoBanner />
            </div>
        </div>
    )
}

export default ToDo;