import photo from '../asset/png/photo.jpg';
import backRoads from '../asset/png/backRoads.png';
import epicerie from '../asset/png/epicerie.png';
import screenRetro from '../asset/png/screenRetro.png';
import cross from '../asset/svg/cross.svg';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const SansTitre = ({ setIsSansTitreVisible }) => {
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
    <div className=" border-4  border-black bg-white h-4/6 absolute left-0 right-10 mx-auto  w-10/12 top-52">
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
        <div onClick={() => setIsSansTitreVisible(false)}>
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
        <div>
          <div className="p-6 overflow-hidden max-h-auto flex flex-wrap gap-7">
            <div>
              <img className="h-20" src={photo} alt="photo" />
              <p>img.png</p>
            </div>
            <div>
              <img className="h-20" src={backRoads} alt="photo" />
              <p>backRoads.png</p>
            </div>
            <div>
              <img className="h-20" src={epicerie} alt="photo" />
              <p>épicerie.png</p>
            </div>
            <div>
              <img className="h-20" src={screenRetro} alt="photo" />
              <p>screen.png</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SansTitre;
