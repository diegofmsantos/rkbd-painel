"use client"

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { ArrowDownTrayIcon, TableCellsIcon } from "@heroicons/react/16/solid";
import Image from "next/image"
import Link from "next/link";

type Props = {
    params: {
        slug: string
    }
}

const Page = ({ params }: Props) => {

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
                <form className="flex flex-col gap-4">
                    <div className="flex justify-end gap-2">
                        <span className="hidden">Instagram:</span>
                        <Input placeholder="instagram" />
                    </div>
                    <div className="flex justify-end gap-2">
                        <span className="hidden">Twitter:</span>
                        <Input placeholder="twitter" />
                    </div>
                    <div className="flex justify-end gap-2">
                        <span className="hidden">Facebook:</span>
                        <Input placeholder="facebook" />
                    </div>
                    <div className="flex justify-end gap-2">
                        <span className="hidden">Youtube:</span>
                        <Input placeholder="youtube" />
                    </div>
                    <div className="flex justify-end gap-2">
                        <span className="hidden">TikTok:</span>
                        <Input placeholder="tiktok" />
                    </div>
                </form>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex justify-center items-center gap-7">
                        <Button>
                            <ArrowDownTrayIcon className="w-9 h-9" />
                            Salvar
                        </Button>
                        <Button>
                            <TableCellsIcon className="w-9 h-9" />
                            Cadastrar
                        </Button>
                    </div>
                    <Link
                        href={`/`}
                        className="bg-[#C1C1C1] w-44 mt-6 flex flex-col justify-center items-center p-1 rounded-md text-md font-bold duration-500 hover:bg-[#16C6D1]">
                        Voltar
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Page;