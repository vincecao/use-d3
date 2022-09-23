import * as React from 'react';
import type { ReactElement } from 'react';
import { useRef } from 'react';
import notebook from "@gallowayevan/life-expectancy";

import { additionalInspector, useD3Notebook } from '../../..';

const INSPECTOR_NAME = 'viewof map';
const ADDITIONAL_NAMES = ['viewof opacity', 'viewof numberOfBins'];

export default function LifeExpectancy(): ReactElement {
  const opacityRef = useRef<HTMLDivElement>(null);
  const numberOfBinsRef = useRef<HTMLDivElement>(null);
  const { inspectorRef } = useD3Notebook({
    notebook,
    inspectorName: INSPECTOR_NAME,
    additionalNames: ADDITIONAL_NAMES,
    onAdditionalName: (name: string) => {
      switch(name){
        case ADDITIONAL_NAMES[0]:
          return additionalInspector(opacityRef.current)
        case ADDITIONAL_NAMES[1]:
          return additionalInspector(numberOfBinsRef.current)
      }
    }
  });

  return (
    <div data-testid="use-d3-notebook-example-life-expectancy-div" className='w-full'>
      <h3>Life Expectancy</h3>
      <div ref={opacityRef}/>
      <div ref={numberOfBinsRef}/>
      <div ref={inspectorRef}/>
      <p className='font-mono text-right text-sm'><a href="https://observablehq.com/@gallowayevan/life-expectancy">@gallowayevan/life-expectancy</a></p>
    </div>
  );
}
