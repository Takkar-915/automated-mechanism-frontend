import { useState } from "react";
import { DefaultLayout } from "../templates/DefaultLayout"
import { GenerateResult } from "../organisms/GenerateResult";
import { Loading } from "../molecules/Loading";
import Button from "../atoms/Button";
import { CustomerNumForm } from "../molecules/CustomerNumForm";
import { TheatreNumForm } from "../molecules/TheatreNumForm";
import { BidLowerLimitForm } from "../molecules/BidLowerLimitForm";
import { BidUpperLimitForm } from "../molecules/BidUpperLimitForm";
import { BidDifferenceForm } from "../molecules/BidDifferenceForm";
import { BidTimingForm } from "../molecules/BidTimingForm";


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
        <DefaultLayout>
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

            {!isLoading && !result ? <></> : (isLoading && !result ? <Loading message="メカニズムの生成中..." /> : <GenerateResult />)}

        </DefaultLayout>
    )
}