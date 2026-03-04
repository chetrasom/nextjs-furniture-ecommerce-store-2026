"use client";

import { Label } from '@/components/ui/label';
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from '@/components/ui/select';

import { useState } from "react";
import { Star } from "lucide-react";

type RatingInputProps = {
    name: string;
    labelText?: string;
};

const RatingInput = ({ name, labelText }: RatingInputProps) => {
    const [rating, setRating] = useState<number>(0);
    const [hover, setHover] = useState<number>(0);

    // # Version 01
    // const numbers = Array.from({ length: 5 }, (_, i) => {
    //     const value = i + 1;
    //     return value.toString();
    // }).reverse();

    return (
        <>
            <div className="flex gap-2">
                <Label htmlFor={name} className='capitalize text-base'>
                    {labelText || name} :
                </Label>

                {Array.from({ length: 5 }, (_, i) => {
                    const value = i + 1;

                    return (
                        <button
                            type="button"
                            key={value}
                            onClick={() => setRating(value)}
                            onMouseEnter={() => setHover(value)}
                            onMouseLeave={() => setHover(0)}
                            className="transition-transform hover:scale-110"
                        >
                            <Star
                                className={`w-5 h-5 transition-colors ${
                                    value <= (hover || rating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                            />
                        </button>
                    );
                })}
            </div>

            {/* Hidden input for form submission */}
            <input type="hidden" name={name} value={rating || 1} />
        </>

        // # Version 01
        // <div className='space-y-3'>
        //     <Label htmlFor={name} className='capitalize'>
        //         {labelText || name}
        //     </Label>
        //     <Select defaultValue={numbers[0]} name={name} required>
        //         <SelectTrigger>
        //             <SelectValue />
        //         </SelectTrigger>
        //         <SelectContent>
        //             {numbers.map((number) => {
        //                 return (
        //                     <SelectItem key={number} value={number}>
        //                         {number}
        //                     </SelectItem>
        //                 );
        //             })}
        //         </SelectContent>
        //     </Select>
        // </div>
    )
}

export default RatingInput