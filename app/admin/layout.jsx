import AdminSidebar from '@/components/admin-sidebar'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import UserNav from '@/components/user-nav'
import { Children } from 'react'

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      {/* 1. sidebar section  */}
      <AdminSidebar />

      {/*2. main content section */}
      <SidebarInset>
        <header className="sticky top-0 z-50  border-b bg-background">
          <div className=" flex items-center  h-16 justify-between ">
            <h1 className="text-xl font-bold">Admin dashboard</h1>

            {/* User dropdown navigation */}
            <UserNav/>
          </div>
        </header>
        <div className="flex-1 p-4 md:p-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
