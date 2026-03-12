import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
    title: 'Unicore TyreProtect | The Future of Puncture Prevention',
    description: 'Experience the next generation of tyre sealant technology.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} font-sans bg-black text-white antialiased cursor-none`} suppressHydrationWarning>
                <CustomCursor />
                <Navbar />
                {children}
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    );
}
