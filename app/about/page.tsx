import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "@/components/global/BreadCrumb";
import { Button } from '@/components/ui/button';
import { Truck, ShieldCheck, Sparkles, Wallet } from "lucide-react";

const AboutPage = () => {
    return (
        <main className='lg:pt-20 2xl:pt-22 bg-background'>
            <BreadCrumb
                items={[
                    { label: "ទំព័រដើម", href: "/" },
                    { label: "អំពីយើង", href: "/products" },
                ]}
            />

            {/* Hero / Title Section */}
            <section className="pt-20 pb-10 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    គោលបំណងនៃការបង្កើត Furnova
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    គ្រឿងសង្ហារឹមទាន់សម័យ និងមានគុណភាពខ្ពស់ សម្រាប់ផ្ទះរបស់អ្នក
                </p>
            </section>

            {/* Mission Section */}
            <section className="py-10 bg-muted rounded-lg p-4">
                <div className="container mx-auto max-w-4xl text-center space-y-6">
                    
                    <p className="text-muted-foreground leading-relaxed lg:text-lg">
                        គោលបំណងរបស់ Furnova គឺផ្តល់នូវគ្រឿងសង្ហារឹមដែលមានគុណភាពខ្ពស់ និងរចនាទាន់សម័យ
                        ដើម្បីធ្វើឱ្យផ្ទះរបស់អ្នកកាន់តែស្រស់ស្អាត និងផាសុកភាព។ នៅ Furnova យើងជឿជាក់ថា គ្រឿងសង្ហារិមមិនមែនគ្រាន់តែជារបស់របរដែលបំពេញចន្លោះនោះទេ - វាគឺជាការឆ្លុះបញ្ចាំងពីអ្នកជានរណា បុគ្គលិកលក្ខណៈ និងរបៀបរស់នៅរបស់អ្នក។
                    </p>
                    <p className="text-muted-foreground leading-relaxed lg:text-lg">
                        យើងមានមោទនភាពក្នុងការផ្តល់ជូនអ្នកនូវគ្រឿងសង្ហារិមលំដាប់ខ្ពស់ និងមានតម្លៃសមរម្យ ដែលប្រែក្លាយផ្ទះរបស់អ្នកទៅជាផ្ទះមួយ។ មិនថាអ្នកកំពុងតុបតែងបន្ទប់ទទួលភ្ញៀវ បន្ទប់គេង ឬកន្លែងធ្វើការរបស់អ្នកទេ យើងមានគ្រឿងសង្ហារិមដ៏ល្អឥតខ្ចោះ ដើម្បីបង្កើតបរិយាកាសកក់ក្ដៅ មានផាសុកភាព និងទាន់សម័យ។
                    </p>
                    <p className="text-muted-foreground leading-relaxed lg:text-lg">
                        យើងចង់ឱ្យអតិថិជនមានបទពិសោធន៍ការជាវគ្រឿងសង្ហារឹមដែលងាយស្រួល និងមានភាពរីករាយ។  
                    </p>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
                {/* Image */}
                <figure className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-100">
                    <Image
                        src="/images/hero/about-us-2-default.jpg"
                        alt="ក្រុមរបស់ Furnova"
                        fill
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                        className="object-cover rounded-lg shadow-lg"
                    />
                    <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                        ក្រុមរបស់ Furnova
                </figcaption>
                </figure>

                {/* Text */}
                <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                    <h2 className="text-3xl font-bold">អំពីពួកយើង</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Furnova គឺជាហាងគ្រឿងសង្ហារឹមដែលផ្តោតលើការផ្គត់ផ្គង់ផលិតផលដែលមានគុណភាពខ្ពស់ និងរចនាទាន់សម័យ
                        សម្រាប់ផ្ទះទំនើបនៅកម្ពុជា។  
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        ជាមួយ Furnova អ្នកអាចស្វែងរកគ្រឿងសង្ហារឹមដែលផ្គូផ្គងនឹងរចនាបថផ្ទះរបស់អ្នក និងធ្វើឱ្យលំហររបស់អ្នកកាន់តែស្រស់ស្អាត។  
                    </p>
                    <Button asChild>
                        <Link href="/products">ស្វែងរកផលិតផលរបស់យើង</Link>
                    </Button>
                </div>
                </div>
            </section>

            <section className="py-10 md:pb-16">
                <div className="container mx-auto text-center">

                    <h2 className="text-3xl font-bold mb-4">
                    ហេតុអ្វីជ្រើសរើស Furnova
                    </h2>

                    <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                    Furnova ផ្តល់ជូននូវគ្រឿងសង្ហារឹមដែលមានគុណភាពខ្ពស់ និងរចនាទាន់សម័យ
                    ដើម្បីធ្វើឱ្យផ្ទះរបស់អ្នកកាន់តែស្រស់ស្អាត និងផាសុកភាព។
                    </p>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="p-6 bg-background rounded-xl shadow-sm">
                        <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-primary" />
                        <h3 className="font-semibold text-lg mb-2">
                        គុណភាពខ្ពស់
                        </h3>
                        <p className="text-sm text-muted-foreground">
                        ផលិតផលរបស់យើងត្រូវបានជ្រើសរើសដោយយកចិត្តទុកដាក់
                        ដើម្បីធានាគុណភាពល្អបំផុត។
                        </p>
                        </div>

                        <div className="p-6 bg-background rounded-xl shadow-sm">
                            <Sparkles className="mx-auto mb-4 h-10 w-10 text-primary" />
                            <h3 className="font-semibold text-lg mb-2">
                            រចនាទាន់សម័យ
                            </h3>
                            <p className="text-sm text-muted-foreground">
                            គ្រឿងសង្ហារឹមដែលសមស្របសម្រាប់ផ្ទះទំនើប
                            និងការតុបតែងបែបទាន់សម័យ។
                            </p>
                        </div>

                        <div className="p-6 bg-background rounded-xl shadow-sm">
                            <Truck className="mx-auto mb-4 h-10 w-10 text-primary" />
                            <h3 className="font-semibold text-lg mb-2">
                            ដឹកជញ្ជូនរហ័ស
                            </h3>
                            <p className="text-sm text-muted-foreground">
                            យើងផ្តល់សេវាកម្មដឹកជញ្ជូនលឿន
                            ដើម្បីឱ្យអ្នកទទួលបានផលិតផលឆាប់រហ័ស។
                            </p>
                        </div>

                        <div className="p-6 bg-background rounded-xl shadow-sm">
                            <Wallet className="mx-auto mb-4 h-10 w-10 text-primary" />
                            <h3 className="font-semibold text-lg mb-2">
                            តម្លៃសមរម្យ
                            </h3>
                            <p className="text-sm text-muted-foreground">
                            យើងផ្តល់តម្លៃសមរម្យ
                            ដើម្បីឱ្យអ្នកអាចទិញគ្រឿងសង្ហារឹមបានយ៉ាងងាយស្រួល។
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-muted text-center rounded-lg">
                <div className="container mx-auto flex flex-col md:flex-row justify-around gap-10">
                    <div className="space-y-3">
                        <h3 className="text-3xl font-bold">100+</h3>
                        <p>អតិថិជនរីករាយ</p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-3xl font-bold">20+</h3>
                        <p>ផលិតផល</p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-3xl font-bold">5+</h3>
                        <p>ឆ្នាំបទពិសោធន៍</p>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default AboutPage;