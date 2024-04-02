import Link from "next/link";


const ProductCategories = () => {
    return (
        <>
            <ul>
                <li><Link href={'categories/electronics'}>Electronics</Link></li>
                <li><Link href={'categories/fashion'}>Fashion</Link></li>
                <li><Link href={'categories/automotive'}>Automotive</Link></li>
            </ul>
        </>
    )
}

export default ProductCategories;