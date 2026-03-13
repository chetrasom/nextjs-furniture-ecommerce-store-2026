'use client';

import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        // <section className='lg:pt-20 2xl:pt-22'>
        //     <div className="bg-red-400 font-kh-kantumruy">
        //        ឃ្លាំងគ្រប់គ្រងទិន្នន័យ
        //     </div>
        //     <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        //         <div className="lg:col-span-2">
        //             <Sidebar />
        //         </div>
        //         <div className="bg-muted/25 rounded-lg relative max-h-[calc(100dvh-16px)] overflow-auto lg:col-span-10">
        //             <main className="p-4">{children}</main>
        //         </div>
        //     </div>
        // </section>

        <section className="font-kh-kantumruy bg-muted/40 lg:pt-20 2xl:pt-22">
      
            {/* Header */}
            <div className="border-b bg-background px-6 py-4 mb-6">
                <h1 className="text-xl font-semibold text-center md:text-2xl">
                    ឃ្លាំងគ្រប់គ្រងទិន្នន័យ Furniture Store
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* Sidebar */}
                <aside className="lg:col-span-2 border-b lg:min-h-[calc(100vh-64px)] bg-background">
                    <Sidebar />
                </aside>

                {/* Main Content */}
                <main className="lg:col-span-10 px-2 py-6 md:px-6 lg:py-0">
                    <div className="bg-background rounded-xl shadow-sm border p-6">
                        {children}
                    </div>
                </main>

            </div>
        </section>
    )
}

export default DashboardLayout