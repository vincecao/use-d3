import * as React from 'react';
import type { ReactElement } from 'react';

import Emoji from './D3Example/emoji';

export default function D3Example(): ReactElement {
  return (
    <div data-testid='use-d3-example-div' >
      <Emoji />
    </div>
  )
}