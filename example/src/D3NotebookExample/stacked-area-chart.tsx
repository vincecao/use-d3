import * as React from 'react';
import type { ReactElement } from 'react';
import { useRef } from 'react';
import notebook from "@d3/stacked-area-chart";

import { additionalInspector, useD3Notebook } from '../../..';

const INSPECTOR_NAME = 'chart';
const ADDITIONAL_NAMES = ['key'];

export default function StackedAreaChart(): ReactElement {
  const keyRef = useRef<HTMLDivElement>(null);
  const { inspectorRef } = useD3Notebook({
    notebook,
    inspectorName: INSPECTOR_NAME,
    additionalNames: ADDITIONAL_NAMES,
    onAdditionalName: () => additionalInspector(keyRef.current)
  });

  return (
    <div data-testid="use-d3-notebook-example-stacked-area-chart-div" className='w-full'>
      <h3>Stacked Area Chart</h3>
      <div ref={keyRef}/>
      <div ref={inspectorRef}/>
      <p className='font-mono text-right text-sm'><a href="https://observablehq.com/@d3/stacked-area-chart">@d3/stacked-area-chart</a></p>
    </div>
  );
}
