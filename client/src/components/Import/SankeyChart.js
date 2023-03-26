import React, {useEffect, useState} from 'react';
import {Chart} from 'react-google-charts';
import * as d3 from 'd3';
// import importData from '../../Data/FAOSTAT_Egypt_Wheat_data_4-9-2022.csv';
import {EgyptWheat2018, EgyptWheat2019, EgyptWheat2020} from "./EgyptWheat";
import {Button, Form} from 'react-bootstrap';

function SankeyChart() {
    let [year, setYear] = useState(2020);
    let [country, setCountry] = useState('Egypt');
    let [product, setProduct] = useState('Wheat');
    const [data, setData] = useState(null);
    const [pieData, setPieData] = useState(null);
    const [wheat, setWheat] = useState(null);

    let onButtonClick = (e) => {
        e.preventDefault();
        if (country === 'Egypt') {
            if (year === 2020) {
                setWheat(EgyptWheat2020);
            }
            if (year === 2019) {
                setWheat(EgyptWheat2019);
            }
            if (year === 2018) {
                setWheat(EgyptWheat2018);
            }
        }


    }

    useEffect(() => {
        if (!wheat) {
            return;
        }

        const chartData = [['From', 'To', 'Value']];
        const pieData = [['From', 'Value']];
        wheat.forEach((row) => {
            if (row[2] !== 0) {
                chartData.push([row[0], row[1], parseInt(row[2])]);
                // pieData.push([row[0], parseInt(row[2])]);

            }
        });
        setData(chartData);
        // setPieData(pieData);
    }, []);

    if (!data ||  !pieData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='col-md-8 main-container'>
            <div className="row">

                <div class="col-md-3">
                    <Form.Group>
                        <Form.Label>Year: </Form.Label>
                        <Form.Select value={year} required name='from' onChange={e => setYear(e.target.value)}>
                            <option value="">Select </option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                        </Form.Select>
                    </Form.Group>
                </div>

                <div class="col-md-3">
                    <Form.Group>
                        <Form.Label>Country: </Form.Label>
                        <Form.Select value={country} required name='to' onChange={e => setCountry(e.target.value)}>
                            <option value="">Select Country</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="Egypt">Egypt</option>
                        </Form.Select>
                    </Form.Group>
                </div>

                <div class="col-md-3">
                    <Form.Group>
                        <Form.Label>Product: </Form.Label>
                        <Form.Select value={product} onChange={e => setProduct(e.target.value)}>
                            <option value="">Product</option>
                            <option value="Wheat">Wheat</option>
                            <option value="Rice">Rice</option>
                        </Form.Select>
                    </Form.Group>
                </div>

                <div class="col-md-3">
                    <br/>
                    <button variant="secondary" className="pure-u-1-6 btn-spacing" align="center"
                            onClick={(e) => onButtonClick(e)}>
                        Submit
                    </button>
                </div>

                <div className="row">
                    <div id='chart-area'>
                        <CustomCharts displayChart={data}/>
                    </div>
                </div>
            </div>
        </div>


    )


}
function CustomCharts(props) {
    return (
        <div id='chart-area'>
            <div>

                <Chart
                    width={700}
                    height={'350px'}
                    chartType="Sankey"
                    loader={<div>Loading Chart</div>}
                    data={props.displayChart}
                    rootProps={{'data-testid': '1'}}
                />
            </div>
            <div>
                <Chart
                    chartType="PieChart"
                    data={props.displayPie}
                    width="50%"
                    height="400px"
                    legendToggle
                />
            </div>

        </div>
    );
}

export default SankeyChart;

