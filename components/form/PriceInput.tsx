import { Label } from "../ui/label";
import { Input } from "../ui/input";

const name = 'price';

type FormInputNumberProps = {
    defaultValue?: number;
};

const PriceInput = ({ defaultValue }: FormInputNumberProps) => {
    return (
        <div className="mb-2 space-y-3 font-kh-kantumruy">
            <Label htmlFor='price' className='capitalize'>
                តម្លៃ ($)
            </Label>

            <Input 
                id={name}
                type='number'
                name={name}
                min={0}
                defaultValue={defaultValue || 100}
                required
            />
        </div>
    )
}

export default PriceInput;