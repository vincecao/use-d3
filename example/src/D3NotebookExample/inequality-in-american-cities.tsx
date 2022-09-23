import * as React from 'react';
import type { ReactElement } from 'react';
import { useRef } from 'react';
import notebook from '@mbostock/inequality-in-american-cities';

import { additionalInspector, useD3Notebook } from '../../..';

const INSPECTOR_NAME = 'chart';
const ADDITIONAL_NAMES = ['legend'];

export default function InequalityInAmericanCities(): ReactElement {
  const legendRef = useRef<HTMLDivElement>(null);
  const { inspectorRef } = useD3Notebook({
    notebook,
    inspectorName: INSPECTOR_NAME,
    additionalNames: ADDITIONAL_NAMES,
    onAdditionalName: () => additionalInspector(legendRef.current)
  });

  return (
    <div data-testid="use-d3-notebook-example-inequality-in-american-cities-div" className='w-full'>
      <h3>Inequality in American Cities</h3>
      <div ref={legendRef}/>
      <div ref={inspectorRef}/>
      <p className='font-mono text-right text-sm'><a href="https://observablehq.com/@mbostock/inequality-in-american-cities">@d3/inequality-in-american-cities</a></p>
    </div>
  );
}
