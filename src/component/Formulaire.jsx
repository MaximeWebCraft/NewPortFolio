import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import cross from '../asset/svg/cross.svg';

export const Formulaire = ({ setIsFormulaireVisible }) => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xrjxxxv',
        'template_wb0zoaj',
        form.current,
        'xQkRFnU38jMwwEOAe'
      )
      .then(
        (result) => {
          console.log(result.text);
          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
          setEmailSent(false);
        }
      );

    console.log(form.current);
  };

  return (
    <div>
      <div className="border-4 overflow-hidden border-black bg-white h-4/6 absolute left-0 right-10 mx-auto w-10/12 top-52">
        <div className="flex h-10 border-b-2 border-black">
          <div className="w-9">
            <div className="w-full">
              <div className="h-1"></div>
              <div className="h-1 border-2 m-0.5 border-black"></div>
              <div className="h-1 border-2 m-0.5 border-black"></div>
              <div className="h-1 border-2 m-0.5 border-black"></div>
              <div className="h-1 border-2 m-0.5 border-black"></div>
              <div className="h-1 border-2 m-0.5 border-black"></div>
            </div>
          </div>
          <div onClick={() => setIsFormulaireVisible(false)}>
            <img className="mt-1 h-8" src={cross} alt="cross" />
          </div>
          <div className="w-full">
            <div className="h-1"></div>
            <div className="h-1 border-2 m-0.5 border-black"></div>
            <div className="h-1 border-2 m-0.5 border-black"></div>
            <div className="h-1 border-2 m-0.5 border-black"></div>
            <div className="h-1 border-2 m-0.5 border-black"></div>
            <div className="h-1 border-2 m-0.5 border-black"></div>
          </div>
        </div>
        <div>
          <div
            className="p-6 overflow-hidden max-h-auto"
            style={{ maxHeight: '550px' }}
          >
            <div className="border border-black" id="contact">
              {emailSent ? (
                <p className="text-green-600 text-center p-3">
                  E-mail envoyé avec succès !
                </p>
              ) : (
                <form ref={form} onSubmit={sendEmail}>
                  <div className="my-4 p-3">
                    <p className="text-center">Envoyé moi un email</p>
                    <label htmlFor="user_name">Nom</label>
                    <input
                      className="border border-black w-full py-2 px-3 rounded"
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="my-4 p-3">
                    <label htmlFor="user_email">Email</label>
                    <input
                      className="border border-black w-full py-2 px-3 rounded"
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="my-4 p-3">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="border border-black w-full py-2 px-3 rounded"
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-center p-3">
                    <button
                      className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
