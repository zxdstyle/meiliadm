import React, { useEffect, useState } from 'react';
import { Button, SimpleGrid, Text, Box, Container, Icon } from '@chakra-ui/react';
import CreateConnection from './components/CreateConnection';
import { FiServer } from 'react-icons/fi';
import { connections, getConnection } from '@/store/connection';
import { useNavigate } from 'react-router-dom';
import { error } from '@/hooks/dialog';

type IndexProps = {
    children?: React.ReactNode;
};

const Index: React.FC<IndexProps> = ({ children }) => {
    const [clients, setClients] = useState<Connection[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const conns = connections();
        setClients(Object.values(conns));
    }, []);

    const onclick = async (name: string) => {
        try {
            const client = getConnection(name);
            if (!client) {
                await error('', 'failed');
                return;
            }

            return navigate('/index');
        } catch (err) {
            await error('', (err as Error).message);
            return;
        }
    };

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
                    <Button onClick={() => onclick(client.name)} key={client.name}>
                        {client.name}
                    </Button>
                ))}
                {JSON.stringify(clients)}
            </SimpleGrid>
        </Container>
    );
};

export default Index;
