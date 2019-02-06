import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, BarChart, Bar, AreaChart, Area, Label, LabelList } from 'recharts';
import { Button, ButtonGroup } from 'reactstrap';
import CountUp, {startAnimation} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


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

          <div>
            <h3>Number of accidents: </h3>
            <VisibilitySensor onChange={this.onAccidentVisibilityChange} offset={{
              top:
                10
            }} delayedCall>
              <CountUp decimals={0} start={this.props.initialAccidentCount} end={this.state.didAccidentViewCountUp ? this.props.accidentMarkers.length : 0}
                       duration={5} />
            </VisibilitySensor>
          </div>


          <ResponsiveContainer width="90%" height={600}>
          <BarChart
            className="graph" id="acc-graphs-years" alt="bar chart"
            data={accidentYearsData}>
            <XAxis dataKey="name" stroke="#00223e">
              <Label value="Accidents by Year" offset={0} position="bottom" />
            </XAxis>
            <YAxis stroke="#00223e" />
            <Bar type="monotone" dataKey="number_of_accidents" fill="#ee433b">
              <LabelList dataKey="number_of_accidents" position="top" />
            </Bar>
            <Tooltip/>
            <Line type="monotone" dataKey="number_of_accidents" stroke="#6a7172" />
          </BarChart>
          </ResponsiveContainer>


          <ResponsiveContainer width="90%" height={600}>
          <PieChart
            className="graph" id="acc-graphs-injury" alt="pie chart"
            onMouseEnter={this.onPieEnter}>
            <Pie
              data={accidentInjuryData}
              dataKey="value"
              nameKey="name"
              labelLine={true}
              label={true}
              fill="#8884d8"
            >
              {
                accidentInjuryData.map((entry, index) => <Cell fill={colours[index % colours.length]}/>)
              }
            </Pie>
          </PieChart>
          </ResponsiveContainer>

          <ButtonGroup>
            <Button onClick={(e) => this.toggleMap(e, 'accidentRoadConditionsShow', 'accidentVisibilityShow', 'accidentLightConditionsShow')}>Road Conditions</Button>
            <Button onClick={(e) => this.toggleMap(e, 'accidentLightConditionsShow', 'accidentVisibilityShow', 'accidentRoadConditionsShow')}>Light Conditions</Button>
            <Button onClick={(e) => this.toggleMap(e, 'accidentVisibilityShow', 'accidentLightConditionsShow', 'accidentRoadConditionsShow')}>Visibility</Button>
          </ButtonGroup>

          {this.state.accidentRoadConditionsShow &&
          <ResponsiveContainer width="90%" height={600}>
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
              >
                {
                  accidentRoadConditionsData.map((entry, index) => <Cell fill={colours[index % colours.length]}/>)
                }
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          }

          {this.state.accidentLightConditionsShow &&
          <ResponsiveContainer width="90%" height={600}>
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
              >
                {
                  accidentLightConditionsData.map((entry, index) => <Cell fill={colours[index % colours.length]}/>)
                }
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          }

          {this.state.accidentVisibilityShow &&
          <ResponsiveContainer width="90%" height={600}>
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
              >
                {
                  accidentVisibilityData.map((entry, index) => <Cell fill={colours[index % colours.length]}/>)
                }
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          }

        </div>



        <div className="theft-graphs">
          <h1>Theft Graphs</h1>

          <div>
            <h3>Number of thefts: </h3>
            <VisibilitySensor onChange={this.onTheftVisibilityChange} offset={{ top: 10 }} delayedCall>
              <CountUp
                decimals={0}
                start={this.props.initialTheftCount}
                end={this.state.didTheftViewCountUp ? this.props.theftMarkers.length : 0}
                duration={5}
              />
            </VisibilitySensor>
          </div>


          <ResponsiveContainer width="90%" height={600}>
          <BarChart
            className="graph" id="acc-graphs-years" alt="bar chart"
            data={theftYearsData}>
            <XAxis dataKey="name" stroke="#00223e">
              <Label value="Thefts by Year" offset={0} position="bottom" />
            </XAxis>
            <YAxis stroke="#00223e" />
            <Bar type="monotone" dataKey="number_of_thefts" fill="#64aab4">
              <LabelList dataKey="number_of_thefts" position="top" />
            </Bar>
            <Tooltip/>
            <Line type="monotone" dataKey="number_of_thefts" stroke="#00223e" />
          </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="90%" height={600}>
          <LineChart
            className="graph" id="graph-1" alt="graph"
            data={theftBikeTypeData}>
            <h1>Stolen Bikes by Type</h1>
            <XAxis dataKey="name" stroke="#00223e">
              <Label value="Thefts by Bike Type" offset={0} position="bottom" />
            </XAxis>
            <YAxis stroke="#00223e" />
            <Tooltip/>
            <Line type="monotone" dataKey="number_stolen" stroke="#64aab4" activeDot={{r: 8}}/>
            <Legend />
          </LineChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="90%" height={600}>
          <PieChart
            className="graph" id="graph-6" alt="graph"
            width={800} height={600}
            onMouseEnter={this.onPieEnter}>
            <Pie
              data={theftTimeOfDayData}
              dataKey="value"
              nameKey="name"
              labelLine={true}
              label={true}
              fill="#8884d8"
            >
              {
                theftTimeOfDayData.map((entry, index) => <Cell fill={colours[index % colours.length]}/>)
              }
            </Pie>
          </PieChart>
          </ResponsiveContainer>

        </div>

      </div>
      )
  }
}