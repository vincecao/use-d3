# useD3NoteBook
Embed notebook into a hook with `Observablehq` Runtime and Inspector.

### Usage
```typescript
type UseD3Notebook = {
  notebook: any;
  inspectorName: string;
  additionalNames?: string[];
  onInitialModuleFulfilled?: (name: string, input: any) => void;
  onAdditionalName?: (name: string) => void;
};

// A hook for embedding notebook with Observablehq Runtime and Inspector.
const { inspectorRef, module, fulfilledInputsMap } = useD3Notebook({
  notebook: any;
  inspectorName: string;
  additionalNames?: string[];
  onInitialModuleFulfilled?: (name: string, input: any) => void;
  onAdditionalName?: (name: string) => void;
})

// Help redefine function for a given Observablehq runtime module
function moduleRedefine( module: any | undefined, name: string, newInput: any ): void

// Add additional Inspector for client components
function additionalInspector(ref: HTMLDivElement | undefined | null): void
```

Check more in sample code [here](https://github.com/vincecao/use-d3/tree/master/example/src/D3NotebookExample.tsx) or in [demo site](//vince-amazing.com/use-d3)