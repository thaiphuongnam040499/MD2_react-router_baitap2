import React from 'react'

export default function NewInvoice() {
    return (
        <div className="col-11 text-start">
        <h4>New Invoice</h4>
        <div className="input-group mb-3">
            <input type="text" className="form-control"
                   aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <button className="input-group-text" >Create</button>
        </div>
    </div>
    )
}
