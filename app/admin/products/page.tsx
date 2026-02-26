import Link from "next/link";
import { fetchAdminProducts } from "@/lib/actions";
import { formatCurrency } from "@/utils/format";

import EmptyList from "@/components/global/EmptyList";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

import DeleteProduct from "@/components/admin/DeleteProduct";
import { IconButton } from "@/components/form/Buttons";

import { ArchiveIcon, PencilIcon, Trash2Icon } from 'lucide-react'

const AdminProductsPage = async () => {
    const items = await fetchAdminProducts();

    if (items.length === 0) return <EmptyList />;

    return (
        <div className='w-full'>
            <div className='[&>div]:rounded-sm [&>div]:border'>
                <Table>
                    <TableCaption className='capitalize'>
                        total products : {items.length}
                    </TableCaption>
                    <TableHeader>
                        <TableRow className='hover:bg-transparent'>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className='w-0'>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="font-kh-suwannaphum">
                        {items.map((item) => {
                            const { id: productId, name, company, price } = item;

                            return (
                                <TableRow key={productId}>
                                    <TableCell>
                                        <Link
                                            href={`/products/${productId}`}
                                            className='underline text-muted-foreground tracking-wide capitalize hover:text-primary'
                                        >
                                            {name}
                                        </Link>
                                    </TableCell>

                                    <TableCell>{company}</TableCell>

                                    <TableCell>{formatCurrency(price)}</TableCell>

                                    <TableCell className='flex items-center gap-1'>
                                        <Link href={`/admin/products/${productId}/edit`}>
                                            <IconButton actionType='edit'></IconButton>
                                        </Link>

                                        <DeleteProduct productId={productId} />

                                    </TableCell>
                                </TableRow>
                            )
                        })} 
                    </TableBody>
                </Table>
            </div>
            {/* <p className='text-muted-foreground mt-4 text-center text-sm'>Product Table</p> */}
        </div>
    )
}

export default AdminProductsPage