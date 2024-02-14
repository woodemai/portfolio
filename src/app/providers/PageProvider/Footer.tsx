import PreviewLink from "@/widgets/preview/PreviewLink";

const Footer = () => {

    return (
        <footer className="w-full min-h-8 p-4 shadow-sm backdrop-blur-md bg-opacity-20 bg-gray-300 mt-4 flex justify-center items-center">
            <div className="flex justify-between max-w-xl w-full gap-x-4">
                <PreviewLink href="https://t.me/woodemai" imageSrc="/icons/telegram-logo.svg"/>
                <PreviewLink href="https://vk.com/woodemai" imageSrc="/icons/vk-logo.svg"/>
                <PreviewLink href="https://github.com/woodemai" imageSrc="/icons/github-logo.svg"/>
                    </div>
                
        </footer>
    )
}

export default Footer;