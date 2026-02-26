import FormContainer from "../form/FormContainer";
import { IconButton } from "../form/Buttons";
import { deleteProductAction } from "@/lib/actions";

const DeleteProduct = ({ productId }: { productId: string }) => {
    const deleteProduct = deleteProductAction.bind(null, { productId });

    return (
        <FormContainer action={deleteProduct}>
            <IconButton actionType="delete" />
        </FormContainer>
    )
}

export default DeleteProduct