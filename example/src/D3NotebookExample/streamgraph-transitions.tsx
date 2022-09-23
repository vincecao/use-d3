import * as React from 'react';
import type { ReactElement } from 'react';
import { useRef } from 'react';
import notebook from "@d3/streamgraph-transitions";

import { additionalInspector, useD3Notebook } from '../../..';

const INSPECTOR_NAME = 'chart';
const ADDITIONAL_NAMES = ['viewof offset'];

export default function StreamgraphTransitions(): ReactElement {
  const offsetRef = useRef<HTMLDivElement>(null);
  const { inspectorRef } = useD3Notebook({
    notebook,
    inspectorName: INSPECTOR_NAME,
    additionalNames: ADDITIONAL_NAMES,
    onAdditionalName: () => additionalInspector(offsetRef.current)
  });

  return (
    <div data-testid="use-d3-notebook-example-streamgraph-transitions-div" className='w-full'>
      <h3>Streamgraph Transitions</h3>
      <div ref={offsetRef}/>
      <div ref={inspectorRef}/>
      <p className='font-mono text-right text-sm'><a href="https://observablehq.com/@d3/streamgraph-transitions">@d3/streamgraph-transitions</a></p>
    </div>
  );
}
