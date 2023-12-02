"use client"
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formBack } from '@/Redux/Slice/orderSlice'
import { appRoutes } from '@/constants'

function Button({ next }) {

    return (
        <>
            <div className="container my-2">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                    <div>
                        <BackBtn />
                        <NextBtn next={next} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Button

function BackBtn() {
    const { order } = useSelector(state => state)
    const dispatch = useDispatch()
    if (!(Number(order.formStep) == 0)) {
        return (
            <>
                <button className='mx-2 btn btn-dark btn-sm' style={{ cursor: 'pointer', backgroundColor: '#222221' }} onClick={() => dispatch(formBack())} >Previous</button>
            </>
        )
    }
}
function NextBtn({ next }) {
    const { order } = useSelector(state => state)
    const dispatch = useDispatch()
    if (!(Number(order.formStep) == 4)) {
        return (
            <>
                <button className='mx-2 btn btn-dark btn-sm' style={{ cursor: 'pointer', backgroundColor: '#222221' }} onClick={() => next()} >Next</button>
            </>
        )
    } else {
        return (
            <>
                <Link href={appRoutes.checkout} className='mx-2 btn btn-primary btn-sm ' style={{ cursor: 'pointer' }} >Plase Order</Link>
            </>
        )
    }
}

