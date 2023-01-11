export const buttonStyles = {
    components: {
        Button: {
            baseStyle: {
                animation: 'button-pop 0.25s ease-out',
                transitionDuration: '.2s',
                transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
                transition: '.25s all ease',
                _active: {
                    transform: 'scale(0.95)',
                    _hover: {
                        animation: 'none',
                        transform: 'scale(0.95)',
                    },
                    _focus: {
                        animation: 'none',
                        transform: 'scale(0.95)',
                    },
                },
            },
        },
    },
};
