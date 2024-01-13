export default function Placeholder() {
  return (
    <div className='bg-white shadow rounded-lg'>
      {/* BANNER */}
      <div className='bg-[#262626] border-b rounded-t-md w-full min-h-[60px]' />
      {/* USERS */}
      <div className='flex items-center py-3 px-4 border-b'>
        {/* AVATAR */}
        <div className='group flex-none mr-1.5 rounded-full bg-gray-100 overflow-hidden relative w-[4.3rem] h-[4.3rem]'></div>
        <div className='flex flex-col'>
          {/* USERNAME AND DISCRIMINATOR */}
          <div className='flex flex-col'>
            <div className='h-4 w-[200px] bg-gray-100 rounded inline-block w-[fit-content] text-xl font-semibold px-1.5 ml-1' />
          </div>
          {/* BADGES */}
          <div className='flex items-center mx-2 mt-[1px] select-none'>
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <div key={i} className='flex justify-center items-center p-[4px] mx-[2px]'>
                  <div className='w-6 h-6 bg-gray-100 rounded' />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
