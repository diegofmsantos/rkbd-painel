import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export const Filter = () => {

    return (
        <div className="flex justify-around gap-6 my-6">
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