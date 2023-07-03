import {useSelector} from 'react-redux';
import PostCard from './Card';

export default function Display(props) {
    const searchTerm = useSelector(state => state.search);

    return (
        <div className='flex'>
            {(props.empty && props.data.length === 0) && <p id='description'>No posts found under the search term <i>{searchTerm.toLowerCase()}</i>.</p>}
            {(props.data.length === 0 && !props.empty) && <embed src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'></embed>}
            {props.data.length > 0 && props.data.map(item => <PostCard {...item}/>)}
        </div>
    );
}