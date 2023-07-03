import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Outlet} from 'react-router-dom';
import Header from './Header';

export default function Root() {
    const post = useSelector(state => state.post);
    useEffect(() => localStorage.setItem('post', post), [post]);
    
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}