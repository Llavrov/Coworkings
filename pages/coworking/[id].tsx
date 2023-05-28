import { useRouter } from 'next/router';
import { type NextPage } from 'next';
import Head from 'next/head';
import CoworkingPage from '../../src/pages/coworking/CoworkingPage';

const Index: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Head>
                <title>Coworking</title>
                <meta name="description" content="Coworking" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CoworkingPage id={id} />
        </>
    );
};

export default Index;
