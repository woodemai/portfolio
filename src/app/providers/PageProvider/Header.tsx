import { ModeToggle } from "@/shared/components/ui/theme-toggle"


const Header = () => {
  return (
    <div className="flex flex-row justify-between border-card border-b items-center gap-x-4 p-4 w-full shadow-sm mb-4">
      <div className="flex flex-row gap-4 items-end">
        <img src="avatar.jpeg" alt="avatar" width={48} height={48} className="rounded-full" />
        <h1 className="font-light pb-1">N.S. Portfolio</h1>
      </div>
      <ModeToggle />
    </div>
  )
}

export default Header