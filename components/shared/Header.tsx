import React from 'react';
import {cn} from '@/lib/utils'
import {Container} from "@/components/shared/Container";
import Image from "next/image";
import {Button} from "@/components/ui";
import {ShoppingCart, User} from "lucide-react";

interface Props {
    className?: string
}

export const Header = ({className}: Props) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                <div className='flex items-center gap-4'>
                    <Image src='/logo.png' alt='Logo' width={35} height={35}/>
                    <div>
                        <h1 className='text-2xl uppercase font-black'>Pizza</h1>
                        <p className="text-sm text-gray-400 leading-3">Fast and tasty</p>
                    </div>
                </div>

                <div className='flex items-center gap-3'>

                    <Button variant='outline' className='flex items-center gap-1'>
                        <User size={16}/>
                        Login
                    </Button>

                    <div>
                        <Button className='group relative'>
                            <b>120 SEK</b>
                            <span className='h-full w-[1px] bg-white/30 mx-3'/>
                            <div className='flex items-center gap-1'>
                                <ShoppingCart className='h-4 w-4 relative' strokeWidth={2}/>
                                <b>3</b>
                            </div>
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};