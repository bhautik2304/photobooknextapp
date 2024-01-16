import React from 'react'
import { ShowProduct, TotalCard } from '@/components'

function page() {

    return (
        <>

            <div className="container-fluid py-5" style={{ backgroundColor: '#80d0c7', backgroundImage: 'linear-gradient(160deg, #80d0c7 1%, #80D0C7 4%)' }}>
                <div className="row">
                    <div className="d-flex justify-content-center aligns-item-center">
                        <div className='col-7 noothing'>
                            <div className="card shadw-sm p-5">
                                <ShowProduct />
                            </div>
                        </div>
                        {/* <div className="col-2 mx-2">
                            <TotalCard />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default page