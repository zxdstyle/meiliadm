import React, { useEffect } from 'react';
import { getConnection } from '@/store/connection';
type IndexProps = {
    children?: React.ReactNode;
};

const Index: React.FC<IndexProps> = ({ children }) => {
    const getClient = async () => {
        const client = getConnection('111');

        console.log(await client?.getStats());
        console.log(await client?.getIndexes());
    };

    useEffect(() => {
        getClient();
    });

    return <div></div>;
};

export default Index;
