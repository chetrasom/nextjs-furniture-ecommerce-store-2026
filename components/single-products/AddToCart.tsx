"use client";

// Node module
import { useState } from "react";

// Clerk
import { useAuth } from "@clerk/nextjs";

// Components
import SelectProductAmount from "./SelectProductAmount";
import FormContainer from "../form/FormContainer";

import SubmitButton from "../form/Buttons";
import { ProductSignInButton } from "../form/Buttons";

// Actions
import { addToCartAction } from "@/lib/actions";

// Types
import { Mode } from "./SelectProductAmount";

const AddToCart = ({ productId }: { productId: string }) => {
    const [amount, setAmount] = useState(1);
    const { userId } = useAuth();

    return (
        <div className="flex items-center gap-x-4">
            <SelectProductAmount 
                mode={Mode.SingleProduct}
                amount={amount}
                setAmount={setAmount}
            />

            {userId ? (
                <FormContainer action={addToCartAction}>
                    <input type='hidden' name='productId' value={productId} />
                    <input type='hidden' name='amount' value={amount} />
                    <SubmitButton 
                        text='ដាក់ក្នុងកន្រ្តក' 
                        size='default' 
                        className='mt-8' 
                    />
                </FormContainer>
            ) : (
                <ProductSignInButton />
            )}
        </div>
    )
}

export default AddToCart