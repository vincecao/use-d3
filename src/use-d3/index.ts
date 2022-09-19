import * as d3 from 'd3';
import type { DependencyList, Ref } from 'react';
import { useRef, useEffect } from 'react';

/**
 * Hook for easy accessing d3 function into React application
 * @param renderD3Fn d3 function, callback with d3 selector ref
 * @param deps Dependency list, if it is undefined, then each re-render will call d3 function
 * @returns d3RenderRef
 */
export default function useD3(
  renderD3Fn: (select: any) => void,
  deps: DependencyList | undefined = undefined
): Ref<HTMLDivElement> {
  const d3RenderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    renderD3Fn(d3.select(d3RenderRef.current));
  }, deps);
  return d3RenderRef;
}
