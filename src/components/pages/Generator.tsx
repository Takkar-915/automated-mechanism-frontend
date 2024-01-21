import { useState } from "react";
import { DefaulLayout } from "../templates/DefaultLayout"
import { GenerateResult } from "../molecules/GenerateResult";
import { Loading } from "../molecules/Loading";

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
            <button onClick={generateMechanism} className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
                メカニズムを生成する
            </button>

            {!isLoading && !result ? <></> : (isLoading && !result ? <Loading /> : <GenerateResult />)}

        </DefaulLayout>
    )
}