import { useState } from "react";
import { Label } from "../atoms/Label";
import { NumberInput } from "../atoms/NumberInput";
export const BidLowerLimitForm = () => {
    const [bidLowerLimit, setBidLowerLimit] = useState(0);
    return (
        <div className="flex justify-center mt-12">
            <div className="flex flex-col w-full max-w-md">
                <Label text="入札値の下限値" />
                <NumberInput type="number" value={bidLowerLimit} onChange={(e) => setBidLowerLimit(parseFloat(e.target.value))} placeholder="入札値の下限値を入力" />
            </div>
        </div>
    );
}