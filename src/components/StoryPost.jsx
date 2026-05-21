export default function StoryPost() {
    return (
        <div className="absolute top-[125px] left-6 z-20 w-[320px]">
            <div className="rounded-[28px] border border-white/10 bg-[rgba(18,18,22,0.72)] p-4 shadow-[0_16px_45px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
                {/* HEADER */}
                <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
                            alt=""
                            className="h-9 w-9 rounded-full object-cover"
                        />

                        <div>
                            <h3 className="text-[16px] font-semibold tracking-[-0.04em] text-white">
                                Ananya
                            </h3>

                            <p className="text-[12px] text-white/40">
                                Today, 4:30 PM
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button>
                            <Ellipsis size={17} className="text-white/50" />
                        </button>

                        <button>
                            <X size={17} className="text-white/50" />
                        </button>
                    </div>
                </div>

                {/* IMAGE */}
                <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200"
                    alt=""
                    className="mt-4 h-[170px] w-full rounded-[22px] object-cover"
                />

                {/* CONTENT */}
                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[28px] leading-none tracking-[-0.06em] text-white">
                            AMA Cafe
                        </h2>

                        <div className="flex items-center gap-1 rounded-xl bg-[#D9916B]/15 px-3 py-2">
                            <span className="text-[11px]">⭐</span>

                            <span className="text-[16px] font-semibold tracking-[-0.04em] text-[#F3BE97]">
                                4.6
                            </span>
                        </div>
                    </div>

                    <p className="mt-2 text-[13px] text-white/45">
                        📍 Bandra, Mumbai
                    </p>

                    <p className="mt-4 text-[14px] leading-[1.7] tracking-[-0.02em] text-white/65">
                        The perfect cozy place for a slow afternoon and amazing food.
                    </p>

                    {/* MINI IMAGES */}
                    <div className="mt-4 flex gap-2">
                        {[
                            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=600",
                            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
                            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600",
                        ].map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className="h-16 w-16 rounded-xl object-cover"
                            />
                        ))}
                    </div>

                    {/* VISITED */}
                    <div className="mt-4 flex items-center gap-3">
                        <div className="flex -space-x-2">
                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
                                alt=""
                                className="h-6 w-6 rounded-full ring-2 ring-[#0B0D11]"
                            />

                            <img
                                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400"
                                alt=""
                                className="h-6 w-6 rounded-full ring-2 ring-[#0B0D11]"
                            />
                        </div>

                        <p className="text-[12px] text-white/45">
                            Visited with Rohit, Mehak
                        </p>
                    </div>
                </div>

                {/* ACTIONS */}
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <div className="flex items-center gap-5">
                        <button className="flex items-center gap-2">
                            <Heart size={17} className="text-[#ff6d6d]" />
                            <span className="text-[12px] text-white/60">24</span>
                        </button>

                        <button className="flex items-center gap-2">
                            <MessageCircle size={17} className="text-white/55" />
                            <span className="text-[12px] text-white/60">6</span>
                        </button>
                    </div>

                    <button>
                        <Bookmark size={16} className="text-white/55" />
                    </button>
                </div>
            </div>
        </div>
    )
}