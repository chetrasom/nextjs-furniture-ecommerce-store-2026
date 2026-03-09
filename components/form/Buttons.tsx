"use client";

// Node modules
import { useFormStatus } from 'react-dom';

// Custom modules
import { cn } from '@/lib/utils';

// Clerk
import { SignInButton } from '@clerk/nextjs';

// Components
import { Button } from '../ui/button';

// Assets
import { Loader2 } from 'lucide-react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { LuTrash2, LuSquarePen } from 'react-icons/lu';

// Types
type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
    className?: string;
    text?: string;
    size?: btnSize;
};

const SubmitButton = ({
    className = '',
    text = 'submit',
    size = 'lg',
}: SubmitButtonProps) => {
    const { pending } = useFormStatus();

    return (
        <Button
            type='submit'
            disabled={pending}
            className={cn('capitalize font-kh-kantumruy', className)}
            size={size}
        >
            {pending ? (
                <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    សូមរង់ចាំ...
                </>
            ) : (
                text
            )}
        </Button>
    )
};

export default SubmitButton;

// # Icon Button - Edit | Delete
type actionType = 'edit' | 'delete';

export const IconButton = ({ actionType }: { actionType: actionType }) => {
    const { pending } = useFormStatus();

    const renderIcon = () => {
        switch (actionType) {
            case 'edit':
                return <LuSquarePen />;
            case 'delete':
                return <LuTrash2 />;
            default:
                const never: never = actionType;
                throw new Error(`Invalid action type: ${never}`);
        }
    };

    return (
        <Button
            type='submit'
            size='icon'
            variant='link'
            disabled={pending}
            className='p-2 cursor-pointer'
        >
            {pending ? <Loader2 className=' animate-spin' /> : renderIcon()}
        </Button>
    )
};

// # Favorite
export const CardSignInButton = () => {
    return (
        <SignInButton mode='modal'>
            <Button
                type='button'
                size='icon'
                variant='outline'
                className='p-2 cursor-pointer'
                asChild
            >
                <FaRegHeart />
            </Button>
        </SignInButton>
    )
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
    const { pending } = useFormStatus();
    
    return (
        <Button
            type='submit'
            size='icon'
            variant='outline'
            className='p-2 cursor-pointer rounded-full bg-secondary dark:bg-secondary'
        >
            {pending ? (
                <Loader2 className=' animate-spin' />
            ) : isFavorite ? (
                <FaHeart className='fill-destructive' />
            ) : (
                <FaRegHeart />
            )}
        </Button>
    )
};

// # Cart
export const ProductSignInButton = () => {
    return (
        <SignInButton mode='modal'>
            <Button type='button' size='default' className='mt-8 font-kh-kantumruy'>
                សូមបញ្ចូលគណនី
            </Button>
        </SignInButton>
    );
};