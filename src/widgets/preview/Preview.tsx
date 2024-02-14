import PreviewLink from "./PreviewLink"

const Preview = () => {
    return (
        <section className="flex flex-col w-full gap-y-4">
            <h2>Главное</h2>
            <div className="gap-y-4 flex flex-col">
                <p>Привет 👋! Я <span className="font-bold">Николай Савченко</span> мне 18 лет, ниже немного информации обо мне.</p>
                <div>
                    <h3>Образование 🎓</h3>
                    <p>В данный момент я учусь в Воронежском Государственном университете на бакалавриате на факультете компьютерных наук. Моя специальность - Инфромационная безопасность.
                        Закончу бакалавриа я в 2026 году</p>
                </div>
                <div>
                    <h3>Специальность 🧑‍💻</h3>
                    <p>Я фронтенд разработчик. Мой стек React / Redux ⚛️. Также писал бэкенд на Java и Node.js. Использовал другие стейт менеджеры по мимо Redux такие как MobX.
                        Есть несколько пет-проектов ознакомиться с которыми можно ниже ⬇️.
                    </p>
                </div>
                <div>
                    <h3 className="mb-4">Связаться со мной 🤙🏻</h3>
                    <div className="flex justify-between gap-x-4">
                        <PreviewLink href="https://t.me/woodemai" imageSrc="/icons/telegram-logo.svg">Телеграм</PreviewLink>
                        <PreviewLink href="https://vk.com/woodemai" imageSrc="/icons/vk-logo.svg" >ВК</PreviewLink>
                        <PreviewLink href="https://github.com/woodemai" imageSrc="/icons/github-logo.svg">GitHub</PreviewLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Preview