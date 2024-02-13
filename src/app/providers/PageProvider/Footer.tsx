import PreviewLink from "@/widgets/preview/PreviewLink";

const Footer = () => {

    return (
        <footer className="w-full min-h-8 p-4 shadow-sm backdrop-blur-md bg-opacity-20 bg-gray-300 mt-4 flex justify-center items-center">
            <div className="flex justify-between max-w-xl w-full gap-x-4">
                <PreviewLink href="https://t.me/woodemai" label='Телеграм' />
                <PreviewLink href="https://vk.com/woodemai" label='ВК' />
                <PreviewLink href="https://github.com/woodemai" label='GitHub' />
            </div>
                
        </footer>
    )
}

export default Footer;