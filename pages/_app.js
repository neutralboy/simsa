import Head from 'next/head';
import Router from "next/router";
import withGA from "next-ga";


import Nav from '../components/Nav';
import Footer from '../components/Footer';

const MainApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name="google-site-verification" content="vJdkICQH8ENaXeXapqr44VC797yb2s1Ip84ZdIS3oUg" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Poppins:wght@500&display=swap" rel="stylesheet"/> 
            </Head>
            <Nav />
            <div style={{ marginTop: "4.4rem" }} >
                <Component {...pageProps} />
            </div>
            <div>
                <Footer />
            </div>
        </>
        )
}

export default withGA("UA-121255747-9", Router)(MainApp);
