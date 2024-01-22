import { useState } from "react";
import { DefaulLayout } from "../templates/DefaultLayout"
import { GenerateResult } from "../organisms/GenerateResult";
import { Loading } from "../molecules/Loading";
import Button from "../atoms/Button";

const CustomerNumForm = () => {
    const [customerNum, setCostomerNum] = useState(0);
    return (
        <div className="flex justify-center mt-12">
            <div className="flex flex-col w-full max-w-md">
                <label className="mb-2 font-bold text-lg text-gray-900">顧客数</label>
                <input type="number" value={customerNum} onChange={(e) => setCostomerNum(parseInt(e.target.value))} placeholder="顧客数を入力" className="px-3 py-2 border border-gray-300 rounded-md w-full" />
            </div>
        </div>
    );
}

const TheatreNumForm = () => {
    const [theatreNum, setTheatreNum] = useState(0);
    return (
        <div className="flex justify-center mt-12">
            <div className="flex flex-col w-full max-w-md">
                <label className="mb-2 font-bold text-lg text-gray-900">映画館数</label>
                <input type="number" value={theatreNum} onChange={(e) => setTheatreNum(parseInt(e.target.value))} placeholder="映画館数を入力" className="px-3 py-2 border border-gray-300 rounded-md w-full" />
            </div>
        </div>
    );
}

const BidLowerLimitForm = () => {
    const [bidLowerLimit, setBidLowerLimit] = useState(0);
    return (
        <div className="flex justify-center mt-12">
            <div className="flex flex-col w-full max-w-md">
                <label className="mb-2 font-bold text-lg text-gray-900">入札の下限値</label>
                <input type="number" value={bidLowerLimit} onChange={(e) => setBidLowerLimit(parseFloat(e.target.value))} placeholder="入札の下限値を入力" className="px-3 py-2 border border-gray-300 rounded-md w-full" />
            </div>
        </div>
    );
}

const BidUpperLimitForm = () => {
    const [bidUpperLimit, setBidUpperLimit] = useState(0);
    return (
        <div className="flex justify-center mt-12">
            <div className="flex flex-col w-full max-w-md">
                <label className="mb-2 font-bold text-lg text-gray-900">入札の上限値</label>
                <input type="number" value={bidUpperLimit} onChange={(e) => setBidUpperLimit(parseFloat(e.target.value))} placeholder="入札の上限値を入力" className="px-3 py-2 border border-gray-300 rounded-md w-full" />
            </div>
        </div>
    );
}

const BidDifferenceForm = () => {
    const [bidDifference, setBidDifference] = useState(0);
    return (
        <div className="flex justify-center mt-12">
            <div className="flex flex-col w-full max-w-md">
                <label className="mb-2 font-bold text-lg text-gray-900">入札の下限値と上限値の差分</label>
                <input type="number" value={bidDifference} onChange={(e) => setBidDifference(parseFloat(e.target.value))} placeholder="入札の下限値と上限値の差分を入力" className="px-3 py-2 border border-gray-300 rounded-md w-full" />
            </div>
        </div>
    );
}


const BidTimingForm = () => {
    const [bidTiming, setBidTiming] = useState('');

    return (
        <div className="flex justify-center mt-12">
            <div className="flex flex-col w-full max-w-md">
                <label className="mb-2 font-bold text-lg text-gray-900">入札のタイミングによる損得</label>
                <select value={bidTiming} onChange={(e) => setBidTiming(e.target.value)} className="px-3 py-2 border border-gray-300 bg-white rounded-md w-full">
                    <option value="middle">タイミングによる損得は扱わない</option>
                    <option value="early">入札がはやいほど得をする</option>
                </select>
            </div>
        </div>
    );
}


export const Generator = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(false);

    const generateMechanism = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        setIsLoading(true);

        await new Promise(resolve => setTimeout(resolve, 3000));
        setIsLoading(false);
        setResult(true);
    }

    return (
        <DefaulLayout>
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">メカニズム生成</h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">パラメータを設定してください．</p>
            </div>
            <CustomerNumForm />
            <TheatreNumForm />
            <BidLowerLimitForm />
            <BidUpperLimitForm />
            <BidDifferenceForm />
            <BidTimingForm />



            <Button onClick={generateMechanism}>メカニズムを生成する</Button>

            {!isLoading && !result ? <></> : (isLoading && !result ? <Loading /> : <GenerateResult />)}

        </DefaulLayout>
    )
}