import { useState } from "react";
import { Label } from "../atoms/Label";
import { NumberInput } from "../atoms/NumberInput";

export const BidUpperLimitForm = () => {
    const [bidUpperLimit, setBidUpperLimit] = useState(0);
    return (
        <div className="flex justify-center mt-12">
            <div className="flex flex-col w-full max-w-md">
                <Label text="入札値の上限値" />
                <NumberInput type="number" value={bidUpperLimit} onChange={(e) => setBidUpperLimit(parseFloat(e.target.value))} placeholder="入札値の上限値を入力" />
            </div>
        </div>
    );
}