interface CustomInputFieldProps  {
    label: string;
    inputClassName?: string;
    value: string;
    type: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CustomInputField: React.FC<CustomInputFieldProps> = ({ label, inputClassName, value, type, onChange, placeholder }) => {
    const className = `${inputClassName || ''}`;
    return (
        <label className="block text-white">
            <input placeholder={placeholder} type={type} value={value} onChange={onChange} className={className} />
        </label>
    );
};

export default CustomInputField;