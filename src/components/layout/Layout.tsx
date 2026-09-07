import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TextureLayer from '../ui/TextureLayer';
import ScrollProgress from '../ui/ScrollProgress';
import CustomCursor from '../ui/CustomCursor';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen relative">
            <TextureLayer />
            <ScrollProgress />
            <CustomCursor />
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
        </div>
    );
}
