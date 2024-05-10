// import Box from '@mui/material/Box';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Slider from '@mui/material/Slider';
// import Typography from '@mui/material/Typography';
// import { BarChart } from '@mui/x-charts/BarChart';
// import * as React from 'react';

// export default function BarAnimation() {
//   const [seriesNb, setSeriesNb] = React.useState(2);
//   const [itemNb, setItemNb] = React.useState(5);
//   const [skipAnimation, setSkipAnimation] = React.useState(false);

//   const handleItemNbChange = (event, newValue) => {
//     if (typeof newValue !== 'number') {
//       return;
//     }
//     setItemNb(newValue);
//   };
//   const handleSeriesNbChange = (event, newValue) => {
//     if (typeof newValue !== 'number') {
//       return;
//     }
//     setSeriesNb(newValue);
//   };

//   const filteredSeries = series.filter((s) => s.label !== 'series 2');

//   return (
//     <Box sx={{ width: '100%' }}>
//       <BarChart
//         height={290}
//         series={filteredSeries
//           .slice(0, seriesNb)
//           .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
//         skipAnimation={skipAnimation}
//       />
//       <FormControlLabel
//         checked={skipAnimation}
//         control={
//           <Checkbox onChange={(event) => setSkipAnimation(event.target.checked)} />
//         }
//         label="skipAnimation"
//         labelPlacement="end"
//       />
//       <Typography id="input-item-number" gutterBottom>
//         Number of items
//       </Typography>
//       <Slider
//         value={itemNb}
//         onChange={handleItemNbChange}
//         valueLabelDisplay="auto"
//         min={1}
//         max={20}
//         aria-labelledby="input-item-number"
//       />
//       <Typography id="input-series-number" gutterBottom>
//         Number of series
//       </Typography>
//       <Slider
//         value={seriesNb}
//         onChange={handleSeriesNbChange}
//         valueLabelDisplay="auto"
//         min={1}
//         max={10}
//         aria-labelledby="input-series-number"
//       />
//     </Box>
//   );
// }

// const highlightScope = {
//   highlighted: 'series',
//   faded: 'global',
// };

// const series = [
//   {
//     data: [
//       2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
//       1879, 626, 1635, 2177, 516, 1793, 1598,
//     ],
//   },
//    // ... other series
// ].map((s) => ({ ...s, highlightScope }));

import { BarChart } from '@mui/x-charts/BarChart';
import * as React from 'react';

export default function BorderRadius() {
  return (
    <div style={{ width: '100%' }}>
      <BarChart
        dataset={dataset}
        {...chartSetting}
        slotProps={{
          bar: {
            clipPath: `inset(0px round 10px 10px 0px 0px)`,
          },
        }}
      />
    </div>
  );
}

const dataset = [
  { Reach: 35000, Impressions: 44000, Clicks: 24000, Engagement: 34000 },
];

const chartSetting = {
  series: [
    { dataKey: 'Reach' },
    { dataKey: 'Impressions' },
    { dataKey: 'Clicks' },
    { dataKey: 'Engagement' },
  ],
  height: 270,
  categoryScale: {
    categories: ['Reach', 'Impressions', 'Clicks', 'Engagement'],
  },
};