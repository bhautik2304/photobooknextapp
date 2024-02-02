import { Checkout, NotsupportedScreen } from "@/components"


function page() {
    return (
        <>
            <div className='d-none d-lg-block'>
                <Checkout />
            </div>
            <div className="d-block d-lg-none">
                <NotsupportedScreen />
            </div>
        </>
    )
}

export default page