"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { heroes } from "@/data";

const HeroCarousel = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
        return;
    }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="mx-auto">
            <Carousel
                className="mx-2 w-full"
                opts={{ loop: true }}
                setApi={setApi}
            >
                <CarouselContent className="h-72 md:h-auto">
                    {heroes.map((hero, index) => (
                        <CarouselItem className="basis-3/5" key={index}>
                            <Card
                                className={cn(
                                    "relative h-full overflow-hidden transition-all duration-500 items-center",
                                    {
                                        "opacity-30": index !== current - 1,
                                    }
                                )}

                                // NOTE:: Real device: add items-center
                            >
                                {/* Image */}
                                <Image
                                    src={hero.image}
                                    alt={hero.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                    priority={index === 0}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40" />

                                {/* Text */}
                                <CardContent className="relative z-10 flex aspect-video flex-col items-center justify-center p-6 text-center text-white">
                                    <h2 className="text-lg md:text-3xl lg:text-5xl lg:max-w-xl lg:leading-tight font-bold mb-2">
                                        {hero.title}
                                    </h2>
                                    <p className="line-clamp-4 md:line-clamp-none text-sm text-neutral-200 md:text-base">
                                        {hero.subtitle}
                                    </p>
                                    <Button asChild className="rounded-full font-kh-kantumruy mt-2 md:mt-4 lg:mt-6">
                                        <Link href="/products">
                                            ស្វែងរកផលិតផលរបស់យើង
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
            </Carousel>
        </div>
    )
}

export default HeroCarousel