"use client";

import { usePathname } from "next/navigation";
import FormContainer from "../form/FormContainer";
import { CardSubmitButton } from "../form/Buttons";
import { toggleFavoriteAction } from "@/lib/actions";

type FavoriteToggleFormProps = {
    productId: string;
    favoriteId: string | null;
};

const FavoriteToggleForm = ({ favoriteId, productId }: FavoriteToggleFormProps) => {
    const pathname = usePathname();

    // pathname = “refresh THIS page after action”
    const toggleAction = toggleFavoriteAction.bind(null, {
        productId,
        favoriteId,
        pathname,
    });

    return (
        <FormContainer action={toggleAction}>
            <CardSubmitButton isFavorite={favoriteId ? true : false} />
        </FormContainer>
    )
}

export default FavoriteToggleForm;