import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="font-display text-6xl font-bold">Building things.</h1>
      <p className="font-display text-6xl italic text-olive">Finding my way.</p>
      <p className="mt-4 text-steel">Code, creativity, faith, and everything in between.</p>
      <div className="mt-6 rounded-2xl border border-gold bg-card p-5">
        Explore my portfolio
      </div>
    </main>
  );
}
