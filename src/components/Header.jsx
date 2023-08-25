import Image from 'next/image'
import React from 'react'
import {BsSearchHeart} from "react-icons/bs"

export default function Header() {
    return (
        <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
            {/* Header */}
            {/* left */}
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                <Image
                    src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
                    layout="fill"
                    className="object-contain"
                    alt='Instagram'
                />
            </div>
            <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
                    layout="fill"
                    className="object-contain"
                    alt='Insta'
                />
            </div>

            {/* middle */}
            <div className='relative mt-2'>
                <div className='absolute mx-auto items-center right-6'>
                <BsSearchHeart className='h-10'/>
                </div>
                <input type="text" className='bg-[#1b1b1b] focus:ring-white focus:border-white pl-10 rounded-md' placeholder='Search'/>
            </div>

            {/* right */}
            <div className='flex space-x-4 items-center'>
                Right

            </div>


        </div>

    )
}
