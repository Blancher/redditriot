import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './components/Root';
import Error from './components/Error';
import Home from './components/Home';
import Subreddit from './components/Subreddit';
import Post from './components/Post';

const router = createBrowserRouter([
  {path: '/', element: <Root/>, errorElement: <Error/>, children: [
    {index: true, element: <Home/>},
    {path: '/:subreddit', element: <Subreddit/>},
    {path: '/:subreddit/:postId', element: <Post/>}
  ]}
]);

export default function App() {
  return <RouterProvider router={router}/>;
}