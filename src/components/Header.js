import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {searchActions} from '../store/searchSlice';

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleRedirect = () => navigate('/');
    const handleChange = e => setSearchTerm(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searchActions.setSearchTerm(searchTerm));
    };
    
    return (
        <header>
            <div className='flex'>
                <h1 id='header' onClick={handleRedirect}><i>RedditRiot</i></h1>
                <form onSubmit={handleSubmit}>
                    <input value={searchTerm} id='search' type='text' placeholder='🔎 Search...' onChange={handleChange}/>
                </form>
            </div>
            <hr/>
            <div className='flex' id='subreddits'>
                <NavLink to='/GangBeasts' className={({isActive}) => isActive ? 'link active' : 'link'}>Gang Beasts</NavLink>
                <NavLink to='/News' className={({isActive}) => isActive ? 'link active' : 'link'}>News</NavLink>
                <NavLink to='/Tennis' className={({isActive}) => isActive ? 'link active' : 'link'}>Tennis</NavLink>
                <NavLink to='/React' className={({isActive}) => isActive ? 'link active' : 'link'}>React</NavLink>
                <NavLink to='/Marvel' className={({isActive}) => isActive ? 'link active' : 'link'}>Marvel</NavLink>
                <NavLink to='/Architecture' className={({isActive}) => isActive ? 'link active' : 'link'}>Architecture</NavLink>
                <NavLink to='/Communism' className={({isActive}) => isActive ? 'link active' : 'link'}>Communism</NavLink>
                <NavLink to='/Battlefront' className={({isActive}) => isActive ? 'link active' : 'link'}>Battlefront</NavLink>
                <NavLink to='/FallGuys' className={({isActive}) => isActive ? 'link active' : 'link'}>Fall Guys</NavLink>
            </div>
        </header>
    );
}