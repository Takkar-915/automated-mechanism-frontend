import { useState } from "react";
import { Label } from "../atoms/Label";
import { Select } from "../atoms/Select";

export const BidTimingForm = () => {
    const [bidTiming, setBidTiming] = useState('');

    return (
        <div className="flex justify-center mt-12">
            <div className="flex flex-col w-full max-w-md">
                <Label text="入札のタイミングによる損得" />
                <Select value={bidTiming} onChange={(e) => setBidTiming(e.target.value)}>
                    <option value="middle">タイミングによる損得は扱わない</option>
                    <option value="early">入札がはやいほど得をする</option>
                </Select>
            </div>
        </div>
    );
}