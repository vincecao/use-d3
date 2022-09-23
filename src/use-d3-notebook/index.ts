import { Runtime, Inspector } from '@observablehq/runtime';
import { useEffect, useRef, Ref } from 'react';

type UseD3Notebook = {
  notebook: any;
  inspectorName: string;
  additionalNames?: string[];
  onInitialModuleFulfilled?: (name: string, input: any) => void;
  onAdditionalName?: (name: string) => void;
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
 * Add additional Inspector for client components
 * @param ref additional div ref
 * @return ref with inspector
 */
export function additionalInspector(ref: HTMLDivElement | undefined | null): void {
  return new Inspector(ref);
}

/**
 * A hook for embedding notebook with Observablehq Runtime and Inspector.
 * @param { notebook, inspectorName, onInitialModuleFulfilled }
 * @returns { inspectorRef, module, fulfilledInputsMap }
 */
export default function useD3Notebook({
  notebook,
  inspectorName,
  additionalNames = [],
  onInitialModuleFulfilled,
  onAdditionalName,
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
    moduleRef.current = runtime.module(notebook, (name: string) => {
      if (name === inspectorName) {
        return new Inspector(inspectorRef.current);
      }

      if (additionalNames.includes(name)) {
        return onAdditionalName?.(name);
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
