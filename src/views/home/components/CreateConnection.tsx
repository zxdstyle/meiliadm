import React from 'react';
import { Button, Icon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';

type CreateConnectionProps = {
    children?: React.ReactNode;
};

const CreateConnection: React.FC<CreateConnectionProps> = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} w="lg" h={24} variant="outline" border="2px solid" leftIcon={<Icon as={FiPlusCircle} fontSize={28} />}>
                Connect to host
            </Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>22222</ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateConnection;
