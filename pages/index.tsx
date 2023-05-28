import { type NextPage } from 'next';
import Head from 'next/head';
import HomePage from '../src/pages/home/HomePage';

const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>Coworking</title>
                <meta name="description" content="Coworking" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomePage />
        </>
    );
};

export default Index;
