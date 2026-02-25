import { Label } from "../ui/label";
import { Input } from "../ui/input";

const ImageInput = () => {
    const name = 'image';

    return (
        <div className="mb-2 space-y-3">
            <Label htmlFor={name} className='capitalize'>
                Image
            </Label>

            <Input 
                id={name} 
                name={name} 
                type='file' 
                required 
                accept='image/*'
            />
        </div>
    )
}

export default ImageInput