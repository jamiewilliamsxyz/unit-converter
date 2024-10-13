'use client';

import { useState } from 'react';
import Nav from '../components/Nav';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Weight() {
  const [unitOne, setUnitOne] = useState('kg');
  const [unitTwo, setUnitTwo] = useState('kg');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  function handleUnitOne(e) {
    setUnitOne(e.target.value);
  }

  function handleUnitTwo(e) {
    setUnitTwo(e.target.value);
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  function calculate(e) {
    e.preventDefault();

    if (!input) {
      setOutput('Please enter a valid number');
      return;
    }

    const conversions = {
      kg: { g: 1000, lbs: 2.20462, oz: 35.274, st: 0.157473, mg: 1e6 },
      g: { kg: 0.001, lbs: 0.00220462, oz: 0.035274, st: 0.000157473, mg: 1000 },
      lbs: { kg: 0.453592, g: 453.592, oz: 16, st: 0.0714286, mg: 453592 },
      oz: { kg: 0.0283495, g: 28.3495, lbs: 0.0625, st: 0.00446429, mg: 28349.5 },
      st: { kg: 6.35029, g: 6350.29, lbs: 14, oz: 224, mg: 6.35029e6 },
      mg: { kg: 1e-6, g: 0.001, lbs: 2.2046e-6, oz: 3.5274e-5, st: 1.5747e-7 },
    };

    let sum;

    if (unitOne === unitTwo) {
      sum = Number(input);
    } else if (conversions[unitOne] && conversions[unitOne][unitTwo]) {
      sum = Number(input) * conversions[unitOne][unitTwo];
    } else {
      console.log('Error, could not convert units');
      sum = 'error';
    }

    setOutput(sum);
  }

  return (
    <div className='flex justify-center align-middle flex-col'>
      <Nav />
      <div className='flex flex-col justify-center items-center align-middle h-lvh'>
        <h1 className='text-center text-6xl m-10 font-semibold text-gray-800'>Weight Unit Converter</h1>

        <form className='flex flex-col justify-evenly items-center gap-10 m-8 mt-16'>
          <div className='flex flex-row gap-8 shadow-md border-2 rounded-lg border-gray-800 p-8'>
            <input
              type='number'
              min='1'
              value={input}
              onChange={handleInput}
              className='border rounded-lg border-gray-900 py-1 text-center w-28 no-spinner'
            />
            <select onChange={handleUnitOne}>
              <option value='kg'>Kilograms (kg)</option>
              <option value='g'>Grams (g)</option>
              <option value='lbs'>Pounds (lbs)</option>
              <option value='oz'>Ounces (oz)</option>
              <option value='st'>Stones (st)</option>
              <option value='mg'>Milligrams (mg)</option>
            </select>

            <FontAwesomeIcon icon={faArrowRight} size='2xl' className='ml-3 mr-3 text-gray-800' />

            <select onChange={handleUnitTwo}>
              <option value='kg'>Kilograms (kg)</option>
              <option value='g'>Grams (g)</option>
              <option value='lbs'>Pounds (lbs)</option>
              <option value='oz'>Ounces (oz)</option>
              <option value='st'>Stones (st)</option>
              <option value='mg'>Milligrams (mg)</option>
            </select>
          </div>

          <div className='text-xl'>{output}</div>

          <Button onClick={calculate} />
        </form>
      </div>
    </div>
  );
}
