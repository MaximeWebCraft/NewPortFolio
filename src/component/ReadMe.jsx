import { useState } from 'react';
import photo from '../asset/png/photo.jpg';
import cross from '../asset/svg/cross.svg';
import { motion } from 'framer-motion';

const ReadMe = ({ setIsReadMeVisible }) => {
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
        <div onClick={() => setIsReadMeVisible(false)}>
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
        className=" h-fit overflow-hidden  "
      >
        <div
          className="p-6 h-full overflow-hidden "
          style={{ overflowY: 'scroll ', maxHeight: '550px' }}
        >
          <img className="h-44 rounded-lg mx-auto " src={photo} alt="photo" />
          <p className="mt-3">
            {' '}
            Je suis ravi de partager avec vous ma passion et mon désir de
            poursuivre une carrière dans le domaine du développement
            d'applications web et mobile.
          </p>
          <p className="mt-3">
            Après m'être engagé dans une reconversion professionnelle, je suis
            déterminé à acquérir une expérience pratique et à approfondir mes
            compétences dans ce secteur en constante évolution.
          </p>
          <p className="mt-3">
            🌟 Ce qui m'anime : la recherche de nouvelle technologie , de
            comprendre le fonctionnement a chaque étape du développement.
          </p>

          <p className="mt-3">
            💼 Actuellement à la recherche d'une alternance : Je suis ouvert à
            des opportunités passionnantes au sein d'entreprises innovantes et
            axées sur le développement d'applications web et mobile.
          </p>
          <p className="mt-3">
            Si vous connaissez des entreprises ou des professionnels qui
            recherchent un stagiaire dévoué pour rejoindre leur équipe, je
            serais ravi de discuter des possibilités.
          </p>
          <p className="mt-3">
            📚 Mon bagage : diplôme de développeur d'application web et web
            mobile
          </p>
          <p className="mt-3">
            📞 N'hésitez pas à me contacter : Si vous avez des informations, des
            conseils ou des opportunités à partager, je serais ravi de discuter
            avec vous. Vous pouvez me contacter directement via LinkedIn ou par
            e-mail à maxime.marie@gmx.com.
          </p>
          <p className="mt-3">
            Merci à tous pour votre soutien et pour faire partie de mon réseau.
            Ensemble, nous pouvons réaliser de grandes choses dans le monde du
            développement d'applications web et mobile !
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ReadMe;
