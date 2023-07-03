import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {postActions} from '../store/postSlice';

export default function Card(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        navigate(`/${props.subreddit}/${props.id}`);
        dispatch(postActions.setPost(props.permalink));
    };
    
    return (
        <div className={`postcard ${props.className ? props.className : ''} `} onClick={handleClick}>
            <p className='user'>Posted by <i>{props.author}</i></p>
            {props.className === 'comment' ? <h4 className='commentFlow'>{props.title || props.body}</h4> : <h4 className={(props.thumbnail && props.thumbnail !== 'self') ? 'overflow' : ''}>{props.title || props.body}</h4>}
            <h5 className='cardsub'><b>r/{props.subreddit} ✓ {props.ups}</b></h5>
            {props.className !== 'comment' && <h5 className='numcoms'>💬 {props.num_comments} Comment{props.num_comments === 1 ? '' : 's'}</h5>}
            {(props.thumbnail && props.thumbnail !== 'self') && <img className='media' src={props.thumbnail}/>}
        </div>
    );
}