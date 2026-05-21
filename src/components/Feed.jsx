export default function Feed({ activePosts }) {
    return (
        <>
        {
            activePosts.map((post, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center gap-1">
                    <div className="rounded-full bg-gradient-to-tr from-[#ff8a5b] via-[#ff4fd8] to-[#6a7dff] p-[2px]">
                        <div className="rounded-full bg-[#0B0D11] p-[2px]">
                            <img
                                src={post.image}
                                alt=""
                                className="h-12 w-12 rounded-full object-cover"
                            />
                        </div>
                    </div>
                    <p className="text-[11px] font-medium text-white/60">
                        {post.name}
                    </p>
                </div>
            ))
        }
        </>
    )
}

