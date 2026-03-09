import BreadCrumb from "@/components/global/BreadCrumb";

const AboutPage = () => {
    return (
        <section className='lg:pt-20 2xl:pt-22'>
            <BreadCrumb
                items={[
                    { label: "ទំព័រដើម", href: "/" },
                    { label: "អំពីយើង", href: "/products" },
                ]}
            />

            <h1 className="text-4xl font-bold">អំពីយើង</h1>
        </section>
    )
}

export default AboutPage;