import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';

type CreateConnectionProps = {
    children?: React.ReactNode;
};

const CreateConnection: React.FC<CreateConnectionProps> = ({ children }) => {
    return (
        <Button h={24} variant="outline" leftIcon={<Icon as={FiPlusCircle} fontSize={28} />}>
            Connect to host
        </Button>
    );
};

export default CreateConnection;
