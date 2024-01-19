import LayoutHeading from "../Heading"

export default function GuestLayout({ children }: { children: React.ReactNode }) {


    const Layout = () => (
        <div className="layout">
            <div className="layout-container">
                {/* <LayoutHeading /> */}
                {children}
            </div>
        </div>
    )


    return <Layout />
}