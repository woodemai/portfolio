import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Toaster } from "@/shared/components/ui/toaster";
import { Outlet } from "react-router";
import Header from "./Header";
import { useLocation, useOutlet } from 'react-router-dom';
import router from './router';

export default function RootLayout() {
    const location = useLocation()
    const currentOutlet = useOutlet()
    
  const { nodeRef } = router.routes.find((route) => route.path === location.pathname) ?? {}
    return (
        <>
            <Header/>
            <Toaster/>  
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames={'page'}
                    unmountOnExit
                >
                    {() => (
                        <div ref={nodeRef}>
                            {currentOutlet}
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
            <Outlet />
        </>
    )
}