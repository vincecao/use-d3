# useD3NoteBook
Embed notebook into a hook with `Observablehq` Runtime and Inspector.

### Usage
```typescript
type UseD3Notebook = {
  notebook: any;
  inspectorName: string;
  onInitialModuleFulfilled?: (name: string, input: any) => void;
};

const { inspectorRef, module, fulfilledInputsMap } = useD3Notebook({ notebook, inspectorName, onInitialModuleFulfilled })
```

Check more in sample code [here](https://github.com/vincecao/use-d3/tree/master/example/src/D3NotebookExample.tsx) or in [demo site](//vince-amazing.com/use-d3)