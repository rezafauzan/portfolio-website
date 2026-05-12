export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-5 sm:px-8">
        <div className="w-full">
          <div className="h-3 w-24 rounded-full bg-white/10" />
          <div className="mt-4 h-9 w-[min(520px,90%)] rounded-2xl bg-white/10" />
          <div className="mt-3 h-4 w-[min(680px,92%)] rounded-full bg-white/8" />
          <div className="mt-2 h-4 w-[min(560px,85%)] rounded-full bg-white/8" />
          <div className="mt-8 flex gap-3">
            <div className="h-10 w-32 rounded-full bg-cyan-300/10 ring-1 ring-inset ring-cyan-300/20" />
            <div className="h-10 w-32 rounded-full bg-white/5 ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

