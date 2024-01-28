import Tags from "@/components/Tags";
import TweetForm from "@/components/TweetForm";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 px-2 pt-20 selection:bg-cyan-900 selection:text-cyan-100 z-20">
      <article
        className="rounded-full
        p-[1px]
        text-sm
        bg-gradient-to-tr
        from-blue-500
        via-cyan-400
        to-blue-300
        font-medium"
      >
        <div
          className="rounded-full mx-auto
            px-3
            py-1
            bg-slate-900 text-white"
        >
          Beta Release
        </div>
      </article>
      <h2 className="md:text-8xl text-5xl sm:text-6xl font-semibold z-0 inline-flex bg-gradient-to-br from-neutral-100 via-slate-200 to-slate-400 bg-clip-text leading-tight text-transparent tracking-tight">
        Twinker
      </h2>
      <Tags />
      <TweetForm />
    </div>
  );
}
