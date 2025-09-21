

const Welcome = () => {

  return (
<div className="flex justify-center items-center min-h-screen bg-neutral-ultra-light px-4">
  <div className="card w-full max-w-md shadow-2xl bg-neutral-ultra-light rounded-2xl overflow-hidden">
    
    <div className="bg-primary-light p-6 flex flex-col items-center text-center space-y-2 rounded-t-2xl">
      <h2 className="text-2xl font-bold text-white">Welcome Back!</h2>
      <p className="text-sm text-white">You have logged in successfully.</p>
      <p className="text-sm text-white">⚠️ App is under construction</p>
    </div>

    <div className="p-6 flex flex-col items-center space-y-4">
      <p className="text-neutral-dark text-center">
        Hang tight while we connect you with the analytics auditor.
      </p>
    </div>
    
  </div>
</div>


  );
};

export default Welcome;
