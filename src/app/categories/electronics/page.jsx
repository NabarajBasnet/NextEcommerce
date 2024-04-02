'use client'

import Link from "next/link";



function Electronics() {
  return (
    <>
    <div>
      <ul>
        <li><Link href={'electronics/laptops'}>Laptops</Link></li>
        <li><Link href={'electronics/smartphones'}>Smart Phones</Link></li>
        <li><Link href={'electronics/moniters'}>Moniters</Link></li>
        <li><Link href={'electronics/smartwatches'}>Smart Watches</Link></li>
        <li><Link href={'electronics/tablets'}>Tablets</Link></li>
        <li><Link href={'electronics/headphones'}>Headphones</Link></li>
      </ul>
    </div>
    </>
  )
}
export default Electronics;
