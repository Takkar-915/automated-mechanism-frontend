import { useState } from "react";
import { DefaultLayout } from "../templates/DefaultLayout"
import { Loading } from "../molecules/Loading";
import Button from "../atoms/Button";
import { AllocationResult } from "../organisms/AllocationResult";
import { CustomerBid } from "../molecules/CustomerBid";
import { TheatreBid } from "../molecules/TheatreBid";


export const MechanismDetail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(false);
    const allcateTheatre = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        setIsLoading(true);

        await new Promise(resolve => setTimeout(resolve, 3000));
        setIsLoading(false);
        setResult(true);
    }

    return (
        <DefaultLayout>
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">生成したメカニズムによる上映映画館の決定</h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">入札データを設定してください．</p>
            </div>


            <CustomerBid text="顧客1の所在地" placeholder="顧客1の所在地を入力" />
            <CustomerBid text="顧客1の評価値" placeholder="顧客1の評価値を入力" />
            <CustomerBid text="顧客2の所在地" placeholder="顧客2の所在地を入力" />
            <CustomerBid text="顧客2の評価値" placeholder="顧客2の評価値を入力" />
            <CustomerBid text="顧客3の所在地" placeholder="顧客3の所在地を入力" />
            <CustomerBid text="顧客3の評価値" placeholder="顧客3の評価値を入力" />
            <TheatreBid text="映画館1の所在地" placeholder="映画館1の所在地を入力" />
            <TheatreBid text="映画館2の所在地" placeholder="映画館2の所在地を入力" />
            <TheatreBid text="映画館3の所在地" placeholder="映画館3の所在地を入力" />


            <Button onClick={allcateTheatre}>上映映画館の決定</Button>

            {!isLoading && !result ? <></> : (isLoading && !result ? <Loading message="メカニズムによる上映映画館の決定中..." /> : <AllocationResult />)}


        </DefaultLayout>
    )
}

