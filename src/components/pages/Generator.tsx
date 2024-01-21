import { useState } from "react";
import { DefaulLayout } from "../templates/DefaultLayout"
import { GenerateResult } from "../organisms/GenerateResult";
import { Loading } from "../molecules/Loading";
import Button from "../atoms/button/Button";

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
            <Button onClick={generateMechanism}>メカニズムを生成する</Button>

            {!isLoading && !result ? <></> : (isLoading && !result ? <Loading /> : <GenerateResult />)}

        </DefaulLayout>
    )
}