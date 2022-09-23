# useD3
Attach d3 function into a hook and render data-driven documents.

### Usage
```tsx
function d3Fn(root){
  // doing some thing with the root selector
}
// Hook for easy accessing d3 function into React application
const ref: Ref<HTMLDivElement> = useD3( renderD3Fn: (select: any) => void, deps: DependencyList | undefined);
```

Check more in sample code [here](https://github.com/vincecao/use-d3/tree/master/example/src/D3Example.tsx) or in [demo site](//vince-amazing.com/use-d3)