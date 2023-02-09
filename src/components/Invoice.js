import React from 'react'
import { useParams } from 'react-router-dom'

export default function Invoice() {
    let invoiceId = useParams().invoiceId
    let invoice = invoiceId ==1?'google':'apple'
  return (
    <div className="col-11 text-start">
        Invoice #{invoiceId} for {invoice}
    </div>
  )
}
