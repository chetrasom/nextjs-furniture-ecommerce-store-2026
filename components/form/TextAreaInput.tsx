import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type TextAreaInputProps = {
    name: string;
    labelText?: string;
    defaultValue?: string;
};

const TextAreaInput = ({ name, labelText, defaultValue }: TextAreaInputProps) => {
    return (
        <div className="mb-2 space-y-3">
            <Label htmlFor={name} className='capitalize text-base'>
                {labelText || name}
            </Label>
            
            <Textarea
                id={name}
                name={name}
                defaultValue={defaultValue}
                rows={20}
                required
                className='leading-loose'
            />
        </div>
    )
}

export default TextAreaInput;