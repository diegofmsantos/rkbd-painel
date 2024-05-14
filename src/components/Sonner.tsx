import { ReactNode } from "react"
import { toast } from "sonner"

type Props = {
    children: ReactNode
}


export const Sonner = ({ children }: Props) => {
    return (
        <button 
        type="submit"
            className="bg-[#C1C1C1] w-20 flex flex-col justify-center items-center p-1 rounded-md text-xs font-bold duration-500 hover:bg-[#16C6D1]"
            onClick={() =>
                toast("Time cadastrado com sucesso!"
                   )
            }
        >
            {children}
        </button>
    )
}
