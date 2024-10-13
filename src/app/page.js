'use client';

import { useState } from 'react';
import Nav from './components/Nav';
import Button from './components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [unitOne, setUnitOne] = useState('mm');
  const [unitTwo, setUnitTwo] = useState('mm');
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

    let sum;
    const numberInput = Number(input);

    // Conversion logic
    const conversions = {
      mm: { mm: 1, cm: 0.1, m: 0.001, km: 0.000001, in: 0.03937, ft: 0.003281, yd: 0.001094, mi: 0.0000006214 },
      cm: { mm: 10, cm: 1, m: 0.01, km: 0.00001, in: 0.3937, ft: 0.03281, yd: 0.01094, mi: 0.000006214 },
      m: { mm: 1000, cm: 100, m: 1, km: 0.001, in: 39.37, ft: 3.281, yd: 1.094, mi: 0.0006214 },
      km: { mm: 1000000, cm: 100000, m: 1000, km: 1, in: 39370, ft: 3281, yd: 1094, mi: 0.6214 },
      in: { mm: 25.4, cm: 2.54, m: 0.0254, km: 0.0000254, in: 1, ft: 0.08333, yd: 0.02778, mi: 0.00001578 },
      ft: { mm: 304.8, cm: 30.48, m: 0.3048, km: 0.0003048, in: 12, ft: 1, yd: 0.3333, mi: 0.0001894 },
      yd: { mm: 914.4, cm: 91.44, m: 0.9144, km: 0.0009144, in: 36, ft: 3, yd: 1, mi: 0.0005682 },
      mi: { mm: 1609344, cm: 160934.4, m: 1609.344, km: 1.609, in: 63360, ft: 5280, yd: 1760, mi: 1 }
    };

    if (conversions[unitOne] && conversions[unitTwo]) {
      sum = numberInput * conversions[unitOne][unitTwo];
    } else {
      console.log('Error, could not convert units');
      sum = 'Error';
    }

    setOutput(sum);
  }

  return (
    <div className='flex justify-center align-middle flex-col'>
      <Nav />
      <div className='flex flex-col justify-center items-center align-middle h-lvh'>
        <h1 className='text-center text-6xl m-10 font-semibold text-gray-800'>Length Unit Converter</h1>

        <form className='flex flex-col justify-evenly items-center gap-10 m-8 mt-16'>
          <div className='flex flex-row gap-8 shadow-md border-2 rounded-lg border-gray-800 p-8'>
            <input
              type='number'
              min='1'
              max='30'
              value={input}
              onChange={handleInput}
              className='border rounded-lg border-gray-900 py-1 text-center w-28 no-spinner'
            />
            <select onChange={handleUnitOne}>
              <option value='mm'>Millimeter (mm)</option>
              <option value='cm'>Centimeter (cm)</option>
              <option value='m'>Meter (m)</option>
              <option value='km'>Kilometer (km)</option>
              <option value='in'>Inch (in)</option>
              <option value='ft'>Foot (ft)</option>
              <option value='yd'>Yard (yd)</option>
              <option value='mi'>Mile (mi)</option>
            </select>

            <FontAwesomeIcon icon={faArrowRight} size='2xl' className='ml-3 mr-3 text-gray-800' />

            <select onChange={handleUnitTwo}>
              <option value='mm'>Millimeter (mm)</option>
              <option value='cm'>Centimeter (cm)</option>
              <option value='m'>Meter (m)</option>
              <option value='km'>Kilometer (km)</option>
              <option value='in'>Inch (in)</option>
              <option value='ft'>Foot (ft)</option>
              <option value='yd'>Yard (yd)</option>
              <option value='mi'>Mile (mi)</option>
            </select>
          </div>

          <div className='text-xl'>{output}</div>

          <Button onClick={calculate} />
        </form>
      </div>
    </div>
  );
}
