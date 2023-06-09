import React, {useEffect, useState} from 'react';
import * as XLSX from 'xlsx';
import MangoChart2 from './MangoChart2';
import mangoesData from '../../Data/Philippines_Mangoes_production.xlsx';
import MangoChart1 from "./MangoChart1";
import Header from "../Navbar/header";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function MangoData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(mangoesData);
                const buffer = await response.arrayBuffer();
                const workbook = XLSX.read(buffer, {type: 'array'});
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const data = XLSX.utils.sheet_to_json(worksheet, {header: 1, raw: false});
                console.log(data);
                setData(data.slice(1));
            } catch (error) {
                console.error('Error loading data: ', error);
            }
        };

        fetchData();
    }, []);

    return (

        <div>
            <div className="row">
                <Header/>
            </div>
            <div className='row'>
                <div className='col-md-2'><NavBar/></div>
                <h1>Philippines Mango</h1>
                <MangoChart1 data={data}/>
                <MangoChart2 data={data}/>
            </div>
            <Footer/>
        </div>

    );
}

export default MangoData;
