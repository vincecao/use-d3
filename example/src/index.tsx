import * as React from 'react';
import { createRoot } from 'react-dom/client';
import D3Example from './D3Example';
import D3NotebookExample from './D3NotebookExample';

const container = document.getElementById('root');
const root = createRoot(container!);

function App() {
  return (
    <div className='w-full'>
      <h1 className='font-mono'>use-d3</h1>
      <p>
        Hooks for integrating <i><a href="https://d3js.org/">D3.js</a></i> and <i><a href="https://observablehq.com/">Observablehq
        Notebook</a></i> into your React Project.
      </p>
      <div className='font-mono text-xs'>
        <span className='flex items-center space-x-2 justify-center'><p>github repo: <a href="https://github.com/vincecao/use-d3">@vincecao/use-d3</a></p></span>
        <span className='flex items-center space-x-2 justify-center'><p><a href="https://www.npmjs.com/package/@vincecao/use-d3">npm</a>/<a href="https://github.com/vincecao/use-d3/pkgs/npm/use-d3">git npm</a>: </p><img className='h-5 m-0' src="https://badge.fury.io/js/@vincecao%2Fuse-d3.svg"/></span>
        <span className='flex items-center space-x-2 justify-center'><p>checks: </p><a href="https://badgen.net/github/checks/vincecao/use-d3"><img className='h-5 m-0' src="https://badgen.net/github/checks/vincecao/use-d3" /></a></span>
      </div>
      <h2 className='font-mono'>useD3</h2>
      <D3Example />
      <h2 className='font-mono'>useD3Notebook</h2>
      <D3NotebookExample />
    </div>
  );
}

root.render(<App />);
