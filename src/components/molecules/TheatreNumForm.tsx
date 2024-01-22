import { useState } from "react";
import { Label } from "../atoms/Label";
import { NumberInput } from "../atoms/NumberInput";
export const TheatreNumForm = () => {
    const [theatreNum, setTheatreNum] = useState(0);
    return (
        <div className="flex justify-center mt-12">
            <div className="flex flex-col w-full max-w-md">
                <Label text="映画館数" />
                <NumberInput type="number" value={theatreNum} onChange={(e) => setTheatreNum(parseInt(e.target.value))} placeholder="映画館数を入力" />
            </div>
        </div>
    );
}