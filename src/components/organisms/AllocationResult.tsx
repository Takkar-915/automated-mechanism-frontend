export const AllocationResult = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">上映映画館の決定</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">メカニズムによる上映映画館の決定の結果は下記の表のとおりです．</p>
                </div>
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">エージェント</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">所在地</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">評価額</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">上映料金</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">効用値</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-3">顧客1</td>
                                <td className="px-4 py-3">10</td>
                                <td className="px-4 py-3">0.55</td>
                                <td className="px-4 py-3">-</td>
                                <td className="px-4 py-3">0.4</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">顧客2</td>
                                <td className="px-4 py-3">18</td>
                                <td className="px-4 py-3">0.65</td>
                                <td className="px-4 py-3">-</td>
                                <td className="px-4 py-3">0.45</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">顧客3</td>
                                <td className="px-4 py-3">4</td>
                                <td className="px-4 py-3">0.4</td>
                                <td className="px-4 py-3">-</td>
                                <td className="px-4 py-3">0.05</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">映画館1</td>
                                <td className="px-4 py-3">12</td>
                                <td className="px-4 py-3">-</td>
                                <td className="px-4 py-3">-</td>
                                <td className="px-4 py-3">0</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">映画館2</td>
                                <td className="px-4 py-3">15</td>
                                <td className="px-4 py-3">-</td>
                                <td className="px-4 py-3">0.05</td>
                                <td className="px-4 py-3">0.05</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">映画館3</td>
                                <td className="px-4 py-3">9</td>
                                <td className="px-4 py-3">-</td>
                                <td className="px-4 py-3">0.1</td>
                                <td className="px-4 py-3">0.2</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </section >
    );
}
