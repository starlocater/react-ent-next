const zomboid = () => {
  return (
    <div className="pt-32 w-screen h-screen overflow-y-scroll no-scrollbar bg-black">
      <div className="overflow-scroll no-scrollbar flex flex-col">
        <div className="mb-20 flex justify-center w-full">
          <img src="/images/games/title/zomboid.png" className="w-96 h-56"></img>
        </div>
        
        <div className="ml-20 flex space-x-60 text-white font-jersey">
          <div className="flex flex-col space-y-5 text-3xl">
            <div className="relative bg-black z-10">
              <img src="/images/games/background_games/zomboid/Spiffo250.png" className="absolute -top-14 -right-0  w-20 -z-10" />
              <div className="border-cyan-300 border-spacing-2 border-2 rounded-lg w-full max-w-xl p-4 bg-black">
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/nPbsDmzZ3Oc?si=w1wNEmuzVed-n7E7" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="border-cyan-300 border-spacing-2 border-2 rounded-lg w-full max-w-xl p-4 text-justify">
              Project Zomboid is an open world survival horror game currently in early access and being developed by independent developer, The Indie Stone. 
              The game is set in a post apocalyptic zombie infested world where the player is challenged to survive for as long as possible before inevitably dying.
            </div>
            
          </div>

          <div className="flex flex-col text-3xl w-full max-w-3xl">
            plans & guide
            <img className="fixed bottom-0 right-2 h-1/4" src="/images/games/background_games/zomboid/Spiffo.png"></img>
          </div>

        </div>
      </div>
    </div>
  )
}
export default zomboid