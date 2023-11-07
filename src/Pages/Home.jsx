import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Navbar from '../component/Navbar';
import ReadMe from '../component/ReadMe';
import MyProject from '../component/MyProject';
import Hdd from '../Pages/Hdd';
import diskGraphite from '../asset/svg/diskGraphite.svg';
import fileTxt from '../asset/svg/fileTxt.svg';

const Home = () => {
  const [isMyProjectVisible, setIsMyProjectVisible] = useState(false);
  const [isReadMeVisible, setIsReadMeVisible] = useState(false);
  const [isHddVisible, setIsHddVisible] = useState(false);

  // const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });

  // const handleStart = (e, data) => {
  //   e.target.style.cursor = 'grab';
  // };

  // const handleDrag = (e, data) => {
  //   // Gestionnaire d'événement de glissement
  // };

  // const handleStop = (e, data) => {
  //   e.target.style.cursor = 'grab';
  // };

  return (
    <div className="bg-black h-full">
      <Navbar />
      <section className="pixel custom-height bg-[url(https://assets.website-files.com/5bac0565754dd6b3e278aeb2/5bac0565754dd6780a78af19_deckstop-background.svg)] bg-[length:2px_2px] bg-repeat web flex">
        <div className="flex flex-col items-center p-1">
          {/* <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={dragPosition}
            grid={[100, 100]}
            scale={1}
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleStop}
          > */}
          <div className="mb-2 handle" onClick={() => setIsHddVisible(true)}>
            <img
              src="https://assets.website-files.com/5bac0565754dd6b3e278aeb2/5c316400edb5fd4d25b25d26_hd-graphite.svg"
              className="h-6 mt-8 mb-1"
              alt=""
            ></img>
            <p className="bg-white text-center">HDD</p>
          </div>
          {/* </Draggable> */}
          {isHddVisible && <Hdd setIsHddVisible={setIsHddVisible} />}
          {/* <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={dragPosition}
            grid={[100, 100]}
            scale={1}
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleStop}
          > */}
          <div className="mb-2 handle" onClick={() => setIsReadMeVisible(true)}>
            <img src={fileTxt} className="h-16 mb-1" alt="logo"></img>
            <div className="bg-white">Read Me</div>
          </div>
          {/* </Draggable> */}
          {isReadMeVisible && (
            <ReadMe setIsReadMeVisible={setIsReadMeVisible} />
          )}
          {/* <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={dragPosition}
            grid={[100, 100]}
            scale={1}
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleStop}
          > */}
          <div
            className="handle mb-2"
            onClick={() => setIsMyProjectVisible(true)}
          >
            <img src={diskGraphite} alt="logo" className="h-16 ml-2 mb-1" />
            <p className="bg-white">My project</p>
          </div>
          {/* </Draggable> */}
          {isMyProjectVisible && (
            <MyProject setIsMyProjectVisible={setIsMyProjectVisible} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
