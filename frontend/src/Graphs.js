import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, BarChart, Bar, AreaChart, Area } from 'recharts';

export default class Graphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChartData: [
        {name: '2013', uv: 4000, pv: 2400, amt: 2400},
        {name: '2014', uv: 3000, pv: 1398, amt: 2210},
        {name: '2015', uv: 2000, pv: 9800, amt: 2290},
        {name: '2016', uv: 2780, pv: 3908, amt: 2000},
        {name: '2017', uv: 1890, pv: 4800, amt: 2181},
        {name: '2018', uv: 2390, pv: 3800, amt: 2500},
        {name: '2019', uv: 3490, pv: 4300, amt: 2100},
        ],
      BarChartData: [
        {year: '2013', uv: 4000, pv: 2400, amt: 2400},
        {year: '2014', uv: 3000, pv: 1398, amt: 2210},
        {year: '2015', uv: 2000, pv: 9800, amt: 2290},
        {year: '2016', uv: 2780, pv: 3908, amt: 2000},
        {year: '2017', uv: 1890, pv: 4800, amt: 2181},
        {year: '2018', uv: 2390, pv: 3800, amt: 2500},
        {year: '2019', uv: 3490, pv: 4300, amt: 2100},
        ],
      PieChartData: [
        {name: 'Group A', value: 400}, {name: 'Group B', value: 300},
        {name: 'Group C', value: 300}, {name: 'Group D', value: 200}
        ]
    }
  }









  render() {


    const accidentYearsData = [
      {name: '2007', number_of_accidents: 0},
      {name: '2008', number_of_accidents: 0},
      {name: '2009', number_of_accidents: 0},
      {name: '2010', number_of_accidents: 0},
      {name: '2011', number_of_accidents: 0},
      {name: '2012', number_of_accidents: 0},
      {name: '2013', number_of_accidents: 0},
      {name: '2014', number_of_accidents: 0},
      {name: '2015', number_of_accidents: 0},
      {name: '2016', number_of_accidents: 0},
      {name: '2017', number_of_accidents: 0},
      {name: '2018', number_of_accidents: 0},
      {name: '2019', number_of_accidents: 0}
    ]

    const accidentInjuryData = [
      { name: 'Minor', value: 0 },
      { name: 'Major', value: 0 },
      { name: 'Fatal', value: 0 }
    ]

    this.props.accidentMarkers.forEach(accident => {
      switch (accident.year) {
        case 2007:
          accidentYearsData[0].number_of_accidents = accidentYearsData[0].number_of_accidents + 1;
          break;
        case 2008:
          accidentYearsData[1].number_of_accidents = accidentYearsData[1].number_of_accidents + 1;
          break;
        case 2009:
          accidentYearsData[2].number_of_accidents = accidentYearsData[2].number_of_accidents + 1;
          break;
        case 2010:
          accidentYearsData[3].number_of_accidents = accidentYearsData[3].number_of_accidents + 1;
          break;
        case 2011:
          accidentYearsData[4].number_of_accidents = accidentYearsData[4].number_of_accidents + 1;
          break;
        case 2012:
          accidentYearsData[5].number_of_accidents = accidentYearsData[5].number_of_accidents + 1;
          break;
        case 2013:
          accidentYearsData[6].number_of_accidents = accidentYearsData[6].number_of_accidents + 1;
          break;
        case 2014:
          accidentYearsData[7].number_of_accidents = accidentYearsData[7].number_of_accidents + 1;
          break;
        case 2015:
          accidentYearsData[8].number_of_accidents = accidentYearsData[8].number_of_accidents + 1;
          break;
        case 2016:
          accidentYearsData[9].number_of_accidents = accidentYearsData[9].number_of_accidents + 1;
          break;
        case 2017:
          accidentYearsData[10].number_of_accidents = accidentYearsData[10].number_of_accidents + 1;
          break;
        case 2018:
          accidentYearsData[11].number_of_accidents = accidentYearsData[11].number_of_accidents + 1;
          break;
        case 2019:
          accidentYearsData[12].number_of_accidents = accidentYearsData[12].number_of_accidents + 1;
          break;
      }
      switch (accident.injuryType) {
        case 'Minor':
          accidentInjuryData[0].value = accidentInjuryData[0].value + 1;
        break;
        case 'Major':
          accidentInjuryData[1].value = accidentInjuryData[1].value + 1;
        break;
        case 'Fatal':
          accidentInjuryData[2].value = accidentInjuryData[2].value + 1;
        break;
      }
    })

    console.log('accidentInjuryData: ', accidentInjuryData);

    const colours = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x  = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy  + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}  dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

    return (
      <div className="container-graphs">
        <div className="accident-graphs">
          <h1>Accident Graphs</h1>
          {this.props.accidentMarkers.length}
          <BarChart
            className="graph" id="graph-3" alt="bar chart"
            width={800} height={600}
            data={accidentYearsData}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Bar dataKey="number_of_accidents" fill="#6a7172" />
            <Tooltip/>
            <Line type="monotone" dataKey="number_of_accidents" stroke="#6a7172" />
            <Legend />
          </BarChart>

          <LineChart
            className="graph" id="graph-1" alt="graph"
            width={800} height={600}
            data={this.state.ChartData}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>

          <PieChart
            className="graph" id="graph-2" alt="graph"
            width={800} height={600}
            onMouseEnter={this.onPieEnter}>
            <Pie
              data={accidentInjuryData}
              labelLine={false}
              label={accidentInjuryData.name}
              fill="#8884d8"
            >
              {
                accidentInjuryData.map((entry, index) => <Cell fill={colours[index % colours.length]}/>)
              }
            </Pie>
          </PieChart>
        </div>

        <div className="theft-graphs">
          <h1>Theft Graphs</h1>
          {this.props.theftMarkers.length}
          <BarChart
            className="graph" id="graph-3" alt="bar chart"
            width={800} height={600}
            data={this.state.BarChartData}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="year"/>
            <YAxis/>
            <Bar dataKey="uv" fill="#6a7172" />
            <Tooltip/>
            <Line type="monotone" dataKey="uv" stroke="#6a7172" />
            <Legend />
          </BarChart>

          <AreaChart
            className="graph" id="graph-4" alt="graph"
            width={800} height={600}
            data={this.state.ChartData}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
            <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
          </AreaChart>
        </div>

      </div>
      );
  }
}
