import * as React from 'react';
import type { ReactElement } from 'react';
import notebook from "@mbostock/psr-b1919-21";

import { useD3Notebook } from '../../..';

const INSPECTOR_NAME = 'chart';

export default function PSR(): ReactElement {
  const { inspectorRef } = useD3Notebook({
    notebook,
    inspectorName: INSPECTOR_NAME,
  });

  return (
    <div data-testid="use-d3-notebook-example-psr-b1919-21-div" className='w-full'>
      <h3>PSR B1919+21</h3>
      <div ref={inspectorRef}/>
      <p className='font-mono text-right text-sm'><a href="https://observablehq.com/@mbostock/psr-b1919-21">@mbostock/psr-b1919-21</a></p>
    </div>
  );
}
