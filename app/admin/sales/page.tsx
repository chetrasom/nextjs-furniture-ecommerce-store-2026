import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// Actions
import { fetchAdminOrders } from '@/lib/actions';

// Format
import { formatCurrency, formatDate } from '@/utils/format';

const SalePage = async () => {
    const orders = await fetchAdminOrders();

    return (
        <div>
            <Table>
                <TableCaption>ការបញ្ជាទិញសរុប: {orders.length}</TableCaption>
                <TableHeader>
                    <TableRow>
                        {/* <TableHead>Email</TableHead>
                        <TableHead>Products</TableHead>
                        <TableHead>Order Total</TableHead>
                        <TableHead>Tax</TableHead>
                        <TableHead>Shipping</TableHead>
                        <TableHead>Date</TableHead> */}
                        
                        <TableHead>អ៊ីមែល</TableHead>
                        <TableHead>មុខទំនិញ</TableHead>
                        <TableHead>ចំនួនទឹកប្រាក់សរុប</TableHead>
                        <TableHead>ពន្ធ</TableHead>
                        <TableHead>ការដឹកជញ្ជូន</TableHead>
                        <TableHead>កាលបរិច្ឆេទ</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order) => {
                        const {
                            id,
                            products,
                            orderTotal,
                            tax,
                            shipping,
                            createdAt,
                            email,
                        } = order;

                        return (
                            <TableRow key={order.id}>
                                <TableCell>{email}</TableCell>
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
    )
}

export default SalePage;