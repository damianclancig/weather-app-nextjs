export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <header className="py-2 bg-gray-700 text-white flex justify-between">
        <div className="px-5">Weather App 2024</div>
        <div className="px-5">
          <label htmlFor="city" className="pr-2">
            Search city:
          </label>
          <input type="text" name="city" placeholder="Start type city" className="rounded" />
        </div>
      </header>
      <section className="flex-1 overflow-y-auto">Content</section>
      <footer className="py-1 bg-gray-700 text-white text-center">
        Weather app created with Next.js, tailwind css by Clancig, Damián. MIT License 2024
      </footer>
    </main>
  )
}
