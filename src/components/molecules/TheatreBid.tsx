import { useState } from "react";
import { Label } from "../atoms/Label";
import { NumberInput } from "../atoms/NumberInput";

interface TheatreBidProps {
    text: string;
    placeholder: string;
}

export const TheatreBid = (props: TheatreBidProps) => {
    const [bidDifference, setBidDifference] = useState(0);
    return (
        <div className="flex justify-center mt-12">
            <div className="flex flex-col w-full max-w-md">
                <Label text={props.text} />
                <NumberInput type="number" value={bidDifference} onChange={(e) => setBidDifference(parseFloat(e.target.value))} placeholder={props.placeholder} />
            </div>
        </div>
    );
}