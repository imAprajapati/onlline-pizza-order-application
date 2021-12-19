import React from 'react'

const CartItem = () => {
    return (
        <li className='mb-4'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>
                <img className='h-16' src="/images/peproni.png" alt=""/>
                <span className='font-bold ml-4 w-48'>Doble peproni</span>
            </div>
            <div>
                <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>-</button>
                <b className='px-4'>2</b>
                <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>+</button>
            </div>
            <span>₹ 500</span>
            <button className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Delete</button>
        </div>
    </li>
    )
}

export default CartItem
