import Image from "next/image";

interface CustomButtonProps {
    text: string;
    classname: string;
    onClick: () => void;
  
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, classname, onClick}) => {
    return (
        <button className={classname} onClick={onClick}>
            {text}
        </button>
    )
}
export default CustomButton;