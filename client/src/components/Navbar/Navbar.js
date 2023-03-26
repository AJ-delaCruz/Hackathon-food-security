import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";

const Navbar = () => {

  const [droppedCharts, setDroppedCharts] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const chart = JSON.parse(event.dataTransfer.getData('chart'));
    setDroppedCharts((droppedCharts) => [...droppedCharts, chart]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragStart = (event, chart) => {
    event.dataTransfer.setData('chart', JSON.stringify(chart));
  };

  const nav1items = [
    { id: 1, name: 'GDP Growth Rate', chart: <DataChart country={props.country} /> },
        { id: 2, name: 'GDP Current USD', chart: <GDPCurrentUSD country={props.country} /> },
        { id: 3, name: 'Current Account Balance', chart: <CurrentACBal country={props.country} /> },
        { id: 4, name: 'FDI net', chart: <NetInflowChart country={props.country} /> },
        { id: 5, name: 'FDI net outflows - BoP', chart: <FDIBoP country={props.country} /> },
        { id: 6, name: 'FDI inflows', chart: ': No data present' },
        { id: 7, name: 'FDI net outflows % GDP', chart: <FDINetPercGDP country={props.country} /> },
    ];

  const nav2items = [
    { id: 1, name: 'Contribution', chart: <AgriculturalDataChart country={props.country} /> },
    { id: 2, name: 'Manufactoring', chart: <ManufactoringDataChart country={props.country} /> },
    { id: 3, name: 'Fertilizers', chart: <FertilizersDataChart country={props.country} /> },
    { id: 4, name: 'Fertilizer Production', chart: <FertilizersProductionChart country={props.country} /> },
    { id: 5, name: 'Forestery and Fishing', chart: ': No data present' },
];

  const nav3items = [
    { id: 1, name: 'Reservers - imports', chart: ': No data present' },
        { id: 2, name: 'Reservers - gold', chart: ': No data present' },
        { id: 3, name: '% GNI', chart: ': No data present' },
        { id: 4, name: 'Total Debt', chart: ': No data present' },
        { id: 5, name: 'Debt service', chart: ': No data present' },
        { id: 6, name: 'GNI current', chart: ': No data present' },
    ];

  return (
    <div>
      <nav>
        <ul>
          <li onDrop={handleDrop} onDragOver={handleDragOver}>
          Macroeconomic(USD)
            {nav1items.map((chart) => (
              <div key={chart.id} draggable onDragStart={(event) => handleDragStart(event, chart)}>
                {chart.name}
              </div>
            ))}
          </li>
          <li onDrop={handleDrop} onDragOver={handleDragOver}>
          Agricultural
            {nav2items.map((chart) => (
              <div key={chart.id} draggable onDragStart={(event) => handleDragStart(event, chart)}>
                {chart.name}
              </div>
            ))}
          </li>
          <li onDrop={handleDrop} onDragOver={handleDragOver}>
          Debt
            {nav3items.map((chart) => (
              <div key={chart.id} draggable onDragStart={(event) => handleDragStart(event, chart)}>
                {chart.name}
              </div>
            ))}
          </li>
        </ul>
      </nav>
      <main>
        {droppedCharts.map((chart) => (
          <div key={chart.id}>{chart.chart}</div>
        ))}
      </main>
    </div>
  );


};
export default Navbar;

/* {<Navbar expand="md">
      <Navbar.Toggle aria-controls="menu" />
      <Navbar.Collapse id="menu">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link eventKey="nav1">Nav1</Nav.Link>
            <Nav>
              <Nav.Item>
                <Nav.Link eventKey="nav1a">a</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="nav1b">b</Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="nav2">Nav2</Nav.Link>
            <Nav>
              <Nav.Item>
                <Nav.Link eventKey="nav2c">c</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="nav2d">d</Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="nav3">Nav3</Nav.Link>
            <Nav>
              <Nav.Item>
                <Nav.Link eventKey="nav3e">e</Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar> } */