import React from 'react'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { changeOrientation, formNext,formError } from '@/Redux/Slice/orderSlice'

function ProductOrientation() {
  const { order } = useSelector(state => state)

  const disapatch = useDispatch()
  return (
    <>
      <span className='text-danger' >{order.formError?.product_orientation}</span>
      {
        order.product?.Orientation ?
          <>
            {
              order.product?.Orientation.map((data, key) => (
                <>
                  <div key={key} className="col-lg-3 col-md-3 col-sm-12">
                    <div className={`pro ${(order.orderData?.productOrientation == data.id) ? 'selected_prod' : null}`} onClick={() => disapatch(changeOrientation({ product: data }))} >
                      <img src={data?.img} alt="" srcset="" />
                    </div>
                      <h6 className="my-3" >{data.orientation}</h6>
                  </div>
                </>
              ))
            }
          </> : null
      }
      <Button next={() => {
        if (!order.orderData?.productOrientation) {
          disapatch(formError({key:'product_orientation',error:'Please select orientation'}))
          return 0
        }
        disapatch(formNext())
        }} />
    </>
  )
}

export default ProductOrientation