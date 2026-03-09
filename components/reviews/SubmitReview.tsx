'use client';

// Node modules
import { useState } from "react";

// Clerk
import { useUser } from "@clerk/nextjs";

// Components
import FormContainer from "../form/FormContainer";
import SubmitButton from "../form/Buttons";

import RatingInput from "./RatingInput";
import TextAreaInput from "../form/TextAreaInput";

import { Card } from "../ui/card";
import { Button } from "../ui/button";

// Actions
import { createReviewAction } from "@/lib/actions";

// Assets
import { ChevronDown } from "lucide-react";

const SubmitReview = ({ productId }: { productId: string }) => {
    const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
    const { user } = useUser();

    return (
        <div>
            <Button
                size={"lg"}
                className="capitalize rounded-full font-kh-kantumruy"
                onClick={() => setIsReviewFormVisible((prev) => !prev)}
            >
               បញ្ចេញមតិលើទំនិញ <ChevronDown className="size-5" />
            </Button>

            {isReviewFormVisible && (
                <Card className="mt-5 p-4 shadow-none">
                    <FormContainer action={createReviewAction}>
                        {/* Hidden fields */}
                        <input type="hidden" name="productId" value={productId} />
                        <input type="hidden" name="authorName" value={user?.firstName || "user"} />
                        <input type="hidden" name="authorImageUrl" value={user?.imageUrl || ""} />

                        {/* Form Inputs */}
                        <div className="space-y-5">
                            <RatingInput 
                                name='rating'
                                labelText="ការវាយតម្លៃ"
                            />

                            <TextAreaInput 
                                name="comment"
                                labelText="បញ្ចេញមតិ"
                                defaultValue='Outstanding product!!!'
                            />
                        </div>

                        {/* Submit */}
                        <SubmitButton className='mt-4' text="បញ្ជូន" />
                    </FormContainer>
                </Card>
            )}
        </div>
    )
}

export default SubmitReview