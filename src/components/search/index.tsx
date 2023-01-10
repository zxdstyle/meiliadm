import React from 'react';
import { Button, Input, InputGroup } from '@chakra-ui/react';

type IndexProps = {
    children?: React.ReactNode;
};

const Index: React.FC<IndexProps> = ({ children }) => {
    return (
        <InputGroup w={584}>
            <Input
                size="lg"
                border="2px solid"
                borderRadius={12}
                borderTopRightRadius={0}
                borderBottomRightRadius={0}
                borderRight={0}
                _focusVisible={{
                    zIndex: 1,
                    borderColor: 'purple.600',
                    boxShadow: 'none',
                }}
            />
            <Button size="lg" borderRadius={12} borderBottomLeftRadius={0} borderTopLeftRadius={0}>
                Search
            </Button>
        </InputGroup>
    );
};

export default Index;
