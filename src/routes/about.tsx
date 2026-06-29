import { Link } from "react-router";

export default function AboutRoute() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
      <div className="rounded-[2rem] border border-slate-200/10 bg-slate-950/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          About this setup
        </p>
        <h1 className="mt-4 font-newsreader text-4xl text-white sm:text-5xl">
          Built for nested routes, loaders, and route-module growth.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
          This starter now has a React Router framework entry, a filesystem route
          manifest, and room for more route modules without changing the app
          shell.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}