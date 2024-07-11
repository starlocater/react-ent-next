const minecraft = () => {
  return (
    <div className="pt-32 w-screen h-screen overflow-y-scroll no-scrollbar bg-black">
      <div className="overflow-scroll no-scrollbar flex flex-col">
        <div className="mb-20 flex justify-center w-full">
          <img src="/images/games/title/minecraft.jpg" className="w-96 h-56"></img>
        </div>
        
        <div className="ml-20 flex space-x-60 text-white font-jersey">
          <div className="flex flex-col space-y-5 text-3xl">
            <div className="relative bg-black z-10">
              <img src="/images/games/background_games/minecraft/pickaxe.webp" className="absolute -top-14 -right-0  w-20 -z-10" />
              <img src="/images/games/background_games/minecraft/sword.webp" className="absolute -top-14 -left-0  w-20 -z-10 rotate-[270deg]" />
              <div className="border-cyan-300 border-spacing-2 border-2 rounded-lg w-full max-w-xl p-4 z-10 bg-black">
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/ONs7kTlqGw4?si=Lv66sQwt-Y99P5m3" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="border-cyan-300 border-spacing-2 border-2 rounded-lg w-full max-w-xl p-4 text-justify">
              Minecraft is a game made up of blocks, creatures, and community. 
              You can survive the night or build a work of art - the choice is all yours. 
              But if the thought of exploring a vast new world all on your own feels overwhelming, then fear not! 
              Let's explore what Minecraft is all about!
            </div>
          </div>

          <div className="flex flex-col text-3xl w-full max-w-3xl">
            plans & guide
            <img className="fixed bottom-0 right-2 h-1/4" src="/images/games/background_games/minecraft/creeper.webp"></img>
          </div>

        </div>
      </div>
    </div>
  )
}
export default minecraft