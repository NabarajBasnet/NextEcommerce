'use client'

import Sidebar from "@/components/sidebar/sidebar";
import { useState } from "react";


const AdminDashboard = ({children}) => {
    const [sidebar, setSidebar] = useState(true);

    return (
        <>
            <div className="w-full h-full">
                <div className="flex flex-row items-start">
                    <div>
                        {sidebar ? (
                            <Sidebar />
                        ) : ('')}
                    </div>

                    <div className= "w-full h-full">
                        <div className="bg-red-600 h-12 flex flex-row justify-between items-center">
                            <img
                                src="./icons/burgerrounded.png"
                                className="w-10"
                                onClick={() => setSidebar(!sidebar)}
                            />
                            <img
                                src="./icons/usericon.png"
                                className="w-10"
                            />
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;
