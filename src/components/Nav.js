'use client'

import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useNav } from '../context/NavContext';


const Nav = () => {
    const router = useRouter();
    const { isOpen, isGuideOpen, setIsOpen, setIsGuideOpen } = useNav();

    const toggleDropdown_game = () => {
        setIsGuideOpen(false);
        setIsOpen(!isOpen);
        
    };

    const toggleDropdown_guide = () => {
        setIsOpen(false);
        setIsGuideOpen(!isGuideOpen);
    };

    const logoClicked = () => {
        setIsOpen(false);
        setIsGuideOpen(false);
        router.push('/');
    }

    const NavBar_Gameclicked = (game) => {
        setIsOpen(false);
        setIsGuideOpen(false);
        router.push(`/gamedetails/${game}`);
    }

    const NavBar_CTOClicked = () => {
        setIsOpen(false);
        setIsGuideOpen(false);
        router.push('/streamers');
    }

    // const NavBar_GuideClicked = () => {}

    const games = ['minecraft','zomboid','helldivers2','satisfactory','rust','valheim','factorio','palworld']

    // Map the simplified game names to their display names
    const gameDisplayNames = {
        minecraft: 'Minecraft',
        zomboid: 'Project Zomboid',
        helldivers2: 'Helldivers 2',
        satisfactory: 'Satisfactory',
        rust: 'Rust',
        valheim: 'Valheim',
        factorio: 'Factorio',
        palworld: 'Palworld'
    };

    return (
      <div className="fixed w-full h-20 bg-black flex items-center justify-center z-20">
        <div className="absolute left-0 flex items-center">
            <img src="/images/logo-temp-removebg-preview.png" onClick={(logoClicked)} alt="logo" className="w-20 h-20 cursor-pointer" />
            <div className="text-white font-jersey flex items-end ml-4 cursor-pointer" onClick={(logoClicked)}>
                <span className="text-6xl">ENT</span>
                <span className="text-4xl">ertainment</span>
            </div>
            <div className="flex items-center cursor-pointer ml-12" onClick={toggleDropdown_game}>
                <FontAwesomeIcon icon={faCaretDown} className="text-white" />
                <p className="text-4xl font-jersey text-white ml-4"> GAMES </p>
            </div>
            <div className="flex items-center cursor-pointer ml-12" onClick={toggleDropdown_guide}>
                <FontAwesomeIcon icon={faCaretDown} className="text-white" />
                <p className="text-4xl font-jersey text-white ml-4"> GUIDES </p>
            </div>
            <div className="flex items-center cursor-pointer ml-24 text-white hover:text-cyan-300" onClick={NavBar_CTOClicked}>
                <p className="text-4xl font-jersey ml-4"> MTO server for STREAMERS! </p>
            </div>
        </div>
        <div className="absolute right-5">
            <FontAwesomeIcon icon={faGlobe} className="text-white text-3xl" />
        </div>
        {isOpen && !isGuideOpen && (
        <div className="absolute top-full mt-2 left-2 w-2/3 bg-slate-800 shadow-lg z-10">
            <ul className="grid grid-cols-4 gap-2 text-white font-jersey">
                {games.map((game, index) => (
                    <div key={index} className="flex flex-row justify-start items-center border-2 rounded-lg border-transparent cursor-pointer hover:border-cyan-300" onClick={()=>NavBar_Gameclicked(game)}>
                        <img src={`/images/games/icon_games/icon_${game}.png`} alt={`icon_${game}`} className="w-10 h-10"/>
                        <li className="ml-3 text-center text-lg">{gameDisplayNames[game]}</li>
                    </div>
                ))}
            </ul>
        </div>
            )}
        {isGuideOpen && !isOpen && (
            <div className="absolute top-full mt-2 left-72 w-1/4 bg-slate-800 shadow-lg z-10">
                <ul className="flex flex-col space-y-2 align-middle justify-center text-white font-jersey">
                        <div className="flex flex-row justify-center items-center border-2 rounded-lg border-transparent cursor-pointer hover:border-cyan-300">
                            <li className="text-center text-3xl"> Getting Server </li>
                        </div>
                        <div className="flex flex-row justify-center items-center border-2 rounded-lg border-transparent cursor-pointer hover:border-cyan-300">
                            <li className="text-center text-3xl"> Managing Server </li>
                        </div>
                </ul>
            </div>
        )}
      </div>
    );
  };
  
  export default Nav;