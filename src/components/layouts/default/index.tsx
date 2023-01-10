import React from 'react';
import { Box } from '@chakra-ui/react';
import styles from './style/layout.module.css';
import { Outlet } from 'react-router-dom';
import TitleBar from './components/TitleBar';

type IndexProps = {
    children?: React.ReactNode;
};

const Index: React.FC<IndexProps> = ({ children }) => {
    return (
        <Box pos="relative" h="full" w="full">
            <TitleBar />

            <Box className={styles.layout}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Index;
