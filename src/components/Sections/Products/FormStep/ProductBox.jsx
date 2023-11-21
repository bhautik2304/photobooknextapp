import React from 'react'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { changeBoxSleev, changeCover, changeCoverOption, changeOrientationSize, changePageCount, changeSheet, formError as fcm, formNext, selectCoverOption } from '@/Redux/Slice/orderSlice'
import { zonePrice } from '@/utils'
import { localstorageKey } from '@/constants'

function ProductBox() {
    const { productboxSleev, orderData, productcoveroption, formError } = useSelector(state => state.order)
    const disapatch = useDispatch()
    return (
        <>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                    <span className='text-danger' >{formError?.product_cover}</span>
                    <><h6>Box & sleeve</h6></>
                    <div className="row">
                        {productboxSleev.map(data => {
                            return (
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className={`size card p-2 my-2 pro ${orderData.productboxSleev == data.id && 'selected_prod_size'}`} onClick={() => disapatch(changeBoxSleev({ boxSleev: data }))} >
                                        <div className="d-flex justify-content-between align-items-center">
                                            <img src={data.img} style={{ height: 70, width: 70 }} alt="" srcset="" />
                                            <div>
                                                {data.boxsleev}
                                                <div  >
                                                    {localStorage.getItem(localstorageKey.zone) == 'IND' ? `${zonePrice(data.price)?.price || 0} ₹` : `${zonePrice(data.price)?.price || 0} $`}
                                                </div>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-12 my-4">
                    <span className='text-danger' >{formError?.product_cover_option}</span>
                    <><h6>Select option</h6></>
                    <div className="row">
                        {productcoveroption.map(data =>
                            <>
                                <div className="col-lg-4 col-md-4 col-sm-12">

                                    <div className={`size card p-2 my-2 pro ${orderData.productcoveroption == data.id && 'selected_prod_size'}`} onClick={() => disapatch(selectCoverOption({ coveroption: data }))} >
                                        <div className="d-flex justify-content-between align-items-center">
                                            <img src={data.img} style={{ height: 70, width: 70 }} alt="" srcset="" />
                                            <div></div>
                                            {data.coverOption}
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) || <><h1>Select Size</h1></>}
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4">

                </div>
            </div>
            <Button next={() => {
                if (!orderData.productcover) {
                    disapatch(fcm({ key: 'product_cover', error: 'Select one cover' }))
                    return
                }
                if (!orderData.productcoveroption) {
                    disapatch(fcm({ key: 'product_cover_option', error: 'Select one cover option' }))
                    return
                }
                disapatch(formNext())
            }
            } />
        </>

    )
}

export default ProductBox