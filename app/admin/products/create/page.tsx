import { faker } from '@faker-js/faker';

// Component
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Form components
import FormContainer from '@/components/form/FormContainer';
import SubmitButton from '@/components/form/Buttons';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import ImageInput from '@/components/form/ImageInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CheckBoxInput from '@/components/form/CheckBoxInput';

// Assets
import { PackagePlus } from "lucide-react";

// Actions
import { createProductAction } from '@/lib/actions';

const CreateProductPage = () => {
    const name = faker.commerce.productName();
    const company = faker.company.name();
    const description = faker.lorem.paragraph({ min: 10, max: 12 });

    return (
        <section>
            <div className="flex items-center gap-2 border-b pb-2.5 mb-4">
                <PackagePlus className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                <h1 className="font-kh-kantumruy font-semibold text-xl md:text-2xl">
                    បង្កើតផលិតផលថ្មី
                </h1>
            </div>

            <FormContainer action={createProductAction}>
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

                        <PriceInput />

                        <ImageInput />
                    </div>

                    <TextAreaInput
                        name='description'
                        labelText='product description'
                        defaultValue={description}
                    />

                    <div className='mt-6'>
                        <CheckBoxInput name='featured' label='featured' />
                    </div>
                </div>

                <SubmitButton text='Create Product' className='mt-8' />
            </FormContainer>
        </section>
    )
}

export default CreateProductPage