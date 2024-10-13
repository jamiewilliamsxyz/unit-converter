'use client';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} type='submit' value='submit' className='border rounded-lg bg-slate-800 font-semibold text-white p-2 shadow-md'>Calculate</button>
  );
};

export default Button;