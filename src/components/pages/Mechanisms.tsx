import { DefaulLayout } from "../templates/DefaultLayout"
export const Mechanisms = () => {
    return (
        <DefaulLayout>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">メカニズム生成</h1>

                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            メカニズムを生成します．
                        </p>
                    </div>
                </div>
            </section>
        </DefaulLayout>
    )
}