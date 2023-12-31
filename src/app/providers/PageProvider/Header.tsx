import { ModeToggle } from "@/shared/components/ui/theme-toggle"


const Header = () => {
  return (
    <header className="flex flex-row justify-between border-card border-b items-center gap-x-4 p-4 w-full shadow-sm backdrop-blur-md bg-opacity-50 fixed top-0">
      <div className="flex flex-row gap-4 items-end">
        <img src="avatar.jpeg" alt="avatar" width={48} height={48} className="rounded-full" />
        <h1 className="font-light pb-1">N.S. Portfolio</h1>
      </div>
      <ModeToggle />
    </header>
  )
}

export default Header