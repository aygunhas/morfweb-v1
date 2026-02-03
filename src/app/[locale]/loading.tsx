export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center">
        {/* The Orbiter — iç içe halkalar */}
        <div className="relative size-10">
          {/* Dış halka — sabit, koyu gri */}
          <div
            className="absolute inset-0 rounded-full border-[1px] border-zinc-800"
            aria-hidden
          />
          {/* Dönen halka — sadece üst kısım beyaz */}
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-white animate-spin"
            style={{ animationDuration: "1000ms" }}
            aria-hidden
          />
        </div>
        {/* Status metni */}
        <p
          className="mt-4 text-[10px] tracking-[0.3em] text-zinc-500 animate-pulse"
          aria-live="polite"
        >
          YÜKLENİYOR
        </p>
      </div>
    </div>
  );
}
