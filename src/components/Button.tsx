import { ReactNode } from "react"

type Props = {
    children: ReactNode
    onClick?: () => void
}

export const Button = ({ children, onClick }: Props) => {

    return (
        <button 
        onClick={onClick}
            className="bg-[#C1C1C1] w-20 flex flex-col justify-center items-center p-1 rounded-md text-xs font-bold duration-500 hover:bg-[#16C6D1]">
            {children}
        </button>
    )
}