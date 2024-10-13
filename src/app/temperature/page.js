'use client';

import { useState } from 'react';
import Nav from '../components/Nav';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Temperature() {
  const [unitOne, setUnitOne] = useState('C');
  const [unitTwo, setUnitTwo] = useState('C');

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const conversions = {
    C: {
      F: (input) => (input * 9) / 5 + 32,
      K: (input) => input + 273.15,
    },
    F: {
      C: (input) => ((input - 32) * 5) / 9,
      K: (input) => ((input - 32) * 5) / 9 + 273.15,
    },
    K: {
      C: (input) => input - 273.15,
      F: (input) => ((input - 273.15) * 9) / 5 + 32,
    },
  };

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

    let sum;

    if (conversions[unitOne][unitTwo]) {
      sum = conversions[unitOne][unitTwo](Number(input));
    } else {
      sum = Number(input);
    }

    setOutput(sum);
  }

  return (
    <div className='flex justify-center align-middle flex-col'>
      <Nav />
      <div className='flex flex-col justify-center items-center align-middle h-lvh'>
        <h1 className='text-center text-6xl m-10 font-semibold text-gray-800'>Temperature Unit Converter</h1>

        <form className='flex flex-col justify-evenly items-center gap-10 m-8 mt-16'>
          <div className='flex flex-row gap-8 shadow-md border-2 rounded-lg border-gray-800 p-8'>
            <input type='number' value={input} onChange={handleInput} className='border rounded-lg border-gray-900 py-1 text-center w-28 no-spinner' />
            <select onChange={handleUnitOne}>
              <option value='C'>Celsius (°C)</option>
              <option value='F'>Fahrenheit (°F)</option>
              <option value='K'>Kelvin (K)</option>
            </select>

            <FontAwesomeIcon icon={faArrowRight} size="2xl" className='ml-3 mr-3 text-gray-800' />

            <select onChange={handleUnitTwo}>
              <option value='C'>Celsius (°C)</option>
              <option value='F'>Fahrenheit (°F)</option>
              <option value='K'>Kelvin (K)</option>
            </select>
          </div>

          <div className='text-xl'>{output}</div>

          <Button onClick={calculate} />
        </form>
      </div>
    </div>
  );
}
