"use client"
import React, { useState } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { formNext, addOrderDetail } from '@/Redux/Slice/orderSlice'

function EventDetailForm() {

    const [imprinting, setImprinting] = useState("")

    const [orderDetail, setOrderDetail] = useState({
        eventType: "",
        eventDate: "",
        eventName: "",
        imprinting: imprinting
    })

    const dispatch = useDispatch()

    return (
        <>
            <div className="col-12">
                <div className="row">
                    <div className="col-6 my-2">
                        <div className="form-group">
                            <label htmlFor="">Event Type</label>
                            <select className="form-control" value={orderDetail.eventType} onChange={(e) => setOrderDetail({ ...orderDetail, eventType: e.target.value })} name="" id="">
                                <option value="">Select Event Type</option>
                                <option value="Wedding">Wedding</option>
                                <option value="pre-Wedding">pre-Wedding</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Sweet 16">Sweet 16</option>
                                <option value="Bar Mitzvah">Bar Mitzvah</option>
                                <option value="Bat Mitzvah">Bat Mitzvah</option>
                                <option value="Puberty Ceremony">Puberty Ceremony</option>
                                <option value="Baby Shower">Baby Shower</option>
                                <option value="Portfolio">Portfolio</option>
                                <option value="Guestbook">Guestbook</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6 my-2">
                        <div className="form-group">
                            <label htmlFor="">Event Date</label>
                            <input type="date" value={orderDetail.eventDate} onChange={(e) => setOrderDetail({ ...orderDetail, eventDate: e.target.value })} className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                        </div>
                    </div>
                    <div className="col-12 my-2">
                        <div className="form-group">
                            <label htmlFor="">Event Name</label>
                            <input type="text" value={orderDetail.eventName} onChange={(e) => setOrderDetail({ ...orderDetail, eventName: e.target.value })} className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                        </div>
                    </div>
                    <div className="col-12 my-2">
                        <label htmlFor="">Customize Message (500) *</label>
                        <textarea className="form-control" onChange={(e) => setOrderDetail({ ...orderDetail, customizeMessage: e.target.value })} rows="3"></textarea>
                    </div>
                    <div className="col-12 my-2">
                        <div className="form-group">
                            <label htmlFor="">Imprinting</label>
                            {/* check box */}
                        </div>
                        <div className='pro my-3' onClick={() => setImprinting("Laser Imprinting")} style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 50,
                            borderRadius: 5,
                            border: "2px solid #8ccec6",
                            backgroundColor: (imprinting == "Laser Imprinting") && '#8ccec6'
                        }} >
                            Laser Imprinting
                        </div>
                        <div className='pro my-3' onClick={() => setImprinting("Foil Imprinting")} style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 50,
                            borderRadius: 5,
                            border: "2px solid #8ccec6",
                            backgroundColor: (imprinting == "Foil Imprinting") && '#8ccec6'
                        }} >
                            Foil Imprinting
                        </div>
                    </div>
                </div>
            </div>
            <Button next={() => {
                dispatch(addOrderDetail(orderDetail))
            }} />
        </>
    )
}

export default EventDetailForm

