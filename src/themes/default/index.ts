import { extendTheme, withDefaultColorScheme, withDefaultProps } from '@chakra-ui/react';
import { global } from './components/global';
import { colors } from './components/colors';
import { buttonStyles } from './components/button';
import { inputStyles } from './components/input';

export default extendTheme(global, colors, buttonStyles, inputStyles, withDefaultColorScheme({ colorScheme: 'brand' }));
