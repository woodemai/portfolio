import { Label } from "@/shared/components/ui/label";

const Footer = () => {

    return (
        <footer className="w-full min-h-4 border-t-2 mt-2 flex flex-col justify-center items-center">
            <div className="gap-x-4 flex items-center justify-left p-2">
                <Label>Telegram:</Label>
                <a className="text-primary underline-offset-4 hover:underline" href="https://t.me/woodemai" target="_blank">woodemai</a>
            </div>
            <div className="gap-x-4 flex items-center justify-left p-2">
                <Label>VK:</Label>
                <a className="text-primary underline-offset-4 hover:underline" href="https://vk.com/woodemai" target="_blank">Николай Савченко</a>
            </div>
        </footer>
    )
}

export default Footer;