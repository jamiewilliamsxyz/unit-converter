'use client';

import { useState } from 'react';
import Nav from '../components/Nav';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Time() {
  const [unitOne, setUnitOne] = useState('s');
  const [unitTwo, setUnitTwo] = useState('s');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const conversions = {
    s: {
      min: (input) => input / 60,
      h: (input) => input / 3600,
      d: (input) => input / 86400,
      w: (input) => input / 604800,
      m: (input) => input / 2629746,
      y: (input) => input / 31557600,
    },
    min: {
      s: (input) => input * 60,
      h: (input) => input / 60,
      d: (input) => input / 1440,
      w: (input) => input / 10080,
      m: (input) => input / 43200,
      y: (input) => input / 525600,
    },
    h: {
      s: (input) => input * 3600,
      min: (input) => input * 60,
      d: (input) => input / 24,
      w: (input) => input / 168,
      m: (input) => input / 730,
      y: (input) => input / 8760,
    },
    d: {
      s: (input) => input * 86400,
      min: (input) => input * 1440,
      h: (input) => input * 24,
      w: (input) => input / 7,
      m: (input) => input / 30.44,
      y: (input) => input / 365.25,
    },
    w: {
      s: (input) => input * 604800,
      min: (input) => input * 10080,
      h: (input) => input * 168,
      d: (input) => input * 7,
      m: (input) => input / 4.34524,
      y: (input) => input / 52.1775,
    },
    m: {
      s: (input) => input * 2629746,
      min: (input) => input * 43200,
      h: (input) => input * 730,
      d: (input) => input * 30.44,
      w: (input) => input * 4.34524,
      y: (input) => input / 12,
    },
    y: {
      s: (input) => input * 31557600,
      min: (input) => input * 525600,
      h: (input) => input * 8760,
      d: (input) => input * 365.25,
      w: (input) => input * 52.1775,
      m: (input) => input * 12,
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
        <h1 className='text-center text-6xl m-10 font-semibold text-gray-800'>Time Unit Converter</h1>

        <form className='flex flex-col justify-evenly items-center gap-10 m-8 mt-16'>
          <div className='flex flex-row gap-8 shadow-md border-2 rounded-lg border-gray-800 p-8'>
            <input type='number' value={input} onChange={handleInput} className='border rounded-lg border-gray-900 py-1 text-center w-28 no-spinner' />
            <select onChange={handleUnitOne}>
              <option value='s'>Seconds (s)</option>
              <option value='min'>Minutes (min)</option>
              <option value='h'>Hours (h)</option>
              <option value='d'>Days (d)</option>
              <option value='w'>Weeks (w)</option>
              <option value='m'>Months (m)</option>
              <option value='y'>Years (y)</option>
            </select>

            <FontAwesomeIcon icon={faArrowRight} size="2xl" className='ml-3 mr-3 text-gray-800' />

            <select onChange={handleUnitTwo}>
              <option value='s'>Seconds (s)</option>
              <option value='min'>Minutes (min)</option>
              <option value='h'>Hours (h)</option>
              <option value='d'>Days (d)</option>
              <option value='w'>Weeks (w)</option>
              <option value='m'>Months (m)</option>
              <option value='y'>Years (y)</option>
            </select>
          </div>

          <div className='text-xl'>{output}</div>

          <Button onClick={calculate} />
        </form>
      </div>
    </div>
  );
}
