import * as React from 'react';
import type { ReactElement } from 'react';
import { useRef } from 'react';
import notebook from "@d3/realtime-horizon-chart";

import { additionalInspector, useD3Notebook } from '../../..';

const INSPECTOR_NAME = 'chart';
const ADDITIONAL_NAMES = ['viewof overlap', 'viewof scheme'];

export default function RealtimeHorizonChart(): ReactElement {
  const overlapRef = useRef<HTMLDivElement>(null);
  const schemeRef = useRef<HTMLDivElement>(null);
  const { inspectorRef } = useD3Notebook({
    notebook,
    inspectorName: INSPECTOR_NAME,
    additionalNames: ADDITIONAL_NAMES,
    onAdditionalName: (name: string) => {
      switch(name){
        case ADDITIONAL_NAMES[0]:
          return additionalInspector(overlapRef.current)
        case ADDITIONAL_NAMES[1]:
          return additionalInspector(schemeRef.current)
      }
    }
  });

  return (
    <div data-testid="use-d3-notebook-example-realtime-horizon-chart-div">
      <h3>Realtime Horizon Chart</h3>
      <div ref={schemeRef}/>
      <div ref={overlapRef}/>
      <div ref={inspectorRef}/>
      <p className='font-mono text-right text-sm'><a href="https://observablehq.com/@d3/realtime-horizon-chart">@d3/realtime-horizon-chart</a></p>
    </div>
  );
}
