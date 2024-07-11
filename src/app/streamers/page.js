'use client'
import { Dropdown } from 'primereact/dropdown';
import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';

const Streamers = () => {
  const [selectedGame, setSelectedGame] = useState("");
  const [cpuValue, setcpuValue] = useState(20);
  const [memoryValue, setmemoryValue] = useState(20);
  const [emailAddress, setemailAddress] = useState("");
  const [additionalReq, setadditionalReq] = useState("");

  const games = [
    {name: 'Minecraft', code:'minecraft'},
    {name: 'Project Zomboid', code:'zomboid'},
    {name: 'Palworld', code:'palworld'},
    {name: 'Rust', code:'rust'},
    {name: 'Satisfactory', code:'satisfactory'},
    {name: 'Factorio', code:'factorio'},
    {name: 'Helldivers2', code:'helldivers2'},
    {name: 'Valheim', code:'valheim'},
  ];

  // Dropdown list 항목들에 적용되는 템플릿
  const itemTemplate = (option) => {
    return (
      <div className="flex items-center">
        <img className="w-5 h-5" src={`/images/games/icon_games/icon_${option.code}.png`} alt={option.name}/>
        <span className="ml-2">{option.name}</span>
      </div>
    )
  }

  // Dropdown에서 선택한 항목을 표시할 때 적용되는 템플릿
  const selectedItemTemplate = (option,props) => {
    if (option){
      return (
        <div className="flex items-center">
          <img className="w-5 h-5" src={`/images/games/icon_games/icon_${option.code}.png`} alt={option.name}/>
          <span className="ml-2">{option.name}</span>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };

  // const handleSubmit = () => {
  //   if (!selectedGame || !cpuValue || !memoryValue || !emailAddress){
  //     alert('Please fill out all fields before submitting.');
  //     return;
  //   }

  //   const templateParams = {
  //     to_email: 'starlocater@google.com',
  //     game: selectedGame.name,
  //     cpu: cpuValue,
  //     memory: memoryValue,
  //     request: additionalReq,
  //   }

  //   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
  //     .then((response) => {
  //       console.log('SUCCESS!', response.status, response.text);
  //       alert('Your request has been sent successfully!');
  //     }, (error) => {
  //       console.log('FAILED...', error);
  //       alert('Failed to send your request. Please try again later.');
  //     });
  // }



  const dropdownStyles = {
    root: 'text-white font-jersey text-3xl',
    trigger: 'pl-2 text-white',
    list: 'bg-black pl-2 pr-2',
    panel: 'border border-white border-dashed',
    item: 'hover:bg-cyan-400 mt-2',
    itemLabel: 'text-white font-jersey text-xl',
    placeholder: 'text-white font-jersey text-xl',
  };

  const sliderStyles = {
    root: 'w-full h-1 bg-white',
    range: 'bg-cyan-300',
    handle: 'transform -translate-y-1/2 bg-white h-4 w-4 border-2 rounded-0 cursor-grabbing', // Adjusted positioning for the square handle
  };

  const inputTextStyles = {
    root: 'text-white font-jersey text-3xl pl-2 text-start bg-black border-2 rounded-xl w-1/3 focus:outline-none'
  };

  const textareaStyles = {
    root: 'text-white font-jersey text-xl text-start bg-black border-2 rounded-xl w-1/3 focus:outline-none pl-2'
  }

  const buttonStyles = {
    root: 'w-1/2 h-1/3 text-white font-jersey text-4xl bg-yellow-400 hover:bg-yellow-300 mt-10 mb-10 border-2 rounded-xl'
  }

  return (
    <div className ="pt-32 w-screen h-screen overflow-y-scroll no-scrollbar font-jersey bg-black">
        <div className="text-center text-white text-3xl"> 
          We offer streamers a MTO server so that they can optimize their streaming experience <br/>
          1. Select the game and adjust the spec of the server to your liking <br/>
          2. If you need more information, please write down anything <br/>
          3. Click Submit button when you are ready it will send us your request immediately!
        </div>
        {selectedGame && (
          <div className="flex justify-center mt-5">
            <img className="w-1/2" src={`/images/games/${selectedGame?.code}.jpg`} />
          </div>
        )}
        <div className="flex align-middle justify-center mt-10">
          <Dropdown className="" pt={dropdownStyles} options={games} optionLabel='name' value={selectedGame} onChange={(e) => setSelectedGame(e.value)} 
          placeholder="Select a game" itemTemplate={itemTemplate} valueTemplate={selectedItemTemplate} />
        </div>
        <div className="flex flex-row gap-x-20 justify-center w-full">
          {/* <img/> */}
          <div className="flex flex-col mt-10 gap-y-14 items-center font-jersey text-white w-full">
            <div className="flex items-center gap-x-5 w-1/2">
              <div className="text-3xl w-44">
                CPU
              </div>
              <Slider pt={sliderStyles} value={cpuValue} onChange={(e) => setcpuValue(e.value)} />
              <InputText pt={inputTextStyles} className='ml-10' value={`${cpuValue} cores`} onChange={(e) =>setcpuValue(e.target.value)} />
            </div>
            <div className="flex items-center gap-x-5 w-1/2">
              <div className="text-3xl w-44">
                RAM
              </div>
              <Slider pt={sliderStyles} value={memoryValue} onChange={(e) => setmemoryValue(e.value)} />
              <InputText pt={inputTextStyles} className='ml-10' value={`${memoryValue} GB`} onChange={(e) =>setmemoryValue(e.target.value)} />
            </div>
            <div className="flex items-center gap-x-5 w-1/2">
              <div className="text-3xl w-56">
                Your E-mail address
              </div>
              <i className="pi pi-angle-double-right text-white text-xl"></i>
              <InputText pt={inputTextStyles} className='ml-5 w-2/3' value={emailAddress} onChange={(e) =>setemailAddress(e.target.value)} />
            </div>
          </div>
        </div>
        {selectedGame && (
          <div className="text-center text-white text-3xl mt-10">
            <p>[ Your order is <span className="text-yellow-300">{selectedGame.name}</span> server with <span className="text-yellow-300">{cpuValue} cores CPU </span> 
            and <span className="text-yellow-300">{memoryValue}GB RAM</span> ]</p>
            <p>If you have any additional request, please tell us</p>
            <i className="pi pi-angle-double-down text-white text-xl text-center"></i> <br/>
            <InputTextarea className="mt-5" autoResize pt={textareaStyles} value={additionalReq} onChange={(e) => setadditionalReq(e.target.value)} />
            <br/>
            <Button pt={buttonStyles} label="Submit"  />
          </div>
        )}
    </div>
  )
}
export default Streamers