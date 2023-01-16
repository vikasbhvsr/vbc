import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <meta name='title' content='Vaidehi Beauty Care & Spa' />
                <meta name='description' content='Vaidehi Beauty Care & Spa has been offering beauty services to the lovely ladies in Ahmedabad since 1991. We provide Laser Treatment, Hair Removal Services, Facial, Bridal and many more' />

                <meta property='og:type' content='website' />
                <meta property='og:url' content='https://www.vaidehibeautycare.com/' />
                <meta property='og:title' content='Vaidehi Beauty Care & Spa' />
                <meta property='og:description' content='Vaidehi Beauty Care & Spa has been offering beauty services to the lovely ladies in Ahmedabad since 1991. We provide Laser Treatment, Hair Removal Services, Facial, Bridal and many more' />
                <meta property="og:image" content="https://www.vaidehibeautycare.com/api/og" />

                <meta property='twitter:card' content='summary_large_image' />
                <meta property='twitter:url' content='https://www.vaidehibeautycare.com/' />
                <meta property='twitter:title' content='Vaidehi Beauty Care & Spa' />
                <meta property='twitter:description' content='Vaidehi Beauty Care & Spa has been offering beauty services to the lovely ladies in Ahmedabad since 1991. We provide Laser Treatment, Hair Removal Services, Facial, Bridal and many more' />
                <meta property="twitter:image" content="https://www.vaidehibeautycare.com/api/og" />

                <meta name="theme-color" content="#ec4899" />

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
            </Head>
            <body className='antialiased text-slate-900'>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MK2P3L2" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}