import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Button = ({ children }: Props) => {

    return (
        <button
            className="bg-[#C1C1C1] w-20 flex flex-col justify-center items-center p-1 rounded-md text-xs font-bold hover:bg-[#16C6D1]">
            {children}
        </button>
    )
}