import React from 'react';
import { Box } from '@chakra-ui/react';

type TitleBarProps = {
    children?: React.ReactNode;
};

const TitleBar: React.FC<TitleBarProps> = ({ children }) => {
    return <Box w="full" h={7} zIndex={99999} data-tauri-drag-region />;
};

export default TitleBar;
