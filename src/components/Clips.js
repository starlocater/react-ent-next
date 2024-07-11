'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTowerBroadcast } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

// IGDB IDS
// 250616 - HellDivers 2, 

// Twitch IDS
// 766571430 - HellDivers 2, 

// 치지직 API, 아프리카 API가 아직 없습니다. 추가되면 해당 API를 이용해서 수정해주세요.

const Clips = () => {
    // const[videos, setVideos] = useState([]);
    const clientId = 'lobzukjtiokyn94s79sckhpkguzm9c'
    const gameId = '766571430'
    const parentDomain = 'http://localhost'

    // useEffect(() => {
    //     const fetchVideos = async () => {
    //         try {
    //             // First, get the access token
    //             const token_response = await axios.post('https://id.twitch.tv/oauth2/token', {
    //                 client_id: clientId,
    //                 client_secret: 'pakpt0gszjbph2vrqitgdaxm52olx6',
    //                 grant_type: 'client_credentials'
    //             });
    //             const accessToken = token_response.data.access_token;
                
    //             // Get the videos for the game
    //             // const response = await axios.get(`https://api.twitch.tv/helix/videos?game_id=766571430`, {
    //             //     headers: {
    //             //         'Client-ID': clientId,
    //             //         'Authorization': `Bearer ${accessToken}`
    //             //     }
    //             // });
    //             // setVideos(response.data.data);
    //             // console.log(response);
                
    //             const response_test = await axios.get('https://api.twitch.tv/helix/videos?id=335921245', {
    //                 headers: {
    //                     'Client-ID': clientId,
    //                     'Authorization': `Bearer ${accessToken}`
    //                 }
    //             });
    //             console.log(response_test)

    //         } catch (error) {
    //             console.log('Failed to fetch videos:', error)
    //         }
    //     };
    //     fetchVideos();
    // }, [])

  return (
    <div className="mt-32 flex h-2/5 align-middle justify-center flex-col">
        <div className="flex flex-row justify-center items-center">
            <p className="text-white font-jersey text-6xl text-center">Our platform On-Air</p>
            <FontAwesomeIcon icon={faTowerBroadcast} className="w-10 h-auto ml-4 text-white" />
        </div>
        {/* <Swiper navigation={true} modules={[Navigation]} pagination={true}>
            {videos.map(video => (
            <SwiperSlide key={video.id}>
                <iframe
                src={`https://player.twitch.tv/?video=${video.id}&parent=${parentDomain}`}
                height="100%"
                width="100%"
                allowFullScreen>
                </iframe>
            </SwiperSlide>
            ))}
        </Swiper> */}
        <img className="mt-10 h-full w-full" src="/images/clips_sample_dark.png" />
    </div>
  )
}
export default Clips

