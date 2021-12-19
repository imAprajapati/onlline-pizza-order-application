import React from 'react'
import CartItem from './CartItem'

const Carts = () => {
    return (
        <div className='container max-auto lg:w-1/2 w-full pb-24'>
            <h1 className='my-12 font-bold'>Cart items</h1>
            <ul>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </ul>
            <hr className='mt-4'/>
            <div className='text-right'>
                <b>Grand Totale: </b>₹ 1500
            </div>
            <div className='text-right mt-6'>
                <button className='bg-yellow-500 rounded-full px-4 py-2'>Order Now</button>
            </div>
        </div>
    )
}

export default Carts
