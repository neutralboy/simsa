import Head from 'next/head';


const OpenGraph = ({ title = "", 
            description = "Empowering tomorrow's doctors.", 
            url="", 
            image ="https://res.cloudinary.com/poorna/image/upload/c_scale,w_100/v1595707612/simsa/IMG-20200725-WA0017.png"
 }) => (
    <Head>
        {/* Fb: https://www.facebook.com/southindianmsa.2020/ */}
        <title>{title} | South Indian Medical Students Association</title>

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="South Indian Medical Students Association" />

        <meta property="og:title" content={`${title} | South Indian Medical Students Association `} />
        <meta property="og:url" content={"https://simsa.in/" + url} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:type" content="image/png" />

        <meta name="description" content={description} />
    </Head>
)

export default OpenGraph