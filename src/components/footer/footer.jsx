import Link from "next/link"


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-around items-center">
                    <div className="w-full md:w-1/3 lg:w-auto mb-6 md:mb-0">
                        <h1 className="text-2xl font-bold"><Link href={'/'}>ACME</Link></h1>
                    </div>

                    <div className="w-full md:w-1/3 lg:w-auto mb-6 md:mb-0">
                        <ul className="space-y-2">
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/all'}>All Products</Link></li>
                            <li><Link href={'/categories/electronics'}>Electronics</Link></li>
                            <li><Link href={'/categories/fashion'}>Fashion</Link></li>
                            <li><Link href={'/categories/automotives'}>Automotives</Link></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/3 lg:w-auto mb-6 md:mb-0">
                        <ul className="flex flex-col space-x-4">
                            <li><Link href={''}>Facebook</Link></li>
                            <li><Link href={''}>Instagram</Link></li>
                            <li><Link href={''}>Twitter</Link></li>
                            <li><Link href={''}>Linkedin</Link></li>
                            <li><Link href={''}>YouTube</Link></li>
                            <li><Link href={''}>GitHub</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
