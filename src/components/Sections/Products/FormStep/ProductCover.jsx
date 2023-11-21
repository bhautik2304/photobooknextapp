import React from 'react'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { changeCover, changeCoverOption, changeOrientationSize, changePageCount, changeSheet, formError as fcm, formNext, selectCoverOption } from '@/Redux/Slice/orderSlice'
import { zonePrice } from '@/utils'
import { localstorageKey } from '@/constants'
function ProductCover() {
  const { productcover, orderData, productcoveroption, formError } = useSelector(state => state.order)
  const disapatch = useDispatch()
  console.log(productcover);
  return (
    <>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12">
          <span className='text-danger' >{formError?.product_cover}</span>
          <><h6>Select your album cover</h6></>
          <div className="row">
            {productcover.map(data => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className={`size card p-2 my-2 pro ${orderData.productcover == data.id && 'selected_prod_size'}`} onClick={() => disapatch(changeCover({ cover: data }))} >
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={data.img} style={{ height: 70, width: 70 }} alt="" srcset="" />
                      <div>
                        {data.name}
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
        <div className="col-12 my-3">
          <span className='text-danger m-0 p-0' >{formError?.product_cover_option}</span>
          {(productcoveroption.length !== 0) &&
            <>
              <><h6>Select cover option</h6></>
              <div className="row">
                {productcoveroption.map(data =>
                  <>
                    <div className='col-2'>
                      <div onClick={() => disapatch(selectCoverOption({ coveroption: data }))} >
                        <img src={data.img} style={{ height: 120 }} className={`pro ${orderData.productcoveroption == data.id && 'selected_prod_cover_option'}`} alt="" srcset="" />
                      </div>
                      <div className="my-2" >
                        {data.coverOption}
                      </div>
                    </div>
                  </>) || <><h1>Select Size</h1></>}
              </div>
            </>
          }
        </div>
      </div>
      <Button next={() => {
        if (!orderData.productcover) {
          disapatch(fcm({ key: 'product_cover', error: 'Select one cover' }))
          return
        }
        if (!orderData.productcoveroption) {
          disapatch(fcm({ key: 'product_cover_option', error: 'select one cover option' }))
          return
        }
        disapatch(formNext())
      }
      } />
    </>
  )
}

export default ProductCover