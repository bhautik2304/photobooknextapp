"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import {localstorageKey} from '@/constants'

function TotalCard() {
    const { orderData } = useSelector(state => state.order)

    return (
        <>
            <div className="card">
                <div className="card-header py-4">
                    <h6 className='my-0 py-0' >Total</h6>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center my-3">
                        <div>Sheet Price</div>
                        {localStorage.getItem(localstorageKey.zone) == 'IND' ? `RS. ${orderData.sheetTotale || 0} X ${orderData.page_qty}` : `$ ${orderData.sheetTotale || 0} X ${orderData.page_qty}`}
                    </div>
                    <div className="d-flex justify-content-between align-items-center my-3">
                        <div>Total </div>
                        {localStorage.getItem(localstorageKey.zone) == 'IND' ? `RS. ${orderData.orderTotale || 0}` : `$ ${orderData.orderTotale || 0}`}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalCard