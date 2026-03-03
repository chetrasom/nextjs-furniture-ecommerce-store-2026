'use client';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '../ui/button';
import { LuShare2 } from 'react-icons/lu';

import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    EmailIcon
} from 'react-share';

type SocialShareButtonProps = {
    productId: string;
    name: string;
};

const SocialShareButton = ({ productId, name }: SocialShareButtonProps) => {
    const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
    const shareLink = `${url}/products/${productId}`;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='outline' size='icon' className='p-2'>
                    <LuShare2 />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                side='top'
                align='end'
                sideOffset={10}
                className='flex items-center gap-x-2 justify-center w-full'
            >
                <FacebookShareButton url={shareLink} title={name}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton url={shareLink} title={name}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>

                <TelegramShareButton url={shareLink} title={name}>
                    <TelegramIcon size={32} round />
                </TelegramShareButton>

                <EmailShareButton url={shareLink} subject={name}>
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </PopoverContent>
        </Popover>
    )
}

export default SocialShareButton