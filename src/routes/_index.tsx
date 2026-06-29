import { Link } from "react-router";

export default function HomeRoute() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.18),_transparent_28%),linear-gradient(180deg,_#08111f_0%,_#0c172b_55%,_#060b14_100%)]" />

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-12">
          <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            PixelTool router
          </p>
          <h1 className="font-newsreader text-4xl leading-tight text-white sm:text-6xl">
            File-based routing is now wired into the app.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Routes live in <span className="text-white">src/routes</span>, the
            root shell is handled by <span className="text-white">src/root.tsx</span>,
            and React Router now owns the dev and build pipeline.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              Open the about route
            </Link>
            <a
              href="https://reactrouter.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/8"
            >
              React Router docs
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}