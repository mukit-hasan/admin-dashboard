import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries, AxisModel } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header} from '../../components';



type CustomAxisModel = AxisModel & {
  valueType: 'Category' | 'DateTime' | 'Double'; // Adjust the possible types based on your use case
};

const Area = () => {
  const { currentMode } = useStateContext()
  
  const lineX: CustomAxisModel = LinePrimaryXAxis as CustomAxisModel
  const lineY: CustomAxisModel =  {...LinePrimaryYAxis, valueType: 'Double', rangePadding: 'None', };

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl '>
      <Header category='Chart' title='Inflation Rate' />
      <div className='w-full'>
        <div>
          <ChartComponent
            id='line-chart'
            height='420px'
            primaryXAxis={lineX}
            primaryYAxis={lineY}
            chartArea={{ border: { width: 0 } }}
            background={currentMode === 'Dark' ? '#20232A' : 'white'}
            tooltip={{enable: true}}
            legendSettings={currentMode === 'Dark' ? { background: '#33373E', textStyle:{ color:'white'} } : {background: 'rgba(0, 0, 0, 0.5)' ,textStyle:{color:'dark'} } }
          >
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>        
            <SeriesCollectionDirective>
              {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </div>
  )
}

export default Area