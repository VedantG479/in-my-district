import { Heart, Bookmark, Pause, X } from "lucide-react";
import profile from '../assets/profile.png'

export default function Story({setUser}) {
  return (
    <div className="absolute left-14 top-[145px] z-20 h-[660px] w-[330px] overflow-hidden rounded-[24px] border border-white/10 bg-black shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
      <img
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/80" />

      <div className="absolute left-0 top-0 z-20 w-full px-4 pt-4">
        {/* STORY BARS */}
        <div className="mb-3 flex gap-1">
          <div className="h-[2px] flex-1 rounded-full bg-white" />
          <div className="h-[2px] flex-1 rounded-full bg-white/25" />
          <div className="h-[2px] flex-1 rounded-full bg-white/25" />
        </div>

        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={profile}
              alt=""
              className="h-9 w-9 rounded-full border border-white/20 object-cover"/>

            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-[14px] font-semibold tracking-[-0.03em] text-white">
                  Ananya
                </h3>
                <span className="text-[11px] text-white/50">
                  4h
                </span>
              </div>
              <p className="text-[11px] text-white/60">
                AMA Café · Bandra
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <button>
              <Pause size={16} className="text-white/80"/>
            </button>

            <button onClick={() => setUser(null)}>
              <X size={18} className="text-white/80" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-full px-4 pb-5">
        <div className="flex items-end gap-3">
          <button className="mb-1 shrink-0">
            <Heart size={19} className="text-white" />
          </button>

          <p className="flex-1 text-[11px] leading-[1.45] tracking-[-0.02em] text-white/92">
            The perfect cozy place for a slow afternoon and amazing food.
          </p>

          <button className="mb-1 shrink-0">
            <Bookmark size={18} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}