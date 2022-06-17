import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="min-h-full flex gap-8 items-center justify-center bg-black text-white p-20">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy Policy</Link>
        </footer>
    );
};

export default Footer;
