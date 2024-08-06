// src/pages/index.tsx
import Head from 'next/head';
import Search from './components/Search';

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Head>
                <title>Search App</title>
                <meta name="description" content="A simple search app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full p-4">
                <h1 className="text-2xl font-bold text-center mb-4 bg-orange-300">Search App</h1>
                <Search />
            </main>
        </div>
    );
}