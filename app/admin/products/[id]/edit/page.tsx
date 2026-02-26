// Form components
import FormContainer from '@/components/form/FormContainer';
import SubmitButton from '@/components/form/Buttons';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import ImageInput from '@/components/form/ImageInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CheckBoxInput from '@/components/form/CheckBoxInput';

// Assets
import { PenSquare } from "lucide-react";

// Actions
import { 
    FetchAdminProductDetails,
    UpdateProductAction
} from '@/lib/actions';

// Types
type EditProductPageProps = {
    params: Promise<{ id: string }>
}

const EditProductPage = async ({ params }: EditProductPageProps) => {
    const { id } = await params;
    const product = await FetchAdminProductDetails(id);
    const { name, company, description, featured, price } = product;

    return (
        <section>
            <div className="flex items-center gap-2 border-b pb-2.5 mb-4">
                <PenSquare className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                <h1 className="font-kh-kantumruy text-primary font-semibold text-xl md:text-2xl">
                    កែប្រែផលិតផល
                </h1>
            </div>

            <FormContainer action={UpdateProductAction}>
                <div className='space-y-2 lg:space-y-4'>
                    <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4'>
                        <FormInput 
                            type='text'
                            name='name'
                            label='Product Name'
                            defaultValue={name}
                        />

                        <FormInput 
                            type='text'
                            name='company'
                            label='Company'
                            defaultValue={company}
                        />

                        <PriceInput defaultValue={price} />

                        <ImageInput />
                    </div>

                    <TextAreaInput
                        name='description'
                        labelText='product description'
                        defaultValue={description}
                    />

                    <div className='mt-6'>
                        <CheckBoxInput 
                            name='featured' 
                            label='featured'
                            defaultChecked={featured}
                        />
                    </div>
                </div>

                <SubmitButton text='Update Product' className='mt-8' />
            </FormContainer>
        </section>
    )
}

export default EditProductPage;