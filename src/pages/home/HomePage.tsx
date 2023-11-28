import ProjectList from "@/widgets/ProjectList/ProjectList";
import Preview from "@/widgets/preview/Preview";

export default function HomePage() {
    return (
        <div className="p-2 sm:p-0 flex flex-col gap-y-8 jusitfy-start items-center mx-auto w-full h-full min-h-screen sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <Preview/>
            <ProjectList/>
        </div>
    )
}