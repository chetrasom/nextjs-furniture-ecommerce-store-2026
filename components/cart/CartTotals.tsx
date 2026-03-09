
// Components
import { Card, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import FormContainer from "../form/FormContainer";
import SubmitButton from "../form/Buttons";

// Action
import { createOrderAction } from "@/lib/actions";

// Format
import { formatCurrency } from "@/utils/format";

// Types from prisma
import { Cart } from "@/app/generated/prisma/client";

const CartTotals = ({ cart }: { cart: Cart }) => {
    const { cartTotal, shipping, tax, orderTotal } = cart;

    return (
        <div>
            <Card className="p-8">
                <CartTotalRow label="តម្លៃទំនិញសរុប" amount={cartTotal} />
                <CartTotalRow label='តម្លៃដឹកជញ្ជូន' amount={shipping} />
                <CartTotalRow label='ពន្ធ' amount={tax} />
                <CardTitle className='mt-5'>
                    <CartTotalRow label='ចំនួនទឹកប្រាក់សរុប' amount={orderTotal} lastRow />
                </CardTitle>
            </Card>

            <FormContainer action={createOrderAction}>
                <SubmitButton text='ធ្វើការបញ្ជាទិញ' className='w-full h-11 mt-8' />
            </FormContainer>
        </div>
    )
};

function CartTotalRow({
    label,
    amount,
    lastRow,
}: {
    label: string;
    amount: number;
    lastRow?: boolean;
}) {
    return (
        <>
            <div className="flex items-center justify-between">
                <span>{label}</span>
                <span>{formatCurrency(amount)}</span>
            </div>
            {lastRow ? null : <Separator />}
        </>
    );
}

export default CartTotals