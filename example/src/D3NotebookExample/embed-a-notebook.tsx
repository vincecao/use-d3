import * as React from 'react';
import type { ReactElement } from 'react';
import { useState , useEffect} from 'react';
import notebook from '@observablehq/how-to-embed-a-notebook-in-a-react-app';

import { moduleRedefine, useD3Notebook } from '../../..';

const INSPECTOR_NAME = 'animation';
const MUTABLE_SPEED_NAME = 'mutable speed';

export default function Embed(): ReactElement {
  const [speed, setSpeed] = useState<number | null>(null);

  const { inspectorRef, module, fulfilledInputsMap } = useD3Notebook({
    notebook,
    inspectorName: INSPECTOR_NAME,
    onInitialModuleFulfilled: (name, input) => {
      if (name === MUTABLE_SPEED_NAME) {
        setSpeed(input.value);
      }
    },
  });

  useEffect(() => {
    const speedInput = fulfilledInputsMap.get(MUTABLE_SPEED_NAME);
    if(speedInput) speedInput['value'] = speed;

    // Or using a redefine way
    /*

    if (speedInput) {
      moduleRedefine(module, MUTABLE_SPEED_NAME, () => {
        speedInput.value = speed;
        return speedInput;
      });
    }

    */
    
  }, [speed]);

  
  return (
    <div data-testid="use-d3-notebook-example-embed-a-notebook-div" className='w-full'>
      <h3>Embed</h3>
      <div className='font-mono text-sm'>Speed: {speed || undefined}</div>
      <input
        type="range"
        min="0"
        max="5"
        step="0.1"
        value={speed || undefined}
        onChange={event => setSpeed(event.target.valueAsNumber)}
      />
      <div ref={inspectorRef} className="w-full overflow-hidden" />
      <p className='font-mono text-right text-sm'><a href="https://observablehq.com/@observablehq/how-to-embed-a-notebook-in-a-react-app">@observablehq/how-to-embed-a-notebook-in-a-react-app</a></p>
    </div>
  );
}
