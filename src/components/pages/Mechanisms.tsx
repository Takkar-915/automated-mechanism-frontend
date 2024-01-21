import { DefaulLayout } from "../templates/DefaultLayout"
export const Mechanisms = () => {
    return (
        <DefaulLayout>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">生成したメカニズム一覧</h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">特定の条件下で生成したメカニズム一覧です．メカニズムを選択して入札値を与えると，上映映画館の決定を下します．</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">生成したメカニズム1</h2>
                                <p className="leading-relaxed text-base">created at {new Date().toISOString()}</p>
                                <p className="leading-relaxed text-base">簡単にどんな条件下で動作するメカニズムかの説明</p>
                                <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">使用する</button>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">生成したメカニズム2</h2>
                                <p className="leading-relaxed text-base">
                                    created at {new Date(Date.now() - 60 * 60 * 1000).toISOString()}
                                </p>
                                <p className="leading-relaxed text-base">簡単にどんな条件下で動作するメカニズムかの説明</p>
                                <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">使用する</button>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">生成したメカニズム3</h2>
                                <p className="leading-relaxed text-base">
                                    created at {new Date(Date.now() - 60 * 60 * 2000).toISOString()}
                                </p>
                                <p className="leading-relaxed text-base">簡単にどんな条件下で動作するメカニズムかの説明</p>
                                <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">使用する</button>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">生成したメカニズム4</h2>
                                <p className="leading-relaxed text-base">
                                    created at {new Date(Date.now() - 60 * 60 * 4000).toISOString()}
                                </p>
                                <p className="leading-relaxed text-base">簡単にどんな条件下で動作するメカニズムかの説明</p>
                                <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">使用する</button>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">生成したメカニズム5</h2>
                                <p className="leading-relaxed text-base">
                                    created at {new Date(Date.now() - 60 * 60 * 5000).toISOString()}
                                </p>
                                <p className="leading-relaxed text-base">簡単にどんな条件下で動作するメカニズムかの説明</p>
                                <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">使用する</button>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">生成したメカニズム6</h2>
                                <p className="leading-relaxed text-base">
                                    created at {new Date(Date.now() - 60 * 60 * 6000).toISOString()}
                                </p>
                                <p className="leading-relaxed text-base">簡単にどんな条件下で動作するメカニズムかの説明</p>
                                <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">使用する</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </DefaulLayout >
    )
}