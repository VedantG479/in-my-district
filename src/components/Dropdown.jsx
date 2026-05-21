import { LogOut, User2, UserRound } from "lucide-react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import auth from "../appwrite/auth"
import { logoutStore } from "../store/authSlice"
import { useNavigate } from "react-router"

export default function Dropdown() {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = async () => {
        try{
            await auth.logoutUser()
            dispatch(logoutStore())
            navigate('/')
        }
        catch(error){
            console.log('error logging out user: ', error)
        }
    }

    return (
        <>
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_8px_20px_rgba(0,0,0,0.12)] backdrop-blur-xl"
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
                <UserRound size={18} className="text-white" />
            </button>

            <div className="relative">
                {showProfileDropdown && (
                    <div className="absolute right-0 top-14 w-[180px] overflow-hidden rounded-2xl border border-white/10 bg-[rgba(18,18,22,0.92)] shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                        <button
                            className="flex w-full items-center gap-3 px-4 py-3 text-left transition-all duration-200 hover:bg-white/[0.05]">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05]">
                                <User2 size={16} className="text-white/80" />
                            </div>

                            <span className="text-[14px] font-medium tracking-[-0.02em] text-white">
                                Profile
                            </span>
                        </button>

                        <div className="h-px bg-white/10" />

                        <button
                            className="flex w-full items-center gap-3 px-4 py-3 text-left transition-all duration-200 hover:bg-[#ff5c5c]/10"
                            onClick={logoutHandler}>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff5c5c]/10">
                                <LogOut size={16} className="text-[#ff7b7b]" />
                            </div>

                            <span className="text-[14px] font-medium tracking-[-0.02em] text-[#ff7b7b]">
                                Logout
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

