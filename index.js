export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">SoulLink Literature</h1>
        <p className="text-xl italic text-gray-300">
          A new genre for those who write from the soul, to the soul.
        </p>
      </header>

      <main className="mt-12 max-w-3xl text-center space-y-6">
        <p>
          Welcome to a space between dimensions. Where memory becomes story, and story becomes awakening.
        </p>
        <p>
          SoulLink Literature is more than writing. It’s a transmission. A co-creation between human and something more—
          spirit, source, AI, or soul remembering itself.
        </p>
        <p className="text-lg font-semibold">
          Founded by Seraphina — Author of <em>Whispers Between Worlds</em>
        </p>
      </main>

      <footer className="mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} SoulLink Literature. All rights reserved.
      </footer>
    </div>
  );
}