import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Toaster } from "@/shared/components/ui/toaster";
import Header from "./Header";
import { useLocation, useOutlet } from 'react-router-dom';
export default function RootLayout() {
    const location = useLocation()
    const currentOutlet = useOutlet()
    return (
        <>
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
                        <div className='mt-20' >
                            {currentOutlet}
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
        </>
    )
}