import React from 'react'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { changeCover, changeColor, formError as fcm, formNext, selectCoverOption, addCoverphoto } from '@/Redux/Slice/orderSlice'
import { zonePrice } from '@/utils'
import { localstorageKey } from '@/constants'
function ProductCover() {
  const { productcover, orderData, productcoveroption, formError, productcolor } = useSelector(state => state.order)
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
                  <div className={`size card my-2 pro ${orderData.productcover == data.id && 'selected_prod_size'}`} onClick={() => disapatch(changeCover({ cover: data }))} >
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={data.cover.img} style={{ height: 70, width: 70, padding: '5px' }} alt="" srcset="" />
                      <div>
                        {data.cover.name}
                        <div  >
                          {zonePrice(data.coverprice).priceSrring}
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
        <div className="col-7 my-3">
          {orderData.coverType == "img" &&
            (
              <>
                <label>Upload your frontside photo *</label>
                <input className='form-control form-control-sm my-2' type="file" onChange={(e) => {
                  disapatch(addCoverphoto({ coverphoto: e.target.files[0] }))
                localStorage.setItem(localstorageKey.coverphoto, e.target.files[0]);
                }} />
              </>
            )}
        </div>
        <div className="col-12 my-3">
          <span className='text-danger m-0 p-0' >{formError?.product_cover_option}</span>
          {(productcoveroption.length !== 0) &&
            <>
              <><h6>Select Leather option</h6></>
              <div className="row">
                {productcoveroption.map(data =>
                  <>
                    <div className='col-2'>
                      <div onClick={() => disapatch(selectCoverOption({ coveroption: data }))} >
                        <img src={data.img} style={{ width: 120 }} className={`pro ${orderData.productcoveroption == data.id && 'selected_prod_cover_option'}`} alt="" srcset="" />
                      </div>
                      <div className="my-2" >
                        {data.name}
                      </div>
                    </div>
                  </>) || <><h1>Select Size</h1></>}
              </div>
            </>
          }
          {(productcolor.length !== 0) &&
            <>
              <><h6>Select Lether Color option</h6></>
              <div className="row">
                {productcolor.map(data => {
                  console.log("color")
                  console.log(data)
                  return (
                    <>
                      <div className='col-2'>
                        <div onClick={() => disapatch(changeColor({ color: data }))} >
                          <div style={{ width: 120, height: 120, backgroundColor: data.colorcode }} className={`pro ${orderData.productcolor == data.id && 'selected_prod_cover_option'}`} alt="" srcset="" />
                        </div>
                        <div className="my-2" >
                          {data.name}
                        </div>
                      </div>
                    </>
                  )
                })
                }
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