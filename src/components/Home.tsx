import Link from 'next/link'
import React, { memo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { incrementBlogCount, selectBlogCount } from '../redux/slices/blogSlice'
import { fetchAsync, getPostById, homeReducer, incrementCount } from '../redux/slices/homeSlice'

const Home = () => {
    const home = useAppSelector(homeReducer)
    const blogCount = useAppSelector(selectBlogCount)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAsync())
    }, [])


    return (
        <div>
            <h2>
                {
                    home.count
                }
                blog: {blogCount}
            </h2>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <button onClick={() => dispatch(incrementCount())}>+</button>
            <button onClick={() => dispatch(incrementBlogCount())}>Blog +</button>
            <button onClick={() => dispatch(getPostById(1))}>Fetch Post By Id </button>

        </div>
    )
}

export default memo(Home)