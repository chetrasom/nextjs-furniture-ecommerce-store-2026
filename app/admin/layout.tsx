'use client';

import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar";

import Sidebar from "./Sidebar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='lg:pt-20 2xl:pt-22'>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                <div className="lg:col-span-2">
                    <Sidebar />
                </div>
                <div className="border relative max-h-[calc(100dvh-16px)] overflow-auto lg:col-span-10">
                    <main className="p-4">{children}</main>
                </div>
            </div>
        </section>
    )
}

export default DashboardLayout