import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                {/* <!-- Primary Meta Tags --> */}
                <title>Vaidehi Beauty Care & Spa</title>
                <meta name="title" content="Vaidehi Beauty Care & Spa" />
                <meta name="description" content="Vaidehi Beauty Care & Spa has been offering beauty services to the lovely ladies in Ahmedabad since 1991. We provide Laser Treatment, Hair Removal Services, Facial, Bridal and many more" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.vaidehibeautycare.com/" />
                <meta property="og:title" content="Vaidehi Beauty Care & Spa" />
                <meta property="og:description" content="Vaidehi Beauty Care & Spa has been offering beauty services to the lovely ladies in Ahmedabad since 1991. We provide Laser Treatment, Hair Removal Services, Facial, Bridal and many more" />
                <meta property="og:image" content="" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.vaidehibeautycare.com/" />
                <meta property="twitter:title" content="Vaidehi Beauty Care & Spa" />
                <meta property="twitter:description" content="Vaidehi Beauty Care & Spa has been offering beauty services to the lovely ladies in Ahmedabad since 1991. We provide Laser Treatment, Hair Removal Services, Facial, Bridal and many more" />
                <meta property="twitter:image" content="" />
            </Head>
            <body className='antialiasing'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}