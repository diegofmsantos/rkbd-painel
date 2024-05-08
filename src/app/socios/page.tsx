"use client"

import { api } from "@/api/api";
import { Filter } from "@/components/Filter";
import { Time } from "@/types/Times";
import { ArrowDownTrayIcon, TableCellsIcon, TrashIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {

    const [times, setTimes] = useState<Time[]>([])

    const loadTimes = async () => {
        const response = await api.get('/times')
        setTimes(response.data)
    }

    useEffect(() => {
        loadTimes()
    }, [])

    return (
        <div className="flex flex-col gap-5">
            <div className="h-28 flex justify-around items-center">
                <Filter />
                <div className="flex justify-center items-center gap-7">
                    <button className="bg-[#C1C1C1] w-20 flex flex-col justify-center items-center p-1 rounded-md text-xs font-bold">
                        <ArrowDownTrayIcon className="w-9 h-9" />
                        Salvar
                    </button>
                    <button className="bg-[#C1C1C1] w-20 flex flex-col justify-center items-center p-1 rounded-md text-xs font-bold">
                        <TrashIcon className="w-9 h-9" />
                        Limpar
                    </button>
                    <button className="bg-[#C1C1C1] w-20 flex flex-col justify-center items-center p-1 rounded-md text-xs font-bold">
                        <TableCellsIcon className="w-9 h-9" />
                        Armazenar
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-6 m-auto">
                {times.map(time => (
                    <div className="flex items-center gap-4">
                        <div>
                            <Image src={`/assets/logos-times/${time.url}`} width={30} height={30} alt="Logo" />
                        </div>
                        <input type="number" className="w-32 rounded-md outline-none border border-gray-300" />
                    </div>
                ))}
            </div>
            <Link
                href="/"
                className="border border-gray-300 m-auto w-32 p-1 rounded-md text-center font-bold hover:bg-[#C1C1C1]">
                Voltar
            </Link>
        </div>
    )
}

export default Page;