interface NumberInputProps {
    type: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;

}
export const NumberInput = (props: NumberInputProps) => {
    return (
        <input type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder} className="px-3 py-2 border border-gray-300 rounded-md w-full" />
    )
}