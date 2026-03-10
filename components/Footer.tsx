import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-muted mt-0 border-t">
            <div className="containerCustom py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Furnova</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Furnova ផ្តល់ជូនគ្រឿងសង្ហារឹមដែលមានគុណភាពខ្ពស់ និងរចនាទាន់សម័យ
                        សម្រាប់ផ្ទះរបស់អ្នក។
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-4">តំណភ្ជាប់រហ័ស</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                            <Link href="/">ទំព័រដើម</Link>
                        </li>
                        <li>
                            <Link href="/products">ហាងទំនិញ</Link>
                        </li>
                        <li>
                            <Link href="/about">អំពីយើង</Link>
                        </li>
                        <li>
                            <Link href="/cart">កន្ត្រកទំនិញ</Link>
                        </li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="font-semibold mb-4">សេវាកម្មអតិថិជន</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>ការដឹកជញ្ជូន</li>
                        <li>ការបង់ប្រាក់</li>
                        <li>គោលការណ៍ត្រឡប់ទំនិញ</li>
                        <li>ទំនាក់ទំនង</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="font-semibold mb-4">តាមដានពួកយើង</h3>
                    <div className="flex gap-4 text-muted-foreground">
                        <Facebook className="w-5 h-5 cursor-pointer" />
                        <Instagram className="w-5 h-5 cursor-pointer" />
                        <Twitter className="w-5 h-5 cursor-pointer" />
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t py-6 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Furnova. រក្សាសិទ្ធិគ្រប់យ៉ាង។
            </div>
        </footer>
    );
}