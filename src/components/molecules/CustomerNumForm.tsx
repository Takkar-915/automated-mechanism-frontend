import { useState } from "react";
import { Label } from "../atoms/Label";
import { NumberInput } from "../atoms/NumberInput";
export const CustomerNumForm = () => {
    const [customerNum, setCostomerNum] = useState(0);
    return (
        <div className="flex justify-center mt-12">
            <div className="flex flex-col w-full max-w-md">
                <Label text="顧客数" />
                <NumberInput type="number" value={customerNum} onChange={(e) => setCostomerNum(parseInt(e.target.value))} placeholder="顧客数を入力" />
            </div>
        </div>
    );
}