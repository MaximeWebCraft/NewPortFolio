import cross from '../asset/svg/cross.svg';
import contact from '../asset/svg/contact.svg';
import folder from '../asset/svg/folder.svg';
import snake from '../asset/svg/snake.svg';
import folderMusic from '../asset/svg/folderMusic.svg';
import email from '../asset/svg/email.svg';
import { motion } from 'framer-motion';
import CVDownloadButton from '../component/CVDownloadButton';

import Contact from '../component/Contact';
import { useState } from 'react';
import Formulaire from '../component/Formulaire';
import MyMusic from '../component/MyMusic';
import SansTitre from '../component/SansTitre';
import SnakeGame from '../component/SnakeGame';
const Hdd = ({ setIsHddVisible }) => {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isSnakeVisible, setIsSnakeVisible] = useState(false);
  const [isMyMusicVisible, setIsMyMusicVisible] = useState(false);
  const [isFormulaireVisible, setIsFormulaireVisible] = useState(false);
  const [isSansTitreVisible, setIsSansTitreVisible] = useState(false);
  const textAnimation = {
    hidden: { opacity: 0, x: 0, scale: 1 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        damping: 10,
        stiffness: 25,
      },
    },
  };
  return (
    <div>
      <div className=" border-4  border-black bg-white h-4/6 absolute left-0 right-0 mx-auto  w-10/12 top-40">
        <div className=" flex h-10 border-b-2  border-black">
          <div className="w-9">
            <div className="w-full ">
              <div className=" h-1 "></div>
              <div className=" h-1 border-2 m-0.5 border-black"></div>
              <div className=" h-1 border-2 m-0.5 border-black"></div>
              <div className=" h-1 border-2 m-0.5 border-black"></div>
              <div className=" h-1 border-2 m-0.5 border-black"></div>
              <div className=" h-1 border-2 m-0.5 border-black"></div>
            </div>
          </div>
          <div onClick={() => setIsHddVisible(false)}>
            <img className="mt-1 h-8" src={cross} alt="cross" />
          </div>
          <div className="w-full ">
            <div className="  h-1 "></div>
            <div className=" h-1 border-2 m-0.5 border-black"></div>
            <div className=" h-1 border-2 m-0.5 border-black"></div>
            <div className=" h-1 border-2 m-0.5 border-black"></div>
            <div className=" h-1 border-2 m-0.5 border-black"></div>
            <div className=" h-1 border-2 m-0.5 border-black"></div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate={'visible'}
          variants={textAnimation}
          className="mb-28"
        >
          <div className="p-6 overflow-hidden max-h-auto flex flex-wrap justify-around gap-7">
            <div
              className=" text-center"
              onClick={() => setIsContactVisible(true)}
            >
              <img className="h-16" src={contact} alt="contact" />
              Contact
            </div>
            <div className="flex flex-col CV">
              <CVDownloadButton />
            </div>
            <div>
              <img
                className="h-14"
                onClick={() => setIsSansTitreVisible(true)}
                src={folder}
                alt="photo"
              />
              sans titre
            </div>
            <div onClick={() => setIsMyMusicVisible(true)}>
              <img className="h-14" src={folderMusic} alt="photo" />
              MyMusic
            </div>
            <div className="mt-2" onClick={() => setIsFormulaireVisible(true)}>
              <img className="h-12" src={email} alt="photo" />
              <p className="text-center">Email</p>
            </div>
            <div className="mt-2" onClick={() => setIsSnakeVisible(true)}>
              <img className="h-12" src={snake} alt="photo" />
              <p className="text-center">snake.exe</p>
            </div>
          </div>
        </motion.div>
      </div>
      {isContactVisible && (
        <Contact setIsContactVisible={setIsContactVisible} />
      )}
      {isFormulaireVisible && (
        <Formulaire setIsFormulaireVisible={setIsFormulaireVisible} />
      )}
      {isSansTitreVisible && (
        <SansTitre setIsSansTitreVisible={setIsSansTitreVisible} />
      )}{' '}
      {isMyMusicVisible && (
        <MyMusic setIsMyMusicVisible={setIsMyMusicVisible} />
      )}
      {isSnakeVisible && <SnakeGame setIsSnakeVisible={setIsSnakeVisible} />}
    </div>
  );
};

export default Hdd;
