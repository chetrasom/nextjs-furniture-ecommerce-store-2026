import Link from "next/link"

const SpecialPromotion = () => {
    return (
        <section
            className="relative py-24 mt-10 text-center text-white rounded-lg overflow-hidden mx-4 md:mx-0"
            style={{ backgroundImage: 'url(/images/hero/default-2-carousel2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    🔥 កុំខកខានការបញ្ចុះតម្លៃពិសេស!
                </h2>
                <p className="mb-6 text-lg md:text-xl">
                    ទិញឥឡូវនេះ និងទទួលបានការបញ្ចុះតម្លៃពិសេសលើផលិតផលជ្រើសរើស
                </p>
                <Link
                    href="/products"
                    className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
                >
                    មើលផលិតផលទាំងអស់
                </Link>
            </div>
        </section>
    )
}

export default SpecialPromotion