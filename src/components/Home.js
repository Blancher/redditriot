import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import dataFetcher from '../util/dataFetcher';
import Display from './Display';

export default function Home() {
    const searchTerm = useSelector(state => state.search);
    const [state, setState] = useState([]);
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        const async = async() => {
            setEmpty(false);
            
            const data2d = [await dataFetcher('https://www.reddit.com/r/gangbeasts.json'), await dataFetcher('https://www.reddit.com/r/News.json'), await dataFetcher('https://www.reddit.com/r/Tennis.json'), await dataFetcher('https://www.reddit.com/r/React.json'), await dataFetcher('https://www.reddit.com/r/Marvel.json'), await dataFetcher('https://www.reddit.com/r/Architecture.json'), await dataFetcher('https://www.reddit.com/r/Communism.json'), await dataFetcher('https://www.reddit.com/r/Battlefront.json'), await dataFetcher('https://www.reddit.com/r/FallGuys.json')];
            const data1d = [];
            const randomData = [];

            data2d.forEach(item => item.forEach(subItem => data1d.push(subItem)));
            let n = data1d.length;

            for (let i = 0; i < n; i++) {
                const random = Math.floor(Math.random() * data1d.length);
                randomData.includes(data1d[random]) ? n++ : randomData.push(data1d[random]);
            }

            if (randomData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).length === 0) {
                setEmpty(true);
            }

            setState(randomData);
        };

        async();
    }, [searchTerm]);
    
    return (
        <>
            <h1 className='title'>Home</h1>
            <p id='description'>Reddit Riot is an app that displays reddit data from several subreddits. You can view the provided subreddits with the navbar, filter them with the searchbar, and view individual posts by clicking on them. Press enter on an empty searchbar to reset the filter. If the data doesn't load, Reddit may be having a blackout.</p>
            <Display data={searchTerm.length === 0 ? state : state.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))} empty={empty}/>
        </>
    );
}