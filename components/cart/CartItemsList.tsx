// Components
import { Card } from "../ui/card";
import { FirstColumn, SecondColumn, FourthColumn } from "./CartItemColumns";
import ThirdColumn from "./ThirdColumn";

// Types
import { CartItemWithProduct } from "@/types";

type CartItemsListProps = {
    cartItems: CartItemWithProduct[];
};

const CartItemsList = ({ cartItems }: CartItemsListProps) => {
    return (
        <div className="font-kh-suwannaphum">
            {cartItems.map((cartItem) => {
                const { id, amount } = cartItem;
                const { id: productId, image, name, company, price } = cartItem.product;

                return (
                    <Card 
                        key={id}
                        className="flex flex-col flex-wrap gap-4 p-6 mb-8 md:flex-row"
                    >
                        <FirstColumn 
                            image={image} 
                            name={name} 
                        />

                        <SecondColumn 
                            name={name}
                            company={company}
                            productId={productId}
                        />

                        <ThirdColumn 
                            id={id} 
                            quantity={amount} 
                        />

                        <FourthColumn price={price} />
                    </Card>
                )
            })}
        </div>
    )
}

export default CartItemsList;