import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Animate = () => {
  const [number, setNumber] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (number === 500) {
      navigate('/home');
    }
  }, [number, navigate]);

  return (
    <section className="p-24  pixel bg-black h-screen text-slate-400 flex flex-col justify-between items-center">
      <div className="text-slate-400 mr-4  flex">
        <div className="w-24">
          <span className="animate-pulse "> _</span>
          {number}
        </div>
        <p className="animate-noise">bytes</p>
      </div>
      <div className="my-auto">
        <p className="mt-auto mb-auto pixel text-center ">
          loading <span className="animate-loading">.</span>
          <span className="animate-loading2">.</span>
          <span className="animate-loading3">.</span>
        </p>
      </div>
    </section>
  );
};
export default Animate;
