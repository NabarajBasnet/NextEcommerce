const { default: Link } = require("next/link")


const Automotive = ()=>
{
    return(
        <>
        <ul>
            <li><Link href={'automotive/caraccessories/'}>Car Accessories</Link></li>
            <li><Link href={'automotive/bikeaccessories'}>Bike Accessories</Link></li>
        </ul>
        </>
    )
}

export default Automotive;