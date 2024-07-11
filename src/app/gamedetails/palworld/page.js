const Palworld = () => {
  return (
    <div className="pt-32 w-screen h-screen overflow-y-scroll no-scrollbar bg-black">
      <div className="overflow-scroll no-scrollbar flex flex-col">
        <div className="mb-20 flex justify-center w-full">
          <img src="/images/games/title/palworld.png" className="w-96 h-56"></img>
        </div>

        <div className="ml-20 flex space-x-60 text-white font-jersey">
          <div className="flex flex-col space-y-5 text-3xl">
            <div className="relative bg-black z-10">
              <img src="/images/games/background_games/palworld/lamball.webp" className="absolute -top-14 -left-0  w-20 -z-10" />
              <div className="border-cyan-300 border-spacing-2 border-2 rounded-lg w-full max-w-xl p-4 z-10 bg-black">
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/RrrRs7-gpzg?si=bGZ_cjpew8zpJuyV" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="border-cyan-300 border-spacing-2 border-2 rounded-lg w-full max-w-xl p-4 text-justify">
              Palworld is home to over 100 unique Pals, each equipped with a diverse set of skills to enhance the player's adventure. 
              Along your journey, you will also encounter formidable boss Pals that pose a challenge even for the most seasoned Pal tamers. 
              Naturally, these boss Pals are also capturable.
            </div>
          </div>

          <div className="flex flex-col text-3xl w-full max-w-3xl">
            plans & guide
            <img className="fixed bottom-0 right-2 h-1/4" src="/images/games/background_games/palworld/chillet-removebg.png"></img>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Palworld