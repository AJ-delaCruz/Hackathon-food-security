import React from 'react';
import { Chart } from 'react-google-charts';

function WalnutChart1({ data }) {
    const chartData = [['Year', 'Area Harvested', 'Production']];

    chartData.push(
        ...data
            .map(([year, area, production]) => [parseInt(year), parseInt(area), parseInt(production)])
    );

    return (
        <Chart
            width={'100%'}
            height={'500px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
                title: 'Iran (Islamic Republic of) - Area Harvested & Production',
                titleTextStyle: {
                    fontSize: 18,
                    bold: true,
                },
                chartArea: {
                    width: '80%',
                    height: '70%',
                },
                hAxis: {
                    title: 'Year',
                    format: '####',
                },
                vAxes: [
                    {
                        title: 'ha',
                        format: '####',
                    },
                    {
                        title: 'Tons',
                        format: '####',

                    },
                ],
                series: {
                    0: {
                        targetAxisIndex: 0,
                        lineWidth: 3,
                    },
                    1: {
                        targetAxisIndex: 1,
                        lineWidth: 3,
                    },
                },
            }}
            rootProps={{ 'data-testid': '2' }}
        />
    );
}

export default WalnutChart1;
