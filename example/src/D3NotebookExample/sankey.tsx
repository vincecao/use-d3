import * as React from 'react';
import type { ReactElement } from 'react';
import { useRef } from 'react';
import notebook from "@d3/sankey";

import { additionalInspector, useD3Notebook } from '../../..';

const INSPECTOR_NAME = 'chart';
const ADDITIONAL_NAMES = ['viewof nodeAlign', 'viewof linkColor'];


export default function Sankey(): ReactElement {
  const nodeAlignRef = useRef<HTMLDivElement>(null)
  const linkColorRef = useRef<HTMLDivElement>(null)

  const { inspectorRef } = useD3Notebook({
    notebook,
    inspectorName: INSPECTOR_NAME,
    additionalNames: ['viewof nodeAlign', 'viewof linkColor'],
    onAdditionalName: (name: string) => {
      switch (name) {
        case ADDITIONAL_NAMES[0]:
          return additionalInspector(nodeAlignRef.current)
        case ADDITIONAL_NAMES[1]:
          return additionalInspector(linkColorRef.current)
      }
    }
  });

  return (
    <div data-testid="use-d3-notebook-example-sankey-div" className='w-full'>
      <h3>Sankey</h3>
      <div className='grid grid-cols-2 gap-2'>
        <div ref={linkColorRef} />
        <div ref={nodeAlignRef} />
      </div>
      <div ref={inspectorRef} />
      <p className='font-mono text-right text-sm'><a href="https://observablehq.com/@d3/sankey">@d3/sankey</a></p>
    </div>
  );
}
