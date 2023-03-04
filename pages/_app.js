import '../styles/style.css';
import Layout from '../components/Layout';
import localFont from 'next/font/local';

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

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${monaSans.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
