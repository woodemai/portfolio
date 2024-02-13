import { Button } from "@/shared/components/ui/button"
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
                    <h3 className="mb-4">Контактная информация 🤙🏻</h3>
                    <div className="flex justify-between gap-x-4">
                        <PreviewLink href="https://t.me/woodemai" label='Телеграм' />
                        <PreviewLink href="https://vk.com/woodemai" label='ВК' />
                        <PreviewLink href="https://github.com/woodemai" label='GitHub' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Preview