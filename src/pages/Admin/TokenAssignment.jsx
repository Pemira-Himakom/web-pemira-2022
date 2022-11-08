function TokenAssignment() {
  
  const handleAssign = e => {
    e.preventDefault();
  };

  return (
    <div className='h-[95vh] flex items-center font-prata bg-whiteWeak'>
      <form className='border-[15px] bg-[#E6E6E6] flex flex-col border-choco-weak outline outline-4 outline-choco min-w-[40vw] w-fit min-h-[60vh] py-20 px-8 mx-auto'>
        <h3 className='flex justify-center items-center '>
          <span className='text-choco text-4xl'>Assign Token</span>
        </h3>
        <div className='mt-16 xl:mt-28'>
          <input
            placeholder='NIM'
            type='text'
            className='w-full text-xl placeholder-choco placeholder-opacity-100 placeholder:text-xl outline-none bg-transparent border-b-4 border-choco'
          />
        </div>
        <div className='mt-12 xl:mt-16'>
          <input
            type='text'
            placeholder='Token'
            className='w-full text-xl placeholder-choco placeholder-opacity-100 placeholder:text-xl outline-none bg-transparent border-b-4 border-choco'
          />
        </div>
        <div className='mt-14 xl:mt-20 relative flex justify-end'>
          <button
            type='submit'
            onClick={handleAssign}
            className='bg-choco text-whiteWeak px-10 py-2'
          >
            Assign
          </button>
        </div>
      </form>
    </div>
  );
}

export default TokenAssignment;
