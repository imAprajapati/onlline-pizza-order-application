import React from 'react'
import {Link} from 'react-router-dom';

const Navigation = () => {
    const cardstyel={
        background:'#F59E0D',
        display:'flex',
        padding:'6px 12px',
        borderRadius:'50px',
    }
    
    return (
        <>
           <nav className='container max-auto flex items-center justify-between py-4'>
                    <Link to="/">
                        <img style={{height:45}} src="/images/logo.png"/>
                    </Link>
                    <ul className='flex items-center'>
                        <li><Link to="/" className='text-black text-bold text-lg'>Home</Link></li>
                        <li className='ml-6'><Link to="/products" className='text-black text-bold text-lg'>Products</Link></li>
                        <li className='ml-6'>
                            <Link to="/cart">
                                <div style={cardstyel} className='leading-none'>
                                    <span className='text-black'>10</span>
                                    <img className='ml-2' src="/images/cart.png" alt=""/>
                                </div>
                            </Link>
                        </li>
                    </ul>
           </nav>
        </>
    )
}

export default Navigation
