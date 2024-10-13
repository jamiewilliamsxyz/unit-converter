'use client';

import { useState } from 'react';
import Nav from '../components/Nav';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Volume() {
  const [unitOne, setUnitOne] = useState('liters');
  const [unitTwo, setUnitTwo] = useState('liters');
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
      liters: { ml: 1000, gal: 0.264172, qt: 1.05669, pt: 2.11338, fl_oz: 33.814 },
      ml: { liters: 0.001, gal: 0.000264172, qt: 0.00105669, pt: 0.00211338, fl_oz: 0.033814 },
      gal: { liters: 3.78541, ml: 3785.41, qt: 4, pt: 8, fl_oz: 128 },
      qt: { liters: 0.946353, ml: 946.353, gal: 0.25, pt: 2, fl_oz: 32 },
      pt: { liters: 0.473176, ml: 473.176, gal: 0.125, qt: 0.5, fl_oz: 16 },
      fl_oz: { liters: 0.0295735, ml: 29.5735, gal: 0.0078125, qt: 0.03125, pt: 0.0625 },
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
        <h1 className='text-center text-6xl m-10 font-semibold text-gray-800'>Volume Unit Converter</h1>

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
              <option value='liters'>Liters (L)</option>
              <option value='ml'>Milliliters (mL)</option>
              <option value='gal'>Gallons (gal)</option>
              <option value='qt'>Quarts (qt)</option>
              <option value='pt'>Pints (pt)</option>
              <option value='fl_oz'>Fluid Ounces (fl oz)</option>
            </select>

            <FontAwesomeIcon icon={faArrowRight} size='2xl' className='ml-3 mr-3 text-gray-800' />

            <select onChange={handleUnitTwo}>
              <option value='liters'>Liters (L)</option>
              <option value='ml'>Milliliters (mL)</option>
              <option value='gal'>Gallons (gal)</option>
              <option value='qt'>Quarts (qt)</option>
              <option value='pt'>Pints (pt)</option>
              <option value='fl_oz'>Fluid Ounces (fl oz)</option>
            </select>
          </div>

          <div className='text-xl'>{output}</div>

          <Button onClick={calculate} />
        </form>
      </div>
    </div>
  );
}
