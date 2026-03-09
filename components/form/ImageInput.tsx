import { Label } from "../ui/label";
import { Input } from "../ui/input";

const ImageInput = () => {
    const name = 'image';

    return (
        <div className="mb-2 space-y-3 font-kh-kantumruy">
            <Label htmlFor={name} className='capitalize'>
                រូបភាពផលិតផល
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