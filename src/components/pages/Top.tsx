import { useNavigate } from "react-router-dom";
import { DefaulLayout } from "../templates/DefaultLayout";

export const Top = () => {
    const navigate = useNavigate();
    return (
        <DefaulLayout>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">耐戦略性を考慮したメカニズムの自動合成機構</h1>

                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            映画作品の上映映画館決定問題を題材とした耐戦略性を考慮したメカニズムの自動合成機構です．
                            特定の問題設定について，
                            耐戦略性を満たすかあるいはそれに類似した性質をもったうえで，
                            できるだけ全体の効用の総和を最大化するメカニズムを自動で生成することを目指します．
                        </p>
                    </div>
                </div>
            </section>       </DefaulLayout>
    )
}