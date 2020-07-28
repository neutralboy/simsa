import Head from 'next/head';
import Router from "next/router";
import withGA from "next-ga";


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
            <div>
                <Footer />
            </div>
        </>
        )
}

// export default MainApp;
export default withGA("UA-121255747-9", Router)(MainApp);