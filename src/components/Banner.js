'use client'
import "../app/globals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';
import { useNav } from '../context/NavContext';

const Banner = () => {
  const router = useRouter();
  const { isOpen, isGuideOpen, setIsOpen, setIsGuideOpen } = useNav();
  const handleDiscordClick = () => {
    // window.open("https://discord.gg/eHtPDz7JJA")
    window.open("https://discord.gg/fdpRa8nj32")
  };

  const navIntoDetail = () => {
    console.log('navigating.. to main page')
    setIsOpen(false);
    setIsGuideOpen(false);
    router.push('/mainpage');
  };

  return (
    // <p> Hello i'm banner and i'm going to be a video! </p>
    <div className="w-full h-3/5 relative">
      <video className="w-full h-full opacity-90 object-cover object-center -z-10" loop muted autoPlay alt="banner_vid">
        <source src="/videos/HELLDIVERS2_battle_sample_banner.mp4" type="video/mp4"/>
      </video>
      <div className="absolute bottom-0 left-1/2 z-10 transform -translate-x-1/2 space-x-10">
        <button className="w-40 h-12 bg-violet-500 border-solid border-2 opacity-60 hover:opacity-100 text-white rounded font-jersey text-4xl" onClick={handleDiscordClick}>
          <FontAwesomeIcon icon={faDiscord} className="mr-3 w-8 h-8" />
          Dive in
        </button>
        <button className="w-40 h-12 bg-amber-300 border-solid border-2 opacity-60 hover:opacity-100 rounded font-jersey text-4xl" onClick={navIntoDetail}>
          To Main
        </button>
      </div>
    </div>

  )
}
export default Banner