import { useState } from "react";
import { Label } from "../atoms/Label";
import { NumberInput } from "../atoms/NumberInput";

export const BidDifferenceForm = () => {
    const [bidDifference, setBidDifference] = useState(0);
    return (
        <div className="flex justify-center mt-12">
            <div className="flex flex-col w-full max-w-md">
                <Label text="入札の下限値と上限値の差分の最大値" />
                <NumberInput type="number" value={bidDifference} onChange={(e) => setBidDifference(parseFloat(e.target.value))} placeholder="入札の下限値と上限値の差分を入力" />
            </div>
        </div>
    );
}