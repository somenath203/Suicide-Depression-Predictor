import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { toast } from 'react-toastify';
import axios from 'axios';

import Spinner from './../components/Spinner';


const Swal = require('sweetalert2');


const FormPage = () => {

  const { transcript, resetTranscript } = useSpeechRecognition();

  const [onListening, setOnListening] = useState();

  const [onStopListening, setOnStopListening] = useState();

  const [loading, setLoading] = useState();



  const onSpeakhandler = () => {

    SpeechRecognition.startListening({ continuous: true });

    setOnListening(true);

    setOnStopListening(false);

    toast.success('started listening to your voice', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  };


  const onStopHandler = () => {

    SpeechRecognition.stopListening();

    setOnListening(false);

    setOnStopListening(true);

    toast.success('stopped listening successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  }


  const onSubmitForm = async (e) => {

    e.preventDefault();

    if (!transcript) {

      toast.error('cannot submit an empty input field', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    } else {

      try {

        toast.success('form submitted successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setLoading(true);

        const { data } = await axios.post(process.env.REACT_APP_BACKEND_FAST_API_URL, {
          inputText: transcript
        });

        setLoading(false);


        if (data.pred_value === 1) {

          Swal.fire({
            title: '<h2>Suicidal/Depression Thought</h2>',
            icon: 'info',
            html: 'Depression can make everything seem overwhelming and hopeless, but please understand that there is hope, even in the darkest moments. You are stronger than you realize, and this pain you are experiencing doesn\'t define you. It\'s just one part of your life, and it can get better. I urge you to reach out to a mental health professional who can provide you with the guidance, support, and tools you need to navigate through this difficult period. They are trained to help people like us find a path to recovery and rediscover the beauty in life. Remember, you are not alone in this. I\'ll be here to support you every step of the way. Lean on friends and family who care about you. Seek professional help, because there is no shame in asking for assistance when you\'re going through such a tough time.'
          })

        } else if (data.pred_value === 0) {

          Swal.fire({
            title: '<h2>No Suicidal/Depression Thought</h2>',
            icon: 'success',
            html: 'Crongragulations, you are not suffering from any kind of suicidal or depression thoughts.'
          })

        }

      } catch (error) {

        setLoading(false);

        Swal.fire({
          title: '<h2>Server Error</h2>',
          icon: 'error',
          html: 'Crongragulations, you are not suffering from any kind of suicidal or depression thoughts.'
        })

      };

    }

    resetTranscript();

    setOnListening();

    setOnStopListening();

  }


  return (
    <>

      {loading && <Spinner />}

      <div className='min-h-screen mb-28 flex items-center flex-col'>

        <div className="mt-20 flex flex-col">

          <button disabled={onListening} className='text-9xl text-violet-600 p-10 rounded-full bg-violet-100 hover:bg-violet-200 animate duration-200 cursor-pointer disabled:text-violet-300 disabled:cursor-not-allowed'>
            <i className="fa-solid fa-microphone" onClick={onSpeakhandler}></i>
          </button>

          <button className='mt-5 py-3 px-4 bg-violet-600 text-white text-xl font-poppins tracking-wide rounded-xl disabled:bg-violet-400 disabled:cursor-not-allowed' disabled={!onListening} onClick={onStopHandler}>Stop</button>

        </div>

        {transcript && <>
          <p className="font-poppins px-3 lg:px-0 text-sm lg:text-lg tracking-wide text-center text-violet-700 mt-8">
            {onListening ? <span className='flex items-center justify-center'> Listening <i className="fa-solid fa-spinner animate-spin text-2xl ml-2"></i> </span> : onStopListening ? <span className='flex items-center justify-center'> Listening Stopped <i className="fa-regular fa-circle-stop text-2xl ml-2"></i></span> : 'Speak by clicking the mic below in order to predict whether you have suicidal and depression thoughts or not'}
          </p>
        </>}

        {!transcript && <>
          <p className="font-poppins px-3 lg:px-0 text-sm lg:text-lg tracking-wide text-center text-violet-700 mt-8">
            Speak by clicking the mic above in order to predict whether you have suicidal and depression thoughts or not
          </p>
        </>}

        <form className='w-10/12 lg:w-9/12 h-72 mt-11' onSubmit={onSubmitForm}>

          <textarea readOnly className='w-full h-full bg-transparent border-4 border-violet-700 rounded-lg p-4' placeholder='whatever you speak will be displayed over here' value={transcript} required></textarea>

          <div className='mt-4 flex items-center justify-center gap-4'>
            <button className='py-3 px-6 bg-violet-600 text-white text-lg font-poppins tracking-wide rounded-xl disabled:bg-violet-300 disabled:cursor-not-allowed' type='submit' disabled={onListening}>Submit</button>
            <button className='py-3 px-6 bg-violet-600 text-white text-lg font-poppins tracking-wide rounded-xl disabled:bg-violet-300 disabled:cursor-not-allowed' onClick={resetTranscript} disabled={onListening} type='button'>Reset</button>
          </div>

        </form>

      </div>
    </>
  )
}

export default FormPage;