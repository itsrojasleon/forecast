import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

function Chart({ temps, color }) {
  return (
    <div>
      <Sparklines height={120} width={180} data={temps}>
        <SparklinesLine color={color} />
      </Sparklines>
    </div>
  );
}

export default Chart;
