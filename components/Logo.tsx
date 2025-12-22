export default function Logo({ className = "", isDark = false }: { className?: string, isDark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* آیکون لوگو: طرح انتزاعی الماس */}
      <div className="relative flex h-10 w-10 items-center justify-center">
        {/* لایه پشت */}
        <div className="absolute inset-0 rotate-45 rounded-lg bg-blue-600/20 blur-sm"></div>
        {/* لایه اصلی */}
        <svg viewBox="0 0 24 24" fill="none" className="relative h-8 w-8 text-blue-600" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 9l6-7 6 7-6 13-6-13z" className="fill-blue-600/10" />
          <path d="M6 9h12" />
          <path d="M12 2v20" />
        </svg>
      </div>

      {/* تایپوگرافی */}
      <div className="flex flex-col justify-center">
        <span className={`text-xl font-black tracking-tighter leading-none flex items-center gap-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          LUXE
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1"></span>
        </span>
        {/* متن اصلاح شد 👇 */}
        <span className={`text-[9px] font-bold tracking-[0.2em] uppercase opacity-60 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
          PREMIUM SHOP
        </span>
      </div>
    </div>
  );
}