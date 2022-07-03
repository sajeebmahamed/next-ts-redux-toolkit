import Link from 'next/link'
import React from 'react'
import { useAppDispatch } from '../redux/hooks'
import { decrementCount } from '../redux/slices/homeSlice'

const Blog = () => {
  const dispatch = useAppDispatch()
  return (

    <div>
      <h2>Blog</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
      <button onClick={() => dispatch(decrementCount())}>-</button>

    </div>
  )
}

export default Blog