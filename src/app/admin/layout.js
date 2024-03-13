import Sidebar from "@/components/sidebar/sidebar";

export const metadata = {
  title: 'ACME ADMIN'
}

export default function AdminLayout({ children }) {
  return (
    <div className='flex w-full'>
      <div className="w-64 h-screen fixed">
        <Sidebar />
      </div>
      <div className="flex-grow overflow-y-auto ml-64 mt-20">
        {children}
      </div>
    </div>
  );
}
