"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import SubmitButton from "./Buttons";

import type { actionFunction } from "@/types";

type ImageInputContainerProps = {
    image: string;
    name: string;
    action: actionFunction;
    text: string;
    children?: React.ReactNode;
};

const ImageInputContainer = (props: ImageInputContainerProps) => {
    const { image, name, action, text } = props;
    const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

    return (
        <div className="mb-8">
            {/* Image Preview */}
            <Image
                src={image}
                width={200}
                height={200}
                className='rounded-md object-cover mb-4 w-50 h-50'
                alt={name}
                priority
            />

            {/* Toggle button */}
            <Button
                aria-label="toggle_button"
                variant='outline'
                size='sm'
                onClick={() => setUpdateFormVisible((prev) => !prev)}
                className="font-kh-kantumruy"
            >
                {text}
            </Button>

            {/* Update form */}
            {isUpdateFormVisible && (
                <div className="max-w-md mt-4">
                    <FormContainer action={action}>
                        {props.children}

                        <ImageInput />
                        <SubmitButton size="sm" />
                    </FormContainer>
                </div>
            )}
        </div>
    )
}

export default ImageInputContainer;