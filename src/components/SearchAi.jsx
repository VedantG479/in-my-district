import { Sparkles } from "lucide-react";

export default function SearchAi() {
    return (
        <div className="flex w-[520px] items-center gap-4 rounded-full border border-white/10 bg-[rgba(18,18,22,0.78)] px-5 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
            <Sparkles size={17} className="text-white/40" />
            <input
                type="text"
                placeholder="Ask AI anything... e.g., best cafés for work."
                className="flex-1 bg-transparent text-[14px] tracking-[-0.03em] text-white outline-none placeholder:text-white/35" />
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D9916B] text-white transition-all duration-300 hover:bg-[#E0A27F]">
                ↑
            </button>
        </div>
    )
}