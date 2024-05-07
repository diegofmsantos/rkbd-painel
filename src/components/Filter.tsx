import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export const Filter = () => {

    return (
        <div className="flex justify-around gap-6 my-6">
            <Select>
                <SelectTrigger className="w-[180px] font-bold flex flex-col h-20 rounded-3xl text-[18px]">
                    <span className="text-[#16C6D1]">Rede Social</span>
                    <SelectValue placeholder="Instagram" className="text-black" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="font-bold text-lg">
                        <SelectLabel>Instagram</SelectLabel>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="youtube">Youtube</SelectItem>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[180px] font-bold flex flex-col h-20 rounded-3xl text-[18px]">
                    <span className="text-[#16C6D1]">Temporada</span>
                    <SelectValue placeholder="2024" className="text-black" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="font-bold text-lg">
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[180px] font-bold flex flex-col h-20 rounded-3xl text-[18px]">
                    <span className="text-[#16C6D1] ">Mês</span>
                    <SelectValue placeholder="Maio" className="text-black" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="font-bold text-lg">
                        <SelectItem value="janeiro">Janeiro</SelectItem>
                        <SelectItem value="fevereiro">Fevereiro</SelectItem>
                        <SelectItem value="marco">Março</SelectItem>
                        <SelectItem value="abril">Abril</SelectItem>
                        <SelectItem value="maio">Maio</SelectItem>
                        <SelectItem value="junho">Junho</SelectItem>
                        <SelectItem value="julho">Julho</SelectItem>
                        <SelectItem value="agosto">Agosto</SelectItem>
                        <SelectItem value="setembro">Setembro</SelectItem>
                        <SelectItem value="outubro">Outubro</SelectItem>
                        <SelectItem value="novembro">Novembro</SelectItem>
                        <SelectItem value="dezembro">Dezembro</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}