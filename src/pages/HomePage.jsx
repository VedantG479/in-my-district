import { useState } from "react";
import background from "../assets/background.png";
import logo from '../assets/logo.png'
import { useForm } from "react-hook-form";
import {
    ArrowRight,
    Mail,
    Lock,
    User,
    Phone,
    Eye,
    EyeOff,
} from "lucide-react";
import auth from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { loginStore } from "../store/authSlice";
import usersDB from "../appwrite/usersDB";

export default function HomePage() {
    const {register, handleSubmit} = useForm()
    const [mode, setMode] = useState("login")
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()

    const submitHandler = async(data) => {
        const {username, phone, email, password} = data
        if(mode == 'signup'){
            try{
                await auth.createUser(username, email, password)
                const createdUser = await auth.getCurrentUser()
                await usersDB.addUser(createdUser.$id, username, email, phone)
                dispatch(loginStore(createdUser.$id))
            }   
            catch(error){
                console.log('error creating user: ', error)
            }
        }
        else{
            try{    
                await auth.loginUser(email, password)
                const loggedInUser = await auth.getCurrentUser()
                dispatch(loginStore(loggedInUser.$id))
            }
            catch(error){
                console.log('error logging in user: ', error)
            }
        }
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#0B0D11] font-[Inter]">
            <img
                src={background}
                alt="background"
                className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />

            <div className="relative z-10 flex min-h-screen flex-col items-center px-10 py-8">
                <img 
                    className="h-[150px]"
                    src={logo} />

                <div className="flex flex-1 flex-col items-center justify-center -mt-10">
                    <div className="max-w-[780px] text-center">
                        <h2 className="text-[42px] leading-[1.02] tracking-[-0.05em] text-white font-normal">
                            Discover cafés, memories,
                            <br />
                            hidden gems, and outings
                            <br />
                            through{" "}
                            <span className="font-['Instrument_Serif'] italic font-normal text-[#B8D3C5]">
                                your people.
                            </span>
                        </h2>

                        {mode === "login" && <p className="mt-5 text-[15px] font-normal tracking-[-0.02em] text-white/60">
                            a better way to discover places through the people you trust.
                        </p>}
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-full max-w-[420px] rounded-[28px] border border-white/10 bg-[rgba(18,18,22,0.72)] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                        <form className="space-y-3"
                            onSubmit={handleSubmit(submitHandler)}>
                            {mode === "signup" && (
                                <>
                                    <div className="flex h-12 items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] px-4">
                                        <User size={16} className="text-white/40" />
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            autoComplete="on"
                                            {...register("username", { required: true, maxLength: 20 })}
                                            className="w-full bg-transparent text-[14px] font-medium tracking-[-0.02em] text-white outline-none placeholder:text-white/35"
                                        />
                                    </div>
                                    <div className="flex h-12 items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] px-4">
                                        <Phone size={16} className="text-white/40" />
                                        <input
                                            type="text"
                                            placeholder="Phone number"
                                            autoComplete="on"
                                            {...register("phone", { required: true, minLength: 10, maxLength: 10})}
                                            className="w-full bg-transparent text-[14px] font-medium tracking-[-0.02em] text-white outline-none placeholder:text-white/35"
                                        />
                                    </div>
                                </>
                            )}
                            <div className="flex h-12 items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] px-4">
                                <Mail size={16} className="text-white/40" />

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    autoComplete="on"
                                    {...register("email", {required: true, pattern: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim})}
                                    className="w-full bg-transparent text-[14px] font-medium tracking-[-0.02em] text-white outline-none placeholder:text-white/35"
                                />
                            </div>
                    
                            <div className="flex h-12 items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] px-4">
                                <Lock size={16} className="text-white/40" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    autoComplete="off"
                                    {...register("password", {required: true, minLength: 6})}
                                    className="w-full bg-transparent text-[14px] font-medium tracking-[-0.02em] text-white outline-none placeholder:text-white/35"
                                />

                                <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-white/40">
                                    {showPassword ? (
                                        <EyeOff size={16} />
                                    ) : (
                                        <Eye size={16} />
                                    )}
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="group flex h-12 w-full items-center justify-center gap-2 rounded-[16px] bg-[#D9916B] text-[14px] font-medium tracking-[-0.02em] text-white transition-all duration-300 hover:bg-[#E0A27F]">
                                {mode === "signup"
                                    ? "Create account"
                                    : mode === "password"
                                        ? "Login"
                                        : "Continue"}

                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                        </form>

                        <div className="my-4 flex items-center gap-3">
                            <div className="h-px flex-1 bg-white/10" />
                            <span className="text-[12px] font-medium text-white/35">
                                or
                            </span>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>

                        {mode !== "signup" ? (
                            <button
                                onClick={() => setMode("signup")}
                                className="flex h-12 w-full items-center justify-center rounded-[16px] border border-white/10 bg-white/[0.03] text-[14px] font-medium tracking-[-0.02em] text-white transition-all duration-300 hover:bg-white/[0.06]">
                                Create an account
                            </button>
                        ) : (
                            <button
                                onClick={() => setMode("login")}
                                className="flex h-12 w-full items-center justify-center rounded-[16px] border border-white/10 bg-white/[0.03] text-[14px] font-medium tracking-[-0.02em] text-white transition-all duration-300 hover:bg-white/[0.06]">
                                I already have an account
                            </button>
                        )}

                        <p className="mt-5 text-center text-[11px] font-medium tracking-[-0.01em] text-white/35">
                            By continuing, you agree to our{" "}
                            <span className="underline underline-offset-2">
                                Terms & Conditions
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}