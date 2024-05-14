"use client"

import { api } from "@/api/api"
import { Time } from "@/types/Time"
import Image from "next/image"
import { useEffect, useState } from "react"
import { LockClosedIcon, LockOpenIcon, PlusIcon } from "@heroicons/react/16/solid"
import Link from "next/link"

export const TimeList = () => {

    const [times, setTimes] = useState<Time[]>([])
    const [inputValues, setInputValues] = useState<{ [key: string]: number }>({})

    const loadTimes = async () => {
        const response = await api.get<Time[]>('/times')
        setTimes(response.data)
    }

    useEffect(() => {
        loadTimes()
    }, [])

    const handleInputChange = (id: string, value: string) => {
        const parsedValue = parseFloat(value);
        if (!isNaN(parsedValue)) {
            setInputValues(prevState => ({
                ...prevState,
                [id]: parsedValue
            }));
        }
        console.log(inputValues)
    }


    return (
        <div className="max-w-[1250px] m-auto mb-8 flex justify-between flex-wrap gap-8">
            {times.map(time => (
                <div key={String(time.id)} className={`w-[280px] border rounded-md p-2 flex items-center justify-between`}>
                    <div className="flex items-center gap-2">
                        <div>
                            <Image
                                src={`/assets/logos-times/${time.url}`}
                                width={30}
                                height={30}
                                alt="Logo"
                                priority />
                        </div>
                        <p>{time.nome}</p>
                    </div>
                    <Link href={`/${time.url}`}>
                        <div className="flex gap-2">
                            <PlusIcon className="w-5 text-[#16C6D1]" />
                            <LockClosedIcon className="w-5 hidden" />
                            <LockOpenIcon className="w-5 text-green-500 hidden" />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}