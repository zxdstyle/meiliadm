import { createBrowserRouter } from 'react-router-dom';
import Root from '@/components/layouts/default';
import Home from '@/views/home';
import Index from '@/views/index';

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
                path: '/index',
                element: <Index />,
            },
        ],
    },
]);

export default router;
