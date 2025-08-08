
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Diamond Edge Co.</title>
        <meta name="description" content="Sharper Decisions. Stronger Cases." />
      </Head>
      <main className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
        <h1 className="text-4xl md:text-6xl font-light text-center mb-4">
          Sharper Decisions. Stronger Cases.
        </h1>
        <p className="text-lg md:text-xl text-center max-w-xl">
          Secure advanced AI software for legal teams — draft, review, and research with verified citations in minutes.
        </p>
      </main>
    </>
  )
}
