import { createBrowserRouter } from 'react-router-dom';
import Root from '@/components/layouts/default';
import Home from '@/views/home';
import Result from '@/views/result';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/search',
                element: <Result />,
            },
        ],
    },
]);

export default router;
