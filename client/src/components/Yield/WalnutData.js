import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import walnutsData from '../../Data/Iran_FAOSTAT_data_en_11-11-2022.xlsx';
import WalnutChart1 from "./WalnutChart1";
import WalnutChart2 from "./WalnutChart2";

function WalnutData() {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(walnutsData);
                const buffer = await response.arrayBuffer();
                const workbook = XLSX.read(buffer, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const sheetName2 = workbook.SheetNames[1];

                const worksheet = workbook.Sheets[sheetName];
                const worksheet2 = workbook.Sheets[sheetName2];

                const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false });
                const data2 = XLSX.utils.sheet_to_json(worksheet2, { header: 1, raw: false });

                console.log(data);
                setData(data.slice(1));
                setData2(data2.slice(1));
            } catch (error) {
                console.error('Error loading data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Iran Walnuts</h1>
            <WalnutChart1 data={data} />
            <WalnutChart2 data={data2} />
        </div>
    );
}

export default WalnutData;
