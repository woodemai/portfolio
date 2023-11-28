import { ArrowLeftIcon } from "lucide-react"
import { Link } from "react-router-dom"

const LinkBack = () => {
    return (
        <Link to={'/'}>
            <div className="bg-card rounded-md p-1 max-w-fit cursor-pointer">
                <ArrowLeftIcon/>
            </div>
        </Link>
    )
}

export default LinkBack