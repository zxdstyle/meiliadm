import React from 'react';
import Search from '@/components/search';
import { InputGroup, Input, Button, SimpleGrid, Text, Box, Container, Icon } from '@chakra-ui/react';
import CreateConnection from './components/CreateConnection';
import { FiServer } from 'react-icons/fi';

type IndexProps = {
    children?: React.ReactNode;
};


const Index: React.FC<IndexProps> = ({ children }) => {
    return (
        <Container maxW="container.md" w="full" h="full" py={12}>
            <Box w="full">
                <Box display="flex" alignItems="center">
                    <Icon as={FiServer} mr={1} fontSize={18} />
                    <Text as="h1" fontSize={22}>
                        Hosts
                    </Text>
                </Box>
            </Box>

            <SimpleGrid mt={6} columns={1} justifyContent="center">
                <CreateConnection />
            </SimpleGrid>
        </Container>
    );
};

export default Index;
