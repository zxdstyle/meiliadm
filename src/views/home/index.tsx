import React, { useEffect, useState } from 'react';
import Search from '@/components/search';
import { InputGroup, Input, Button, Card, SimpleGrid, Text, Box, Container, Icon } from '@chakra-ui/react';
import CreateConnection from './components/CreateConnection';
import { FiServer } from 'react-icons/fi';
import { connections } from '@/store/connection';
import { Link } from 'react-router-dom';

type IndexProps = {
    children?: React.ReactNode;
};

const Index: React.FC<IndexProps> = ({ children }) => {
    const [clients, setClients] = useState<Connection[]>([]);

    useEffect(() => {
        const conns = connections();
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

            <SimpleGrid mt={6} columns={1} spacing={10}>
                <CreateConnection />

                {clients.map((client) => (
                    <Link to={'/index'} key={client.name}>
                        {client.name}
                    </Link>
                ))}
                {JSON.stringify(clients)}
            </SimpleGrid>
        </Container>
    );
};

export default Index;
