import cross from '../asset/svg/cross.svg';
import backRoads from '../asset/png/backRoads.png';
import epicerie from '../asset/png/epicerie.png';
import screenRetro from '../asset/png/screenRetro.png';
import { motion } from 'framer-motion';
import photo from '../asset/png/photo.jpg';

const Img = () => {
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
          <div className="border-black border-2 m-0.5 w-9 h-7 mt-1.5">
            <img className="p-1" src={cross} alt="cross" />
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
          <div
            className="p-6 overflow-hidden max-h-auto flex justify-around"
            style={{ overflow: 'scroll ', maxHeight: '550px' }}
          >
            <div>
              <img className="h-16" src={backRoads} alt="photo" />
              backRoads.jpg
            </div>
            <div>
              <img className="h-16" src={screenRetro} alt="photo" />
              screenRetro.jpg
            </div>

            <div>
              <img className="h-16" src={epicerie} alt="photo" />
              epicerie.jpg
            </div>
            <div>
              <img className="h-16" src={photo} alt="photo" />
              photo.jpg
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Img;
