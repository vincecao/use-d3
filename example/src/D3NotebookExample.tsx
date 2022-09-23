import type { ReactElement } from 'react';
import * as React from 'react';
import InequalityInAmericanCities from './D3NotebookExample/inequality-in-american-cities';
import Embed from './D3NotebookExample/embed-a-notebook';
import Sankey from './D3NotebookExample/sankey';
import StackedAreaChart from './D3NotebookExample/stacked-area-chart';
import StreamgraphTransitions from './D3NotebookExample/streamgraph-transitions';
import RealtimeHorizonChart from './D3NotebookExample/realtime-horizon-chart';
import LifeExpectancy from './D3NotebookExample/life-expectancy';
import PSR from './D3NotebookExample/psr-b1919-21';

export default function D3NotebookExample(): ReactElement {
  return (
    <div data-testid='d3-notebook-example-div'>
      <Embed />
      <PSR />
      <StreamgraphTransitions />
      <LifeExpectancy />
      <RealtimeHorizonChart />
      <InequalityInAmericanCities />
      <Sankey />
      <StackedAreaChart />
    </div>
  )
}