import { extendTheme, withDefaultColorScheme, withDefaultProps } from '@chakra-ui/react';
import styles from './components/styles';
import { colors } from './components/colors';
import components from './components';

export default extendTheme(
    colors,
    {
        components,
        styles,
    },
    withDefaultColorScheme({ colorScheme: 'brand' })
);
