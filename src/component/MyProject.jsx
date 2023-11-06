import backRoads from '../asset/png/backRoads.png';
import epicerie from '../asset/png/epicerie.png';
import screenRetro from '../asset/png/screenRetro.png';
import cross from '../asset/svg/cross.svg';

// eslint-disable-next-line react/prop-types
const MyProject = ({ setIsMyProjectVisible }) => {
  return (
    <div className=" border-4 overflow-hidden border-black bg-white h-4/6 absolute left-0 right-0 mx-auto  w-10/12 top-40">
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
        <div onClick={() => setIsMyProjectVisible(false)}>
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
      <div>
        <div
          className="p-6 overflow-hidden max-h-auto"
          style={{ overflowY: 'scroll ', maxHeight: '550px' }}
        >
          <div className="">
            <a
              className="cursor "
              href="https://back-roadbio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center flex-col ">
                <h1 className="text-center chicago underline  pt-3">
                  BackRoads
                </h1>

                <img
                  className="mt-3 border-[1px] border-black"
                  src={backRoads}
                  alt="image"
                />

                <p className="mt-3">
                  Durant ma formation, j'ai eu l'opportunité de mettre en œuvre
                  mes compétences en développement web en réalisant un site
                  vitrine.
                </p>
              </div>
            </a>
          </div>
          <div className="border-[1px] border-black m-3"></div>
          <div className="">
            <a
              className="cursor "
              href="https://grocerybudv1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center flex-col ">
                <h1 className="text-center chicago underline  pt-3">
                  Liste de course
                </h1>

                <img
                  className="mt-3 border-[1px] border-black"
                  src={epicerie}
                  alt="image"
                />

                <p className="mt-3">
                  J'ai eu l'opportunité de mettre en pratique mes compétences en
                  développement web lors de ma formation, au cours de laquelle
                  j'ai conçu et développé une application web complète que j'ai
                  baptisée 'Épicerie'.
                </p>
              </div>
            </a>
          </div>{' '}
          <div className="border-[1px] border-black m-3"></div>
          <div className="">
            <a
              className="cursor "
              href="https://retro-catcher.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center flex-col ">
                <h1 className="text-center chicago underline  pt-3">
                  Retro Catcher
                </h1>

                <img
                  className="mt-3 border-[1px] border-black"
                  src={screenRetro}
                  alt="image"
                />

                <p className="mt-3">
                  Mon projet de fin d'études est une application web de gestion
                  de collections qui adhère rigoureusement aux normes et bonnes
                  pratiques du développement web. L'application offre un
                  ensemble complet de fonctionnalités C.R.U.D. (Création,
                  Lecture, Mise à jour et Suppression) pour une gestion efficace
                  des collections.
                </p>
              </div>
            </a>
          </div>{' '}
          <div className="border-[1px] border-black m-3"></div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
