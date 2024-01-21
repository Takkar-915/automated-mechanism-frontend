import { Header } from "../atoms/layout/Header"
export const DefaulLayout = (props: any) => {
    const { children } = props
    return (
        <>
            <Header />
            {children}
        </>
    )
}