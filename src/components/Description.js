const Description = () => {
  return (
    <div className="mt-20 flex w-full gap-6 grid-cols-4 place-content-evenly justify-center h-1/4 sm:h-1/5 4xl:h-1/4">
        <div className="w-1/4 h-full p-2 ml-1 rounded-xl border-t-2 border-l-2 border-cyan-300 flex flex-col flex-grow overflow-hidden">
            <div>
                <p className="mt-2 w-full text-4xl font-jersey text-center inline-block text-cyan-300 sm:text-3xl 4xl:text-6xl"> Play when you want </p>
            </div>
            <div>
                <p className="mt-2 w-full text-3xl font-jersey text-center inline-block text-white sm:text-2xl 4xl:text-5xl"> Get your own 24/7 dedicated server</p>
                <p className="w-full text-3xl font-jersey text-center inline-block text-white sm:text-2xl 4xl:text-5xl"> and chill or burn whenever you want.</p>
            </div>
        </div>
        <div className="w-1/4 h-full p-2  rounded-xl border-t-2 border-l-2 border-cyan-300 justify-start flex flex-col flex-grow overflow-hidden">
            <div>
                <p className="mt-2 w-full text-4xl font-jersey text-center inline-block text-cyan-300 sm:text-3xl 4xl:text-6xl"> Affordable price </p>
            </div>
            <div>
                <p className="mt-2 w-full text-3xl font-jersey text-center inline-block text-white sm:text-2xl 4xl:text-5xl"> Our optimized hardware provides you with a cost-effective server. </p>
            </div>
        </div>
        <div className="w-1/4 h-full p-2  rounded-xl border-t-2 border-l-2 border-cyan-300 justify-start flex flex-col flex-grow overflow-hidden">
            <div>
                <p className="mt-2 w-full text-4xl font-jersey text-center inline-block text-cyan-300 sm:text-3xl 4xl:text-6xl"> Easy to play </p>
            </div>
            <div>
                <p className="mt-2 w-full text-3xl font-jersey text-center inline-block text-white sm:text-2xl 4xl:text-5xl"> All you need is just a discord account. </p>
            </div>
        </div>
        <div className="w-1/4 h-full p-2 mr-1  rounded-xl border-t-2 border-l-2 border-cyan-300 justify-start flex flex-col flex-grow overflow-hidden">
            <div>
                <p className="mt-2 w-full text-4xl font-jersey text-center inline-block text-cyan-300 sm:text-3xl 4xl:text-6xl"> Easy to control </p>
            </div>
            <div>
                <p className="mt-2 w-full text-3xl font-jersey text-center inline-block text-white sm:text-2xl 4xl:text-5xl"> You can easily manage your own server with discord Bot.</p>
            </div>
        </div>
    </div>
  )
}
export default Description