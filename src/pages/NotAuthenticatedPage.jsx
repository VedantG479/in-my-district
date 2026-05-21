import { ArrowLeft, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router";

export default function NotAuthenticatedPage() {
    const navigate = useNavigate()
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0D11] font-[Inter]">
            <div className="absolute inset-0 bg-[#0F1115]">
                <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50" />

            <div className="relative z-10 flex w-full max-w-[520px] flex-col items-center rounded-[36px] border border-white/10 bg-[rgba(18,18,22,0.72)] px-10 py-12 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D9916B]/15">
                    <LockKeyhole
                        size={34}
                        className="text-[#F3BE97]"
                    />
                </div>
                <h1 className="mt-8 text-center text-[34px] font-semibold tracking-[-0.06em] text-white">
                    You’re not signed in
                </h1>

                <p className="mt-4 max-w-[360px] text-center text-[15px] leading-[1.8] tracking-[-0.02em] text-white/55">
                    Sign in to discover cafés, memories, hidden gems,
                    and outings through your people.
                </p>

                <div className="mt-10 flex items-center gap-4">
                    <button className="flex h-12 items-center rounded-full bg-[#D9916B] px-6 text-[14px] font-medium tracking-[-0.02em] text-white shadow-[0_12px_30px_rgba(217,145,107,0.25)] transition-all duration-300 hover:bg-[#E0A27F]"
                    onClick={() => navigate('/')}>
                        Login
                    </button>
                </div>

                <p className="mt-8 text-[12px] tracking-[-0.02em] text-white/30">
                    Error 401 · Authentication Required
                </p>
            </div>
        </div>
    );
}