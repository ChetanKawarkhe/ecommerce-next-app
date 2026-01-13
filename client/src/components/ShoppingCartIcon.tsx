'use client'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ShoppingCartIcon = () => {
  return (

    <Link href='/cart' className='relative'>
            <ShoppingCart className='w-4 h-4 text-gray-600'/>
            <span className='absolute -top-3 -right-3 text-gray-600 rounded-full w-4 h-4 bg-amber-500 flex items-center justify-center text-xs font-medium'>0</span>
            </Link>
  )
}

export default ShoppingCartIcon