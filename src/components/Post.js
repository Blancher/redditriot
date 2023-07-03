import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import postFetcher from '../util/postFetcher';
import Card from './Card';

export default function Post() {
    const link = useSelector(state => state.post);
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const async = async() => {
            const data = await postFetcher(`https://www.reddit.com${(localStorage.getItem('post') || link).slice(0, -1)}.json`);

            setPost(data[0]);
            setComments(data[1]);
        };

        async();
    }, []);

    return (
        <>
            {(post.length === 0 && comments.length === 0) && <embed src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'></embed>}
            {post.length > 0 && <Card className='id' {...post[0]}/>}
            <h1 className='title' style={{textAlign: 'center'}}>Comments</h1>
            <div className='flex'>
                {comments.map(comment => <Card className='comment' {...comment}/>)}
            </div>
        </>
    );
}