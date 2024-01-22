import { useNavigate } from 'react-router-dom';
export const GenerateResult = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/mechanisms");
    };
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">生成されたメカニズム</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">各メカニズムの特性を確認した上で，メカニズムを選択してください．</p>
                </div>
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">メカニズム名</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">social welfareの平均値</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">顧客が嘘をついて得をした割合</th>
                                <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-3">メカニズム1</td>
                                <td className="px-4 py-3">0.549380</td>
                                <td className="px-4 py-3">0.0297</td>
                                <td className="w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border-t-2 border-gray-200 px-4 py-3">メカニズム2</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">1.111380</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">0.0660</td>
                                <td className="border-t-2 border-gray-200 w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border-t-2 border-gray-200 px-4 py-3">メカニズム3</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">1.106955</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">0.0699</td>
                                <td className="border-t-2 border-gray-200 w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                    <a className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">計算方法を確認
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <button onClick={handleOnClick} className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">保存</button>
                </div>
            </div>
        </section>
    );
};