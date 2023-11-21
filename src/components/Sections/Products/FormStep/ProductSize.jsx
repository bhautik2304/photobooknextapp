import React from 'react'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { changeOrientationSize, changePageCount, changeSheet, formError as fcm, formNext, changePapertypeOption } from '@/Redux/Slice/orderSlice'
import { zonePrice } from '@/utils'
import { localstorageKey } from '@/constants'

function ProductSize() {
  const { productSize, orderData, productSheet, product, formError, productpaperType } = useSelector(state => state.order)
  const disapatch = useDispatch()
  return (
    <>

      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12">
          <span className='text-danger' >{formError?.product_size}</span>
          <><h6>Select size</h6></>
          <div className="row">
            {productSize.map(data => (
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className={`size card p-2 my-2 pro ${orderData.productSize == data.id && 'selected_prod_size'}`} onClick={() => disapatch(changeOrientationSize({ size: data }))} >
                  <div className="d-flex justify-content-between align-items-center">
                    <img src={data.img} style={{ height: 70, width: 70 }} alt="" srcset="" />
                    {data.size}
                    <div></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {
          orderData.productSize &&
          <>
            <div className="col-12 my-3">
              <span className='text-danger' >{formError?.product_sheet}</span>
              <><h6>Select your sheet</h6></>
              <div className="row">
                {productSheet.map(data => <>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className={`size card p-2 my-2 pro ${orderData.productSheet == data.id && 'selected_prod_size'}`} onClick={() => disapatch(changeSheet({ sheet: data }))} >
                      <div className="d-flex justify-content-between align-items-center">
                        <img src={data.img} style={{ height: 70, width: 70 }} alt="" srcset="" />
                        <div  >
                          {data.papper}
                          <div  >
                            {localStorage.getItem(localstorageKey.zone) == 'IND' ? `${zonePrice(data.price)?.price || 0} ₹` : `${zonePrice(data.price)?.price || 0} $`}
                            {/* {`${zonePrice(data.price)?.price} ₹`} */}
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </>) || <><h1>Select Size</h1></>}
              </div>
            </div>
            <div className="col-12 my-3">
              <span className='text-danger' >{formError?.product_sheet}</span>
              <><h6>Select your paper type</h6></>
              <div className="row">
                {productpaperType.map(data => <>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className={`size card p-2 my-2 pro ${orderData.paperType == data.id && 'selected_prod_size'}`} onClick={() => disapatch(changePapertypeOption({ papertype: data }))} >
                      <div className="d-flex justify-content-between align-items-center">
                        <img src={data.img} style={{ height: 70, width: 70 }} alt="" srcset="" />
                        <div>
                          {data.papertype}
                          <div  >
                            {`${data.value} %`}
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </>) || <><h1>Select Size</h1></>}
              </div>
            </div>
            <div className='my-5' >
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h6>Total pages to print</h6>
                  <span className='text-danger' >{formError?.product_page}</span>
                  <input className='form-control form-control-lg my-2' onChange={(e) => disapatch(changePageCount(e.target.value))} type="number" value={orderData.page_qty} />
                  <p>Enter your total pages to print for the album</p>
                </div>
              </div>
            </div>
          </>
        }
      </div>
      <Button next={() => {
        if (!orderData.productSize) {
          disapatch(fcm({ key: 'product_sheet', error: 'Please select one size' }))
          return 0
        }
        if (!orderData.productSheet) {
          disapatch(fcm({ key: 'product_size', error: 'Please select one sheet' }))
          return 0
        }
        if ((orderData.page_qty <= product?.minPage)) {
          disapatch(fcm({ key: 'product_page', error: `Minimum page ${product?.minPage}+` }))
          return 0
        }
        disapatch(formNext())
      }} />
    </>
  )
}

export default ProductSize

