import { ModeToggle } from "@/shared/components/ui/theme-toggle"
import Logo from "./Logo"


const Header = () => {
  return (
    <header className="z-10 flex flex-row justify-between border-card items-center gap-x-4 p-4 w-full shadow-sm backdrop-blur-md bg-opacity-20 bg-gray-300  sticky top-0">
      <div className="flex flex-row gap-4 items-end">
        <Logo/>
        <h1 className="font-light pb-1">N.S. Portfolio</h1>
      </div>
      <ModeToggle />
    </header>
  )
}

export default Header