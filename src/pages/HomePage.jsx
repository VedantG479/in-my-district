import { Search, Plus, LocateFixed} from "lucide-react";
import logo from '../assets/logo.png'
import Story from "../components/Story";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import SearchAi from "../components/SearchAi";
import Feed from "../components/Feed";
import NotAuthenticatedPage from "./NotAuthenticatedPage";
import usersDB from "../appwrite/usersDB";

export default function HomePage() {
    const { isAuthenticated, userData } = useSelector(state => state.auth)
    const authenticatedUser = JSON.parse(userData)

    const [ activeUsers, setActiveUsers ] = useState([])
    const [ user, setUser] = useState(null)

    useEffect(() => {
        if(!isAuthenticated)    return
        async function fetchUsers(){
            const followingList = authenticatedUser.following
            let users = []
            for(const followingUser of followingList){
                const tempUser = await usersDB.getUser(followingUser)
                if(tempUser.activePost)   users.push(tempUser)
            }
            setActiveUsers(users)
        }
        fetchUsers()
    }, [])

    return isAuthenticated ? (
        <div className="relative h-screen overflow-hidden bg-[#0B0D11] font-[Inter]">
            <div className="absolute inset-0 bg-[#0F1115]">
                <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50" />

            <div className="absolute top-6 left-6 right-6 z-30 flex items-start justify-between">
                <div className="flex items-center">
                    <img
                        className="h-[100px]"
                        src={logo} />
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center gap-1">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
                                    alt=""
                                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10" />
                                <button className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D9916B] text-white">
                                    <Plus size={11} />
                                </button>
                            </div>
                            <p className="text-[11px] font-medium text-white/60">
                                Your story
                            </p>
                        </div>
                        <Feed activeUsers={activeUsers} setUser={setUser}/>
                    </div>
                </div>

                <div className="flex items-center gap-3 mt-5 mr-5">
                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_8px_20px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                        <Search size={18} className="text-white" />
                    </button>
                    <Dropdown/>
                </div>
            </div>

            {user && <Story setUser={setUser}/>}

            <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4">
                <button className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
                    <LocateFixed size={20} className="text-white" />
                </button>
                <SearchAi/>
            </div>
        </div>
    ) : <NotAuthenticatedPage/>
}