import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, BarChart, Bar, AreaChart, Area, Label, LabelList } from 'recharts';
import { Button, ButtonGroup } from 'reactstrap';
import CountUp, {startAnimation} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './App.css';



export default class Graphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accidentRoadConditionsShow: true,
      accidentLightConditionsShow: false,
      accidentVisibilityShow: false,
      didAccidentViewCountUp: false,
      didTheftViewCountUp: false
    }
  }

onAccidentVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({didAccidentViewCountUp: true});
    }
}

onTheftVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({didTheftViewCountUp: true});
    }
}

toggleMap = (event, firstMap, secondMap, thirdMap) => {
  this.setState({
        [firstMap]: true,
        [secondMap]: false,
        [thirdMap]: false
      })
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
    ];

    const accidentInjuryData = [
      { name: 'Minor', value: 0 },
      { name: 'Major', value: 0 },
      { name: 'Fatal', value: 0 }
    ];

    const accidentVisibilityData = [
      { name: 'Clear', value: 0 },
      { name: 'Rain', value: 0 },
      { name: 'Other', value: 0 }
    ];

    const accidentRoadConditionsData = [
      { name: 'Dry', value: 0 },
      { name: 'Wet', value: 0 }
    ];

    const accidentLightConditionsData = [
      { name: 'Dark', value: 0 },
      { name: 'Dark, artificial', value: 0 },
      { name: 'Daylight', value: 0 },
      { name: 'Daylight, artificial', value: 0 },
      { name: 'Dusk', value: 0 }
    ];

    const theftBikeTypeData = [
      { name: 'BMX', number_stolen: 0 },
      { name: 'Electric', number_stolen: 0 },
      { name: 'Folding', number_stolen: 0 },
      { name: 'Mountain', number_stolen: 0 },
      { name: 'Other/Unknown', number_stolen: 0 },
      { name: 'Racer', number_stolen: 0 },
      { name: 'Recumbant', number_stolen: 0 },
      { name: 'Regular', number_stolen: 0 },
      { name: 'Scooter', number_stolen: 0 },
      { name: 'Tandem', number_stolen: 0 },
      { name: 'Touring', number_stolen: 0 },
      { name: 'Tricycle', number_stolen: 0 },
      { name: 'Unicycle', number_stolen: 0 }
    ];

    const theftYearsData = [
      {name: '2014', number_of_thefts: 0},
      {name: '2015', number_of_thefts: 0},
      {name: '2016', number_of_thefts: 0},
      {name: '2017', number_of_thefts: 0},
      {name: '2018', number_of_thefts: 0},
      {name: '2019', number_of_thefts: 0}
    ];

    const theftTimeOfDayData = [
      {name: 'Night', value: 0},
      {name: 'Morning', value: 0},
      {name: 'Afternoon', value: 0},
      {name: 'Evening', value: 0}
    ]


    this.props.theftMarkers.forEach(theft => {
      switch (theft.bikeType) {
        case undefined:
          break;
        case 'BMX':
          theftBikeTypeData[0].number_stolen = theftBikeTypeData[0].number_stolen + 1;
          break;
        case 'Electric':
          theftBikeTypeData[1].number_stolen = theftBikeTypeData[1].number_stolen + 1;
          break;
        case 'Folding':
          theftBikeTypeData[2].number_stolen = theftBikeTypeData[2].number_stolen + 1;
          break;
        case 'Mountain':
          theftBikeTypeData[3].number_stolen = theftBikeTypeData[3].number_stolen + 1;
          break;
        case 'Other':
          theftBikeTypeData[4].number_stolen = theftBikeTypeData[4].number_stolen + 1;
          break;
        case 'Type Unknown':
          theftBikeTypeData[4].number_stolen = theftBikeTypeData[4].number_stolen + 1;
          break;
        case 'Racer':
          theftBikeTypeData[5].number_stolen = theftBikeTypeData[5].number_stolen + 1;
          break;
        case 'Recumbant':
          theftBikeTypeData[6].number_stolen = theftBikeTypeData[6].number_stolen + 1;
          break;
        case 'Regular':
          theftBikeTypeData[7].number_stolen = theftBikeTypeData[7].number_stolen + 1;
          break;
        case 'Scooter':
          theftBikeTypeData[8].number_stolen = theftBikeTypeData[8].number_stolen + 1;
          break;
        case 'Tandem':
          theftBikeTypeData[9].number_stolen = theftBikeTypeData[9].number_stolen + 1;
          break;
        case 'Touring':
          theftBikeTypeData[10].number_stolen = theftBikeTypeData[10].number_stolen + 1;
          break;
        case 'Tricycle':
          theftBikeTypeData[11].number_stolen = theftBikeTypeData[11].number_stolen + 1;
          break;
        case 'Unicycle':
          theftBikeTypeData[12].number_stolen = theftBikeTypeData[12].number_stolen + 1;
          break;
      };

      switch (theft.occurrenceYear) {
        case 2014:
          theftYearsData[0].number_of_thefts = theftYearsData[0].number_of_thefts + 1;
          break;
        case 2015:
          theftYearsData[1].number_of_thefts = theftYearsData[1].number_of_thefts + 1;
          break;
        case 2016:
          theftYearsData[2].number_of_thefts = theftYearsData[2].number_of_thefts + 1;
          break;
        case 2017:
          theftYearsData[3].number_of_thefts = theftYearsData[3].number_of_thefts + 1;
          break;
        case 2018:
          theftYearsData[4].number_of_thefts = theftYearsData[4].number_of_thefts + 1;
          break;
        case 2019:
          theftYearsData[5].number_of_thefts = theftYearsData[5].number_of_thefts + 1;
          break;
      };


      if (theft.occurrenceTime) {
        if (theft.occurrenceTime.startsWith("23") || theft.occurrenceTime.startsWith("00") || theft.occurrenceTime.startsWith("01") || theft.occurrenceTime.startsWith("02") || theft.occurrenceTime.startsWith("03") || theft.occurrenceTime.startsWith("04") || theft.occurrenceTime.startsWith("22")) {
          theftTimeOfDayData[0].value = theftTimeOfDayData[0].value + 1;
        };

        if (theft.occurrenceTime.startsWith("05") || theft.occurrenceTime.startsWith("06") || theft.occurrenceTime.startsWith("07") || theft.occurrenceTime.startsWith("08") || theft.occurrenceTime.startsWith("09") || theft.occurrenceTime.startsWith("10") || theft.occurrenceTime.startsWith("11")) {
          theftTimeOfDayData[1].value = theftTimeOfDayData[1].value + 1;
        };

        if (theft.occurrenceTime.startsWith("12") || theft.occurrenceTime.startsWith("13") || theft.occurrenceTime.startsWith("14") || theft.occurrenceTime.startsWith("15") || theft.occurrenceTime.startsWith("16") || theft.occurrenceTime.startsWith("17")) {
          theftTimeOfDayData[2].value = theftTimeOfDayData[2].value + 1;
        };

        if (theft.occurrenceTime.startsWith("18") || theft.occurrenceTime.startsWith("19") || theft.occurrenceTime.startsWith("20") || theft.occurrenceTime.startsWith("21")) {
          theftTimeOfDayData[3].value = theftTimeOfDayData[3].value + 1;
        };
      };
    });

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
      };
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
      };

      if (this.state.accidentRoadConditionsShow) {
        switch (accident.roadConditions) {
          case 'Dry':
            accidentRoadConditionsData[0].value = accidentRoadConditionsData[0].value + 1;
          break;
          case 'Wet':
            accidentRoadConditionsData[1].value = accidentRoadConditionsData[1].value + 1;
          break;
        }
      };

      if (this.state.accidentVisibilityShow) {
        switch (accident.visibility) {
          case 'Clear':
            accidentVisibilityData[0].value = accidentVisibilityData[0].value + 1;
          break;
          case 'Rain':
            accidentVisibilityData[1].value = accidentVisibilityData[1].value + 1;
          break;
          case 'Other':
            accidentVisibilityData[2].value = accidentVisibilityData[2].value + 1;
          break;
        }
      };

      if (this.state.accidentLightConditionsShow) {
        switch (accident.light) {
          case 'Dark':
            accidentLightConditionsData[0].value = accidentLightConditionsData[0].value + 1;
          break;
          case 'Dark, artificial':
            accidentLightConditionsData[1].value = accidentLightConditionsData[1].value + 1;
          break;
          case 'Daylight':
            accidentLightConditionsData[2].value = accidentLightConditionsData[2].value + 1;
          break;
          case 'Daylight, artificial':
            accidentLightConditionsData[3].value = accidentLightConditionsData[3].value + 1;
          break;
            case 'Dusk':
            accidentLightConditionsData[4].value = accidentLightConditionsData[4].value + 1;
          break;
        };
      };
    });

    const accidentColours = ['#f48e89', '#f16862', '#ee433b', '#be352f', '#8e2823', '#5f1a17', '#2f0d0b'];

    const theftColours = ['#a2ccd2', '#83bbc3', '#64aab4', '#508890', '#3c666c', '#284448', '#142224'];

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
          <h1>ACCIDENTS BY THE NUMBERS</h1>

          <div className="counter">
            <span id="accident-counter">
            <VisibilitySensor onChange={this.onAccidentVisibilityChange} offset={{
              top:
                10
            }} delayedCall>
              <CountUp decimals={0} start={this.props.initialAccidentCount} end={this.state.didAccidentViewCountUp ? this.props.accidentMarkers.length : 0}
                       duration={5} />
            </VisibilitySensor>
            </span><br/>
            <h3>TOTAL ACCIDENTS</h3>
          </div>



          <h2>ACCIDENTS BY YEAR</h2>
          <ResponsiveContainer width="85%" height={400}>
          <BarChart
            className="graph" id="acc-graphs-years" alt="bar chart"
            data={accidentYearsData}>
            <XAxis dataKey="name" stroke="#00223e" />
            <YAxis stroke="#00223e" />
            <Bar type="monotone" dataKey="number_of_accidents" fill="#ee433b" stroke="#8e2823">
              <LabelList dataKey="number_of_accidents" position="top" />
            </Bar>
            <Tooltip/>
            <Line type="monotone" dataKey="number_of_accidents" stroke="#6a7172" />
          </BarChart>
          </ResponsiveContainer>


          <h2>ACCIDENTS BY TYPE OF INJURY</h2>
          <ResponsiveContainer width="85%" height={400}>
          <PieChart
            className="graph" id="acc-graphs-injury" alt="graph"
            onMouseEnter={this.onPieEnter}>
            <Pie
              data={accidentInjuryData}
              dataKey="value"
              nameKey="name"
              labelLine={true}
              label={true}
              fill="#8884d8"
              stroke="#8e2823"
            >
              {
                accidentInjuryData.map((entry, index) => <Cell fill={accidentColours[index % accidentColours.length]}/> 
)
              }
            </Pie>
            <Legend iconSize={11} iconType='square' align='center' layout='horizontal' width="30%" wrapperStyle={{ bottom: 40, left:"35%", right:"35%", backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
          </PieChart>
          </ResponsiveContainer>

          <ButtonGroup>
            <Button outline color="danger" onClick={(e) => this.toggleMap(e, 'accidentRoadConditionsShow', 'accidentVisibilityShow', 'accidentLightConditionsShow')}>Road Conditions</Button>
            <Button outline color="danger" onClick={(e) => this.toggleMap(e, 'accidentLightConditionsShow', 'accidentVisibilityShow', 'accidentRoadConditionsShow')}>Light Conditions</Button>
            <Button outline color="danger" onClick={(e) => this.toggleMap(e, 'accidentVisibilityShow', 'accidentLightConditionsShow', 'accidentRoadConditionsShow')}>Visibility</Button>
          </ButtonGroup>

          {this.state.accidentRoadConditionsShow &&

          <ResponsiveContainer width="85%" height={400}>
            <PieChart
              className="graph" id="graph-4" alt="graph"
              onMouseEnter={this.onPieEnter}>
              <Pie
                data={accidentRoadConditionsData}
                dataKey="value"
                nameKey="name"
                labelLine={true}
                label={true}
                fill="#8884d8"
                stroke="#8e2823"
              >
                {
                  accidentRoadConditionsData.map((entry, index) => <Cell fill={accidentColours[index % accidentColours.length]}/>)
                }
              </Pie>
            <Legend iconSize={11} iconType='square' align='center' layout='horizontal' width="20%" wrapperStyle={{ bottom: 50, left:"40%", right:"40%", backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            </PieChart>
          </ResponsiveContainer>
          }

          {this.state.accidentLightConditionsShow &&
          <ResponsiveContainer width="85%" height={400}>
            <PieChart
              className="graph" id="graph-5" alt="graph"
              onMouseEnter={this.onPieEnter}>
              <Pie
                data={accidentLightConditionsData}
                dataKey="value"
                nameKey="name"
                labelLine={true}
                label={true}
                fill="#8884d8"
                stroke="#8e2823"
              >
                {
                  accidentLightConditionsData.map((entry, index) => <Cell fill={accidentColours[index % accidentColours.length]}/>)
                }
              </Pie>
            <Legend iconSize={11} iconType='square' align='center' layout='horizontal' width="70%" wrapperStyle={{ bottom: 50, left:"15%", right:"15%", backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            </PieChart>
          </ResponsiveContainer>
          }

          {this.state.accidentVisibilityShow &&
          <ResponsiveContainer width="85%" height={400}>
            <PieChart
              className="graph" id="graph-6" alt="graph"
              onMouseEnter={this.onPieEnter}>
              <Pie
                data={accidentVisibilityData}
                dataKey="value"
                nameKey="name"
                labelLine={true}
                label={true}
                fill="#8884d8"
                stroke="#8e2823"
              >
                {
                  accidentVisibilityData.map((entry, index) => <Cell fill={accidentColours[index % accidentColours.length]}/>)
                }
              </Pie>
            <Legend iconSize={11} iconType='square' align='center' layout='horizontal' width="30%" wrapperStyle={{ bottom: 50, left:"35%", right:"35%", backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            </PieChart>
          </ResponsiveContainer>
          }

        </div>



        <div className="theft-graphs">
          <h1>THEFTS BY THE NUMBERS</h1>

          <div className="counter">
            <span id="theft-counter">
            <VisibilitySensor onChange={this.onTheftVisibilityChange} offset={{ top: 10 }} delayedCall>
              <CountUp
                decimals={0}
                start={this.props.initialTheftCount}
                end={this.state.didTheftViewCountUp ? this.props.theftMarkers.length : 0}
                duration={5}
              />
            </VisibilitySensor>
            </span>
            <br/>
            <h3>TOTAL THEFTS</h3>
          </div>

          <h2>THEFTS BY YEAR</h2>
          <ResponsiveContainer width="85%" height={400}>
          <BarChart
            className="graph" id="acc-graphs-years" alt="bar chart"
            data={theftYearsData}>
            <XAxis dataKey="name" stroke="#00223e" />
            <YAxis stroke="#00223e" />
            <Bar type="monotone" dataKey="number_of_thefts" fill="#64aab4" stroke="#284448">
              <LabelList dataKey="number_of_thefts" position="top" />
            </Bar>
            <Tooltip/>
            <Line type="monotone" dataKey="number_of_thefts" stroke="#00223e" />
          </BarChart>
          </ResponsiveContainer>


          <h2>THEFTS BY BIKE TYPE</h2>
          <ResponsiveContainer width="85%" height={400}>
           <AreaChart
            className="graph" id="graph-1" alt="graph"
            data={theftBikeTypeData}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#64aab4" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#a2ccd2" stopOpacity={0.5}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip/>
            <Legend />
            <Area type="monotone" dataKey="number_stolen" stroke="#284448" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
          </ResponsiveContainer>

          <h2>THEFTS BY TIME OF DAY</h2>
          <ResponsiveContainer width="85%" height={400}>
          <PieChart
            className="graph" id="graph-6" alt="graph"
            onMouseEnter={this.onPieEnter}>
            <Pie
              data={theftTimeOfDayData}
              dataKey="value"
              nameKey="name"
              labelLine={true}
              label={true}
              fill="#8884d8"
              stroke="#284448"
            >
              {
                theftTimeOfDayData.map((entry, index) => <Cell fill={theftColours[index % theftColours.length]}/>)
              }
            </Pie>
            <Legend iconSize={11} iconType='circle' align='center' layout='horizontal' width="50%" wrapperStyle={{ bottom: 50, left:"25%", right:"25%", backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
          </PieChart>
          </ResponsiveContainer>

        </div>

      </div>
      )
  }
}