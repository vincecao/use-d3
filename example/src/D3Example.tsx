import * as React from 'react';
import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import * as d3 from 'd3';

import { useD3 } from '../..'

function randomData(): string[] {
  return d3
    .shuffle(["😀", "😙", "🤓", "😎", "😍", "🤩", "😴"])
    .slice(0, Math.floor(2 + Math.random() * 5));
}

function d3Fn(exampleRoot, data) {
  exampleRoot.selectAll("div")
    .data(data, d => d)
    .join(
      enter => enter
        .append("div")
        .style("position", "absolute")
        .style("transform", (d, i) => `translate(${i * 50}px,-50px)`)
        .style("opacity", 0)
        .style("font-size", "50px")
        .style("line-height", 1)
        .text(d => d),
      update => update,
      exit => exit
        .call(exit =>
          exit.transition()
            .duration(1000)
            .delay((_d, i) => i * 100)
            .style("transform", (d, i) => `translate(${i * 50}px,50px)`)
            .style("opacity", 0)
            .remove()
        )
    )
    .transition()
    .duration(1000)
    .delay((_d, i) => i * 100)
    .style("transform", (_d, i) => `translate(${i * 50}px,0px)`)
    .style("opacity", 1);
}

export default function D3Example(): ReactElement {
  const [data, setData] = useState<string[]>(() => randomData());
  const ref = useD3((root) => d3Fn(root, data), [data]);

  useEffect(() => {
    const timer = setInterval(() => {
      // update data each 2 seconds
      setData(randomData());
    }, 2000);
    return () => { clearInterval(timer); }
  }, [])

  return (
    <div data-testid='use-d3-example-div' className='h-10 w-full' ref={ref} />
  )
}