import * as React from 'react';

export interface AuthButtonsProps {
}

export default function AuthButtons(props: AuthButtonsProps) {
    return (
        <div className='flex justify-center md:justify-end items-center text-center'>
            <button className='uppercase btn mr-4'>Login</button>
            <button className='uppercase btn'>Register</button>
        </div>
    );
}
