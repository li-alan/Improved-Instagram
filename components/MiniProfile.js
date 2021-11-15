function MiniProfile() {
    return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            <img className='w-16 h-16rounded-full border p-[2px]'
            src='https://avatars.githubusercontent.com/u/13840191?v=4' 
            alt=''/>

            <div clasName='flex-1 mx-4'>
                <h2 className='font-bold'>Nala</h2>
                <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
            </div>

            <button className='text-blue-400 text-sm font-semibold'>Sign Out</button>
        </div>
    )
}

export default MiniProfile
