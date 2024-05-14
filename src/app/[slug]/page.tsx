"use client"

import React, { FormEvent, useState } from 'react';
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Sonner } from "@/components/Sonner";
import { ArrowDownTrayIcon, TableCellsIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: {
        slug: string
    }
}

const Page = ({ params }: Props) => {

    const [inputValues, setInputValues] = useState<string[]>(['', '', '', '', '']);

    const handleInputChange = (index: number, value: string) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(inputValues)
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center gap-8 w-96 h-[550px]">
                <div className="w-44 h-44 flex flex-col justify-center items-center">
                    <div className="w-full flex justify-center items-center">
                        <Image
                            src={`/assets/logos-times/${params.slug}`}
                            width={150}
                            height={150}
                            alt="Logo"
                            priority />
                    </div>
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <Input
                        placeholder="instagram"
                        onInputchange={(newValue) => handleInputChange(0, newValue)}
                    />
                    <Input
                        placeholder="twitter"
                        onInputchange={(newValue) => handleInputChange(1, newValue)}
                    />
                    <Input
                        placeholder="facebook"
                        onInputchange={(newValue) => handleInputChange(2, newValue)}
                    />
                    <Input
                        placeholder="youtube"
                        onInputchange={(newValue) => handleInputChange(3, newValue)}
                    />
                    <Input
                        placeholder="tiktok"
                        onInputchange={(newValue) => handleInputChange(4, newValue)}
                    />
                    <div className="flex justify-center items-center gap-7">
                        <Button>
                            <ArrowDownTrayIcon className="w-9 h-9" />
                            Salvar
                        </Button>
                        <Sonner>
                            <TableCellsIcon className="w-9 h-9" />
                            Cadastrar
                        </Sonner>
                    </div>
                </form>
                <Link
                    href={`/`}
                    className="bg-[#C1C1C1] w-44 mt-6 flex flex-col justify-center items-center p-1 rounded-md text-md font-bold duration-500 hover:bg-[#16C6D1]">
                    Voltar
                </Link>
            </div>
        </div>
    )
}

export default Page;
