import Head from "next/head";
import Masthead from "../components/masthead";
import Shop from "../components/shop";
import React from "react";
import Passions from "../components/passions";
import Works from "../components/works";
import TrustedBy from "../components/trustedby";
import ContactUs from "../components/contactus";
import Footer from "../components/footer";

export default function Home() {
    return (
        <div>
            <Head>
                <title>CustomKbs | Shop</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Masthead />
            <Passions />
            <Works />
            <Shop />
            <TrustedBy />
            <ContactUs />
            <Footer />
        </div>
    );
}
