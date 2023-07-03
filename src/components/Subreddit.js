import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import dataFetcher from '../util/dataFetcher';
import Display from './Display';

export default function Home() {
    const params = useParams();
    const searchTerm = useSelector(state => state.search);
    const [state, setState] = useState([]);
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        const async = async() => {
            setEmpty(false);
            setState([]);
            const data = await dataFetcher(`https://www.reddit.com/r/${params.subreddit}.json`);

            if (data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).length === 0) {
                setEmpty(true);
            }

            setState(data);
        };

        async();
    }, [params.subreddit]);

    useEffect(() => {
        if (state.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).length > 0) {
            setEmpty(true);
        }
    }, [searchTerm, state]);
    
    return (
        <>
            <h1 className='title'>r/{params.subreddit}</h1>
            <Display data={searchTerm.length === 0 ? state : state.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))} empty={empty}/>
        </>
    );
}