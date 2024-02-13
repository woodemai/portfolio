import { ArrowLeftIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./button"

const LinkBack = ({ withText }: { withText?: boolean }) => {
    if (withText) {
        return (
            <Link to={'/'}>
                <Button variant={'secondary'} className="rounded-md max-w-fit cursor-pointer flex gap-x-4">
                    Назад
                    <ArrowLeftIcon />
                </Button>
            </Link>
        )
    }
    return (
        <Link to={'/'}>
            <div className="bg-card rounded-md p-1 max-w-fit cursor-pointer">
                <ArrowLeftIcon />
            </div>
        </Link>
    )
}

export default LinkBack