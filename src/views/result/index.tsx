import React, { useState } from 'react';
import Search from '@/components/search';
import { Box, Tabs, Tab, TabList, TabPanels, TabPanel, Icon, Text } from '@chakra-ui/react';
import { FiSettings, FiSearch } from 'react-icons/fi';
import { IoApps } from 'react-icons/io5';

type IndexProps = {
    children?: React.ReactNode;
};

const Index: React.FC<IndexProps> = ({ children }) => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabsChange = (index: number) => {
        setTabIndex(index);
    };

    return (
        <Box w="full" h="full">
            <Box display="flex" justifyContent="space-between" p={2} mt={10} mx={10}>
                <Search />
                <Box display="flex" gap={2} color="gray.600">
                    <Icon fontSize={22} as={FiSettings} />
                    <Icon fontSize={22} as={IoApps} />
                </Box>
            </Box>

            <Box>
                <Tabs size="sm" index={tabIndex} onChange={handleTabsChange}>
                    <TabList borderBottom="1px solid" px={10}>
                        <Tab>
                            <Icon as={FiSearch} />
                            <Text ml={1}>全部</Text>
                        </Tab>
                        <Tab>
                            <Icon as={FiSearch} />
                            <Text ml={1}>全部</Text>
                        </Tab>
                    </TabList>
                </Tabs>

                <Box p={10}>
                    <Text as="h3" fontSize="xl" color="primary">
                        Redis是什么
                    </Text>
                    <Box>
                        Redis 全称 Remote Dictionary Server(即远程字典服务),它是一个基于内存实现的键值型非关系(NoSQL)数据库,由意大利人 Salvatore Sanfilippo 使用
                        C 语言编写。 Redis 遵守 B...
                    </Box>
                    <Box>
                        <Text>https://redis.io</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Index;
