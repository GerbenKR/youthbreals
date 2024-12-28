module.exports = {
    content: [
        './templates/**/*.twig',
        "./src/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                // 'primary': "#ED3636",
                'primary': "var(--primary-color)",
            },
            fontFamily: {
                'sans': "'PT sans'",
            },
            fontSize: {
                // Desktop
                'xs': ['11px', {
                }],
                'sm': ['13px', {
                }],
                'p': ['16px', {
                }],
                'h6': ['19px', {
                    fontWeight: '700',
                }],
                'h5': ['19px', {
                    fontWeight: '700',
                }],
                'h4': ['20px', {
                    fontWeight: '700',
                }],
                'h3': ['22px', {
                    fontWeight: '700',
                }],
                'h2': ['24px', {
                    fontWeight: '700',
                }],
                'h1': ['36px', {
                    fontWeight: '700',
                    lineHeight: "110%"
                }],

                // Mobile
                'mobile-xs': ['12px', {
                }],
                'mobile-sm': ['13px', {
                }],
                'mobile-p': ['16px', {
                }],
                'mobile-h6': ['16px', {
                    fontWeight: '700',
                }],
                'mobile-h5': ['18px', {
                    fontWeight: '700',
                }],
                'mobile-h4': ['20px', {
                    fontWeight: '700',
                }],
                'mobile-h3': ['22px', {
                    fontWeight: '700',
                }],
                'mobile-h2': ['24px', {
                    fontWeight: '700',
                }],
                'mobile-h1': ['36px', {
                    fontWeight: '700',
                    lineHeight: '95%',
                }],
            }
        }
    },
    plugins: [
    ]
}
