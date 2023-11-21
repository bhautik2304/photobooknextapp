
import React from 'react'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { formNext } from '../../../../Redux/Slice/orderSlice'


function ProductSelect() {
  const disapatch = useDispatch()
  return (
    <>
      <Button next={() => disapatch(formNext())} />
    </>
  )
}

export default ProductSelect