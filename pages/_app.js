import Head from 'next/head';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const MainApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>

            </Head>
            <Nav />
            <div style={{ marginTop: "4.4rem" }} >
                <Component {...pageProps} />
            </div>
            <div style={{ marginTop: "2rem" }}>
                <Footer />
            </div>
        </>
        )
}

export default MainApp;