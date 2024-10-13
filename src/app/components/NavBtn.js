'use client';

import Link from 'next/link';

const navBtn = ({text, link }) => {
  return (
    <Link href={link}>
      <button className='bg-white text-gray-800 rounded-3xl text-center p-1 w-28 font-semibold'>
        {text}
      </button>
    </Link>
  );
};

export default navBtn;