export function Background() {

    return (
        <div className="absolute -z-10 h-screen w-full bg-slate-950 overflow-hidden">
            <div
                className="absolute bottom-0 left-[-18%] right-0 top-[0] h-[700px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.10),rgba(255,255,255,0))]" />
            <div
                className="absolute bottom-0 right-[-20%] top-[0] h-[700px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.10),rgba(255,255,255,0))]" />
        </div>
    )
}