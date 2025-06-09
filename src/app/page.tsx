
export default function Home() {
  return (
     <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Progressive Web App (PWA) – Next.js 14 App Router Demo
      </h1>
      <p className="text-lg max-w-xl text-gray-700 dark:text-gray-300">
        This is a simple proof-of-concept application demonstrating how to turn a Next.js 14 App Router project into a
        Progressive Web App. It supports service worker registration, offline capabilities, and installability.
      </p>
    </section>
  );
}
