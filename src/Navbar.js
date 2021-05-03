import React, { useState } from 'react'

export default function Navbar() {

    const [navstatus, setnavstatus] = useState(0)
    const [divwidth, setdivwidth] = useState('0')

    function opennav() {
        if (navstatus==0) {
            setdivwidth('100%')
            setnavstatus(1)
        } else {
            setdivwidth('0px')
            setnavstatus(0)
        }
    }

    return (
        <div>
            <button className="btn btn-default" onClick={opennav} >
                    <i class="fas fa-bars"></i>
            </button>
            <div className="mainDiv" style={{ width: divwidth }} >
                
                <ul>
                    <li><a href="javascript:void(0);">Home</a></li>
                    <li><a href="javascript:void(0);">Services</a></li>
                    <li><a href="javascript:void(0);">Contact Us</a></li>
                    <li><a href="javascript:void(0);">About Us</a></li>
                </ul>
            </div>
        </div>
    )
}
