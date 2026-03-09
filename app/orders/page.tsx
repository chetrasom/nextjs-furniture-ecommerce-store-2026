import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import BreadCrumb from '@/components/global/BreadCrumb';
import SectionTitle from '@/components/global/SectionTitle';

// Actions
import { fetchUserOrders } from '@/lib/actions';

// Format
import { formatCurrency, formatDate } from '@/utils/format';

const OrdersPage = async () => {
    const orders = await fetchUserOrders();

    return (
        <section className='lg:pt-20 2xl:pt-22'>
            <BreadCrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Orders", href: "/orders" },
                ]}
            />

            <SectionTitle
                text="ការបញ្ជាទិញរបស់អ្នក"
                subtitle="បញ្ជីការបញ្ជាទិញទាំងអស់របស់អ្នក"
            />

            <div>
                <Table>
                    <TableCaption>Total orders : {orders.length}</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Products</TableHead>
                            <TableHead>Order Total</TableHead>
                            <TableHead>Tax</TableHead>
                            <TableHead>Shipping</TableHead>
                            <TableHead>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => {
                            const { id, products, orderTotal, tax, shipping, createdAt } =
                            order;

                            return (
                                <TableRow key={order.id}>
                                    <TableCell>{products}</TableCell>
                                    <TableCell>{formatCurrency(orderTotal)}</TableCell>
                                    <TableCell>{formatCurrency(tax)}</TableCell>
                                    <TableCell>{formatCurrency(shipping)}</TableCell>
                                    <TableCell>{formatDate(createdAt)}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}

export default OrdersPage