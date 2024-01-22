import { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick: MouseEventHandler;
}
const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
            {children}
        </button>
    );
};

export default Button