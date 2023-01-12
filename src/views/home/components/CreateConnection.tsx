import React, { useRef, useState } from 'react';
import {
    Box,
    Text,
    Button,
    Icon,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Spinner,
} from '@chakra-ui/react';
import { error, success } from '@/hooks/dialog';
import { FiPlusCircle } from 'react-icons/fi';
import { Formik, Form, Field, FieldProps, FormikHelpers } from 'formik';
import { getConnection, storeConnection } from '@/store/connection';
import { MeiliSearchCommunicationError } from 'meilisearch';

type CreateConnectionProps = {
    children?: React.ReactNode;
};

const initValues = { apiKey: '', host: 'http://127.0.0.1:7700', name: '111' };
const CreateConnection: React.FC<CreateConnectionProps> = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [values, setValues] = useState<Connection>(initValues);
    const formRef = useRef(null);

    const onSubmit = (values: Connection, { setSubmitting }: FormikHelpers<Connection>) => {
        setValues(values);
        storeConnection(values);
        onClose();
        return;
    };

    const [testing, setTesting] = useState(false);
    const testConnection = async () => {
        const conn = getConnection(values.name);
        if (!conn) {
            return;
        }

        setTesting(true);
        try {
            await conn.getVersion();
            await success('', 'connect to server successfully');
            onClose();
        } catch (err) {
            const msg = (err as MeiliSearchCommunicationError).message;
            await error(msg, 'Test Connection');
        } finally {
            setTesting(false);
        }
    };

    return (
        <>
            <Button onClick={onOpen} w="lg" h={24} variant="outline" border="2px solid" leftIcon={<Icon as={FiPlusCircle} fontSize={28} />}>
                Connect to host
            </Button>

            <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom" isCentered>
                <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
                <ModalContent>
                    <ModalHeader color="black">Connect to server</ModalHeader>
                    <ModalBody>
                        <Formik initialValues={initValues} onSubmit={onSubmit}>
                            {() => (
                                <Form ref={formRef}>
                                    <Field name="name">
                                        {({ field, form }: FieldProps) => (
                                            <FormControl isInvalid={Boolean(form.errors.name && form.touched.name)}>
                                                <FormLabel color="black">Name</FormLabel>
                                                <Input {...field} placeholder="unique instance name" />
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="host">
                                        {({ field, form }: FieldProps) => (
                                            <FormControl isInvalid={Boolean(form.errors.name && form.touched.name)}>
                                                <FormLabel color="black">Host</FormLabel>
                                                <Input type="url" {...field} placeholder="http://127.0.0.1:7700" />
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="apiKey">
                                        {({ field, form }: FieldProps) => (
                                            <FormControl isInvalid={Boolean(form.errors.name && form.touched.name)}>
                                                <FormLabel color="black">Api Key</FormLabel>
                                                <Input type="password" {...field} placeholder="masterKey" />
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Box w="full" display="flex" justifyContent="end" alignItems="center" my={6} gap={2}>
                                        {testing && <Spinner color="primary" size="sm" />}
                                        <Button onClick={testConnection} variant="link">
                                            test connection
                                        </Button>
                                        <Button type="submit">Save</Button>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateConnection;
