import React from 'react';
import { Chart } from 'react-google-charts';

function MangoChart2({ data }) {
    const chartData = [['Year', 'Area Harvested', 'Yield']];

    chartData.push(
        ...data
            .map(([year, area, yieldVal]) => [parseInt(year), parseInt(area), parseInt(yieldVal)])
    );


    return (
        <Chart
            width={'100%'}
            height={'500px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
                title: 'Philippines Mango Production - Area Harvested & Yield',
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
                        title: 'hg/ha',
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
            rootProps={{ 'data-testid': '1' }}
        />
    );
}

export default MangoChart2;
