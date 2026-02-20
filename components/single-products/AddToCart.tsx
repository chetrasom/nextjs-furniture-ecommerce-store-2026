import { Button } from "../ui/button";

interface AddToCartProps {
    productId: string;
}

const AddToCart = ({ productId }: AddToCartProps) => {
    return (
        <Button className="capitalize mt-8" size={"lg"}>
            add to cart
        </Button>
    )
}

export default AddToCart