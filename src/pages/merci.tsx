import Link from 'next/link';

export default function MerciPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center font-[Space Grotesk] px-4">
      <h1 className="text-3xl font-bold text-teal-400 mb-4">Merci pour votre message !</h1>
      <p className="text-gray-300 text-center max-w-md mb-6">
        Votre message a bien été envoyé. Je vous répondrai dès que possible.
      </p>
      <Link
        href="/"
        className="text-sm text-teal-300 border border-teal-400 px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition duration-300"
      >
        ← Retour à l’accueil
      </Link>
    </main>
  );
}