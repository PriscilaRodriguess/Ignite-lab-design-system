import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export interface TextProps {
    size?: 'sn' | 'nd' | 'lg'; 
    children: ReactNode;
    asChild?: boolean;
}
    export function Text({size = 'nd', children, asChild }: TextProps) {
        const Comp = asChild ? Slot : 'span';

    return (
        <Comp 
        className={clsx (
            'text-gray-100 font-sans', 
            {
                'text-xs': size === 'sn',
                'text-sn': size === 'nd',
                'text-md': size === 'lg',
            }
            )}
            >
             {children}
            </Comp>
    )
}