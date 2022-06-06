import Head from 'next/head';
import Masthead from "../components/masthead";
import Navbar from "../components/navbar";

export default function Home() {
    return (
        <div>
            <Head>
                <title>CustomKbs | Shop</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Masthead />
            <Navbar />
        </div>
    )
}