import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { ShoppingCartIcon } from 'lucide-react';

// Types
export enum Mode {
    SingleProduct = 'singleProduct',
    CartItem = 'cartItem',
}

type SelectProductAmountProps = {
    mode: Mode.SingleProduct;
    amount: number;
    setAmount: (value: number) => void;
}

type SelectCartItemAmountProps = {
    mode: Mode.CartItem;
    amount: number;
    setAmount: (value: number) => Promise<void>;
    isLoading: boolean;
}

const SelectProductAmount = (props: SelectProductAmountProps | SelectCartItemAmountProps) => {
    const { mode, amount, setAmount } = props;

    const cartItem = mode === Mode.CartItem;

    return (
        <div>
            <div className='flex items-center gap-1.5 mb-2'>
                <ShoppingCartIcon className='w-5 h-5' />
                <h4>ចំនួន:</h4>
            </div>
            <Select
                defaultValue={amount.toString()}
                onValueChange={(value) => setAmount(Number(value))}
                disabled={cartItem ? props.isLoading : false}
            >
                <SelectTrigger className={cartItem ? 'w-full sm:w-25' : 'w-full sm:w-37.5'}>
                    <SelectValue placeholder={amount} />
                </SelectTrigger>
                <SelectContent>
                    {Array.from({ length: cartItem ? amount + 10 : 10 }, (_, index) => {
                        const selectValue = (index + 1).toString();

                        return (
                            <SelectItem key={index} value={selectValue}>
                                {selectValue}
                            </SelectItem>
                        )
                    })}
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectProductAmount