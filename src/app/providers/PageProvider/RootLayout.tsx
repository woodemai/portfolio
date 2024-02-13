import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Toaster } from "@/shared/components/ui/toaster";
import Header from "./Header";
import { useLocation, useOutlet } from 'react-router-dom';
import Footer from './Footer';
export default function RootLayout() {
    const location = useLocation()
    const currentOutlet = useOutlet()
    return (
        <main className=' bg-gradient-to-r from-sky-50 dark:from-sky-950 to-gray-100 dark:to-blue-950'>
            <Header />
            <Toaster />
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    timeout={300}
                    classNames={'page'}
                    unmountOnExit
                >
                    {() => (
                        <div className='mt-4'>
                            {currentOutlet}
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
            <Footer />
        </main>
    )
}