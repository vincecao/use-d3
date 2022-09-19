import { Runtime, Inspector } from '@observablehq/runtime';
import type { Ref } from 'react';
import { useEffect, useRef } from 'react';

type UseD3Notebook = {
  notebook: any;
  inspectorName: string;
  onInitialModuleFulfilled?: (name: string, input: any) => void;
};

/**
 * Help redefine function for a given Observablehq runtime module
 * @param module Observablehq runtime module, returned from useD3Notebook hook
 * @param name Redefine target name
 * @param newInput New input for redefine target
 */
export function moduleRedefine(
  module: any | undefined,
  name: string,
  newInput: any
): void {
  module?.redefine(name, newInput);
}

/**
 * A hook for embedding notebook with Observablehq Runtime and Inspector.
 * @param { notebook, inspectorName, onInitialModuleFulfilled }
 * @returns { inspectorRef, module, fulfilledInputsMap }
 */
export default function useD3Notebook({
  notebook,
  inspectorName,
  onInitialModuleFulfilled,
}: UseD3Notebook): {
  inspectorRef: Ref<HTMLDivElement>,
  module: any,
  fulfilledInputsMap: Map<string, any>,
} {
  const inspectorRef = useRef<HTMLDivElement>(null);
  const moduleRef = useRef<any>(null);
  const fulfilledInputsMapRef = useRef<Map<string, any>>(new Map());

  useEffect(() => {
    const runtime = new Runtime();
    const main = runtime.module(notebook, (name: string) => {
      if (name === inspectorName) {
        return new Inspector(inspectorRef.current);
      }

      if (typeof name === 'string') {
        return {
          fulfilled: (input: any) => {
            fulfilledInputsMapRef.current.set(name, input);
            onInitialModuleFulfilled?.(name, input);
          },
        };
      }
    });
    moduleRef.current = main;
    return () => {
      runtime.dispose();
      moduleRef.current = null;
      fulfilledInputsMapRef.current = new Map();
    };
  }, []);

  return {
    inspectorRef,
    module: moduleRef.current,
    fulfilledInputsMap: fulfilledInputsMapRef.current,
  };
}
