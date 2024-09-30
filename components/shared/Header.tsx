import React from 'react';
import {cn} from '@/lib/utils'
import {Container} from "@/components/shared/Container";
import Image from "next/image";

interface Props {
    className?: string
}

const Header = ({className}: Props) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                <div>
                    <Image src='/logo.png' alt='Logo' width={35} height={35} />
                    <h1 className='text-2xl uppercase font-black'>Pizza</h1>
                    <p className="text-sm text-gray-400 leading-3">Fast and tasty</p>
                </div>
            </Container>
        </header>
    );
};

export default Header;