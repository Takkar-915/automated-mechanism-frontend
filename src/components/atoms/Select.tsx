interface SelectProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
}
export const Select = (props: SelectProps) => (
    <select value={props.value} onChange={props.onChange} className="px-3 py-2 border border-gray-300 bg-white rounded-md w-full">
        {props.children}
    </select>
);