import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <section className="pixel bg-black h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-neutral-400 dark:bg-slate-900 dark:border-neutral-400 active:translate-x-0 active:translate-y-0 border-slate-900 border-2 duration-200 px-2 py-1 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5">
          <div className="dark:text-neutral-400 mr-2 flex items-center justify-center ">
            <h4 className="dark:text-neutral-400 duration-200  ">
              <button className="">
                <Link className="" to="/Loader">
                  Explorer
                </Link>
              </button>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Start;
