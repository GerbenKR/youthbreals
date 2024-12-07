module.exports = {
    content: [
        './templates/**/*.twig',
        "./src/**/*.js",
    ],
    theme: {
        // screens: {
        //     'sm': '640px',
        //     'md': '768px',
        //     'lg': '1024px',
        //     'xl': '1320px',
        // },
        // container: {
        //     center: true,
        //     padding: {
        //         DEFAULT: '16px'
        //     },
        //     // screens: {
        //     //     'xl': '1345px',
        //     // }
        // },
        extend: {
            fontSize: {
                // Desktop
                'xs': ['11px', {
                    lineHeight: '150%',
                    letterSpacing: '-0.24px',
                }],
                'sm': ['13px', {
                    lineHeight: '150%',
                    letterSpacing: '-0.14px',
                }],
                'p': ['16px', {
                    lineHeight: '175%',
                    letterSpacing: '0',
                }],
                'h6': ['19px', {
                    lineHeight: '120%',
                    letterSpacing: '0',
                    fontWeight: '500',
                }],
                'h5': ['23px', {
                    lineHeight: '120%',
                    letterSpacing: '-0.4px',
                    fontWeight: '500',
                }],
                'h4': ['23px', {
                    lineHeight: '100%',
                    letterSpacing: '-0.48px',
                    fontWeight: '500',
                }],
                'h3': ['27px', {
                    lineHeight: '100%',
                    letterSpacing: '-0.96px',
                    fontWeight: '500',
                }],
                'h2': ['28px', {
                    fontWeight: '600',
                }],
                'h1': ['47px', {
                    lineHeight: '90%',
                    fontWeight: '800'
                }],

                // Mobile
                'mobile-xs': ['12px', {
                    lineHeight: '150%',
                    letterSpacing: '-0.12px',
                }],
                'mobile-sm': ['13px', {
                    lineHeight: '150%',
                    letterSpacing: '0',
                }],
                'mobile-p': ['16px', {
                    lineHeight: '175%',
                    letterSpacing: '0',
                }],
                'mobile-h6': ['16px', {
                    lineHeight: '120%',
                    letterSpacing: '0',
                    fontWeight: '900',
                }],
                'mobile-h5': ['18px', {
                    lineHeight: '120%',
                    letterSpacing: '-0.36px',
                    fontWeight: '900',
                }],
                'mobile-h4': ['22px', {
                    lineHeight: '100%',
                    letterSpacing: '-0.44px',
                    fontWeight: '900',
                }],
                'mobile-h3': ['28px', {
                    lineHeight: '100%',
                    letterSpacing: '-1.12px',
                    fontWeight: '900',
                }],
                'mobile-h2': ['32px', {
                    lineHeight: '90%',
                    letterSpacing: '-0.96px',
                    fontWeight: '900',
                }],
                'mobile-h1': ['40px', {
                    lineHeight: '90%',
                    letterSpacing: '-1.6px',
                    fontWeight: '900',
                }],
            }
        }
    },
    plugins: [
    ]
}
