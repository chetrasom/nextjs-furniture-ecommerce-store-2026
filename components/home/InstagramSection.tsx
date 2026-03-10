import Image from "next/image";

const images = [
    "/images/instagram/insta-1.jpg",
    "/images/instagram/insta-2.jpg",
    "/images/instagram/insta-3.jpg",
    "/images/instagram/insta-4.jpg",
    "/images/instagram/insta-5.jpg",
    "/images/instagram/insta-6.jpg",
    "/images/instagram/insta-7.jpg",
    "/images/instagram/insta-8.jpg",
];

const InstagramSection = () => {
    return (
        <section className="py-16">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold tracking-tight capitalize md:text-2xl lg:text-[28px] font-kh-kantumruy">
                    តាមដានពួកយើងនៅលើ INSTAGRAM
                </h2>
                <p className="text-gray-500">@Furnova</p>
            </div>

            <div className="flex gap-1 overflow-x-auto snap-x snap-mandatory no-scrollbar">
                {images.map((img, index) => (
                    <figure
                        key={index}
                        className="min-w-50 h-50 relative snap-start"
                    >
                        <Image
                            src={img}
                            alt="instagram image"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                            className="object-cover rounded-lg hover:scale-105 transition"
                        />
                    </figure>
                ))}
            </div>
        </section>
    )
}

export default InstagramSection;