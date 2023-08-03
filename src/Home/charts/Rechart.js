import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Mon',
    t_week: 590,
    p_week: 800,
    amt: 1400,
  },
  {
    name: 'Tue',
    t_week: 868,
    p_week: 967,
    amt: 1506,
  },
  {
    name: 'Wen',
    t_week: 1397,
    p_week: 1098,
    amt: 989,
  },
  {
    name: 'Thu',
    t_week: 1480,
    p_week: 1200,
    amt: 1228,
  },
  {
    name: 'Fri',
    t_week: 1520,
    p_week: 1108,
    amt: 1100,
  },
  {
    name: 'Sat',
    t_week: 1400,
    p_week: 680,
    amt: 1700,
  },
  {
    name: 'Sun',
    t_week: 1400,
    p_week: 680,
    amt: 1700,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/composed-chart-of-same-data-i67zd';

  render() {
    return (
      <ResponsiveContainer width="100%" height="90%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="none" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="t_week" barSize={15} fill="#343b53" />
          <Line type="monotone" dataKey="p_week" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
