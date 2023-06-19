import localFont from 'next/font/local';
import Script from 'next/script'
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const monaSans = localFont({
    src: [
        { path: '../public/fonts/MonaSans/Mona-Sans-UltraLight.woff2', weight: '200', style: 'normal' },
        { path: '../public/fonts/MonaSans/Mona-Sans-UltraLightItalic.woff2', weight: '200', style: 'italic' },
        { path: '../public/fonts/MonaSans/Mona-Sans-Light.woff2', weight: '300', style: 'normal' },
        { path: '../public/fonts/MonaSans/Mona-Sans-LightItalic.woff2', weight: '300', style: 'italic' },
        { path: '../public/fonts/MonaSans/Mona-Sans-Regular.woff2', weight: '400', style: 'normal' },
        { path: '../public/fonts/MonaSans/Mona-Sans-RegularItalic.woff2', weight: '400', style: 'italic' },
        { path: '../public/fonts/MonaSans/Mona-Sans-Medium.woff2', weight: '500', style: 'normal' },
        { path: '../public/fonts/MonaSans/Mona-Sans-MediumItalic.woff2', weight: '500', style: 'italic' },
        { path: '../public/fonts/MonaSans/Mona-Sans-SemiBold.woff2', weight: '600', style: 'normal' },
        { path: '../public/fonts/MonaSans/Mona-Sans-SemiBoldItalic.woff2', weight: '600', style: 'italic' },
        { path: '../public/fonts/MonaSans/Mona-Sans-Bold.woff2', weight: '700', style: 'normal' },
        { path: '../public/fonts/MonaSans/Mona-Sans-BoldItalic.woff2', weight: '700', style: 'italic' },
        { path: '../public/fonts/MonaSans/Mona-Sans-ExtraBold.woff2', weight: '800', style: 'normal' },
        { path: '../public/fonts/MonaSans/Mona-Sans-ExtraBoldItalic.woff2', weight: '800', style: 'italic' },
        { path: '../public/fonts/MonaSans/Mona-Sans-Black.woff2', weight: '900', style: 'normal' },
        { path: '../public/fonts/MonaSans/Mona-Sans-BlackItalic.woff2', weight: '900', style: 'italic' },
    ],
    variable: '--font-mona-sans',
    display: 'swap',
});

export const metadata = {
    title: 'Vaidehi Beauty Care & Academy',
    description: 'Vaidehi Beauty Care & Academy has been offering beauty services to the lovely ladies in Ahmedabad since 1991. We provide Laser Treatment, Hair Removal Services, Facial, Bridal and many more',
    openGraph: {
        title: 'Vaidehi Beauty Care & Academy',
        description: 'Vaidehi Beauty Care & Academy has been offering beauty services to the lovely ladies in Ahmedabad since 1991. We provide Laser Treatment, Hair Removal Services, Facial, Bridal and many more',
        themeColor: '#ec4899',
        image: 'https://www.vaidehibeautycare.com/api/og'
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${monaSans.variable} font-sans`}>
            <head>
                <Script
                    id='google-tag-manager'
                    strategy='beforeInteractive'
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MK2P3L2');`,
                    }}
                />
            </head>
            <body className='antialiased text-slate-900'>
                <Header />
                {children}
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MK2P3L2" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                />
                <Footer />
            </body>
        </html>
    )
}