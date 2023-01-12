import React, { useEffect, useState } from 'react';
import Search from '@/components/search';
import { InputGroup, Input, Button, SimpleGrid, Text, Box, Container, Icon } from '@chakra-ui/react';
import CreateConnection from './components/CreateConnection';
import { FiServer } from 'react-icons/fi';
import { connections } from '@/store/connection';

type IndexProps = {
    children?: React.ReactNode;
};

const Index: React.FC<IndexProps> = ({ children }) => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const conns = connections();
        console.log(conns);
        setClients(Object.values(conns));
    }, []);

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
                {JSON.stringify(clients)}
            </SimpleGrid>
        </Container>
    );
};

export default Index;
