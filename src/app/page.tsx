"use client"

import { Filter } from "@/components/Filter";
import { TimeList } from "@/components/TimeList";

const Page = () => {



    return (
        <div className="flex flex-col gap-5">
            <Filter />
            <TimeList />
        </div>
    )
}

export default Page;