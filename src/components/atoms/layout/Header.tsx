import { Link } from 'react-router-dom';

export const Header = (props: any) => {
    return (
        <div className="bg-white lg:pb-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <header className="flex items-center justify-between py-4 md:py-8">
                    <Link to="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                        メカニズムの自動合成機構
                    </Link>

                    <nav className="hidden gap-12 lg:flex">

                        <Link to="/generator" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                            メカニズム生成
                        </Link>
                        <Link to="/mechanisms" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                            生成したメカニズム一覧
                        </Link>

                    </nav>

                </header>
            </div>
        </div>
    );
};