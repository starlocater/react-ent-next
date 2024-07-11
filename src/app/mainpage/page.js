import Advantage from "../../components/Advantage"
import GamesTab from "../../components/GamesTab"

const Mainpage = () => {
  return (
    <div className="pt-32 w-screen h-screen overflow-y-scroll no-scrollbar bg-black">
      <Advantage></Advantage>
      <hr className="mt-5 w-full border-cyan-300 border-dashed"></hr>
      <GamesTab></GamesTab>
    </div>
  )
}
export default Mainpage