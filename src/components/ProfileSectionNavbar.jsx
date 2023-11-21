import React from 'react'

function ProfileSectionNavbar() {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item text-dark"><a href="#">Home</a></li>
                    <li className="breadcrumb-item text-dark"><a href="#">Products list</a></li>
                    <li className="breadcrumb-item text-dark active" aria-current="page">Single product</li>
                </ol>
            </nav>
        </>
    )
}

export default ProfileSectionNavbar