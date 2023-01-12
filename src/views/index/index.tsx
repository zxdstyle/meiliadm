import React, { useEffect } from 'react';
import { getConnection } from '@/store/connection';
type IndexProps = {
    children?: React.ReactNode;
};

const Index: React.FC<IndexProps> = ({ children }) => {
    const getClient = async () => {
        const client = getConnection('111');
        const page = await client?.getIndex('pages');
        if (!page) return;

        const info = await page.fetchInfo();
        console.log(info);
    };

    useEffect(() => {
        getClient();
    });

    return <div></div>;
};

export default Index;
