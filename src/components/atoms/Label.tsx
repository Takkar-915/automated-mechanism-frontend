interface LabelProps {
    text: string;
}

export const Label = (props: LabelProps) => {
    return (
        <label className="mb-2 font-bold text-lg text-gray-900">{props.text}</label>
    )
}