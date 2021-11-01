import Image from 'next/image';
import {
    searchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    SearchIcon,
} from "@heroicons/react/outline";

import{ HomeIcon} from "@heroicons/react/solid";

function Header() {
    return (
        <div>
            <div className="flex justify-between max-w-6xl mx-5 l:mx-auto">
                {/*left*/}
                <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image 
                        src='https://links.papareact.com/ocw' 
                        layout = 'fill'
                        objectFit='contain'
                    />
                </div>

                <div className="relative lg:hidden w-10 flex-shrink-0">
                    <Image 
                        src='https://links.papareact.com/jjm' 
                        layout = 'fill'
                        objectFit='contain'
                    />
                </div>


                {/*middle*/}
                <div className='max-w-xs'>
                    <div className='relative mt-1 p-3 rounded-md '>
                        <div className='absolute inset-y-0 pl-3 flex items-center
                        pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input  
                            className='bg-gray-50 block w-full pl-10 sm:text-small 
                            border-gray-300 focus:ring-black focus:border-black
                            rounded-md'
                            type="text" 
                            placeholder="Search"/>

                    </div>
                </div>


                {/*right*/}
                <div className='flex items-center justify-end space-x-4'>
                <HomeIcon className='h-10 w-10' />
                <MenuIcon className='h-6 w-10 md:hidden cursor-pointer'/>
                </div>
                
            </div>
        </div>
    )
}

export default Header