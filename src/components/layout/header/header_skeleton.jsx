import { Skeleton } from "@/components/ui/skeleton"

const Header_Skeleton = () => {
  return (
    <div className="w-screen h-16 bg-white dark:bg-[#0f0f10] text-black dark:text-white">
        <div className="flex items-center justify-between px-4 h-full">
            <div className="lg:hidden flex flex-col gap-1">
                <Skeleton className="h-1 w-8" />
                <Skeleton className="h-1 w-8" />
                <Skeleton className="h-1 w-8" />
            </div>
            <div className="lg:flex items-center gap-4 flex-1 hidden">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-8 w-32" />
            </div>
            <div className="flex-1 flex items-center justify-end px-1 gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-10 rounded" />
            </div>
        </div>
    </div>
  )
}

export default Header_Skeleton;