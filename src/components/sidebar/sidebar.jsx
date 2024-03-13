import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  PlusIcon,
  ViewListIcon,
  CogIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  const menuItems = [
    { title: "Overview", href: "/admin/overview", icon: HomeIcon },
    { title: "Customers", href: "/admin/customers", icon: UserIcon },
    { title: "Add Products", href: "/admin/manageproducts", icon: PlusIcon },
    { title: "All Products", href: "/admin/allproducts", icon: ViewListIcon },
    { title: "Settings", href: "/admin/settings", icon: CogIcon },
    { title: "Account", href: "/admin/account", icon: UserCircleIcon },
  ];

  return (
    <div className="flex flex-col h-screen w-64 bg-gradient-to-b from-gray-800 to-gray-700 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <ul className="flex flex-col space-y-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center py-2 px-4 cursor-pointer hover:bg-gray-600 rounded"
          >
            <Link href={item.href}>
              <div className="flex items-center space-x-2">
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
