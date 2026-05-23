import profile from '../assets/profile.png'
export default function Feed({ activeUsers, setUser }){
    console.log(activeUsers)
    return (
        <>
        {
            activeUsers.map((activeUser, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center gap-1"
                    onClick={() => setUser(activeUser)}>
                    <div className="rounded-full bg-gradient-to-tr from-[#ff8a5b] via-[#ff4fd8] to-[#6a7dff] p-[2px]">
                        <div className="rounded-full bg-[#0B0D11] p-[2px]">
                            <img
                                src={profile}
                                alt=""
                                className="h-10 w-10 rounded-full object-cover"
                            />
                        </div>
                    </div>
                    <p className="text-[11px] font-medium text-white/60">
                        {activeUser.username}
                    </p>
                </div>
            ))
        }
        </>
    )
}

