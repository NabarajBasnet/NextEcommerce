
'use client'
import { useState } from "react"



const Customers = () =>
{

  const [checked, setChecked] = useState('Pending')
  const [delivered, setDeliviry] = useState('On the way')
    return (
      <div>

        <div>
          <h1>Sort By</h1>
          <select>
            <option>Orders</option>
            <option>Paid</option>
            <option>Unpaid</option>
            <option>Deliverd</option>
            <option>Delivering</option>
          </select>
        </div>

        <ul>
          <li>Name</li>
          <li>Address</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Order</li>
          <li>Order History</li>
          <li>
            <h1>Payment</h1>
            <input type="text" value={checked}/>  
          </li>
          <li>
            <h1>Delivered</h1>
            <input type="text" value={delivered}/>  
          </li>
        </ul>
      </div>
    )
  }
  
  export default Customers