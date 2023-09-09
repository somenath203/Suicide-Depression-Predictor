const Spinner = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-20">
          <i className="fa-solid fa-circle-notch animate-spin text-8xl text-violet-500"></i>
      </div>
    )
  };
  
  export default Spinner;