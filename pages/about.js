
export default function About() {
  return (
    <main className="min-h-screen px-6 py-20 text-white bg-black flex flex-col justify-center items-center">
      <h2 className="text-4xl font-light mb-4">Why Diamond Edge?</h2>
      <p className="max-w-3xl text-lg text-center leading-relaxed">
        Diamond Edge is not just another AI platform. We deliver precise, jurisdiction-specific legal work—
        instantly and securely. Built with law firms in mind, our platform ensures:
      </p>
      <ul className="mt-6 space-y-3 text-left max-w-xl list-disc list-inside">
        <li>Fully verified, citation-linked legal insights</li>
        <li>On-demand drafting, redlining, and research tools</li>
        <li>Private infrastructure and encrypted processing</li>
        <li>Zero hallucinations. All facts, no fiction.</li>
        <li>Trusted by high-performance legal teams worldwide</li>
      </ul>
    </main>
  );
}
