import Header from "./header";
import NavBar from "./Navbar";
import '../../App.css';
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend';
import {useDrag} from 'react-dnd';
import {useDrop} from 'react-dnd';
import {useState} from "react";

export default function Home() {

    const [selectedCountry, setSelectedCountry] = useState("USA");
    const [persona, setSelectedPersona] = useState("Researcher");
    const [basket, setBasket] = useState([])
    const [range, setRange] = useState('1990');

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setBasket([]);
    }

    const handlePersonaChange = (country) => {
        setSelectedPersona(country);
    }

    const years = [];
    for (let i = 1990; i < 2021; i++) {
        years.push(i)
    }


    const [annotations, setAnnotations] = useState([]);

    const rangeChange = () => {

        const v = document.getElementById("myRange")?.value;
        console.log("change", v);
        setRange(v);

    }

    return (
        <div>
            <Header />
            <div className='row'>
                <div className='col-md-2'><NavBar country={selectedCountry}/></div>
                <div className="col-md-1 vl"></div>
                <div className='col-md-8 main-container'>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <br/><br/><br/>
                                <input type="range" min="1990" max="2020" className="slider" id="myRange"
                                       onChange={rangeChange}></input>
                                <p>Year: <span id="demo">{range}</span></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <select onChange={(e) => {
                                handleCountryChange(e.target.value)
                            }}>
                                <option>USA</option>
                                <option>INDIA</option>
                                <option>CHINA</option>
                                <option>PHILIPPINES</option>
                                <option>IRAN</option>
                            </select>
                            <br/>
                            <select onChange={(e) => {
                                handlePersonaChange(e.target.value)
                            }}>
                                <option>Researcher</option>
                                <option>Government Official</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <div className=" row drag-drop-area">
                                <DragDropArea basket={basket} setBasket={setBasket} notes={setAnnotations}/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            {persona === "Researcher" &&
                                <div className="annotation">
                                    <h4>Click on the chart to write an annotation. The annotations are displayed
                                        below:</h4>
                                    <div>{annotations}</div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export function DragDropArea({isDragging, text, basket, setBasket, notes},) {
    return (
        <DndProvider backend={HTML5Backend}>

            <Basket basket={basket} setBasket={setBasket} notes={notes}/>
        </DndProvider>
    )
}

export const MenuCard = ({id, name, chart}) => {
    const [{isDragging}, dragRef] = useDrag({
        type: 'menuItem',
        item: {id, name, chart},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div className='pet-card' ref={dragRef}>
            {name}
            {isDragging}

        </div>
    )
}

export const Notes = (props) => {

    const [notes, setNotes] = useState("");

    const closeNote = () => {
        props.closeNote(notes)
    }
    return (
        <div>
            <div style={{backgroundColor: "rgba(90, 142, 184, 0.5", width: "200px"}}>
                <textarea onChange={(e) => setNotes(e.target.value)} type="text" placeholder="Add Notes.."></textarea>
                <br/>
                <button onClick={closeNote}>Add note</button>
            </div>
        </div>
    )
}

export const BasketChart = ({id, name, chart, anNotes}) => {
    const [{isDragging}, dragRef] = useDrag({
        type: 'menuItem',
        item: {id, name, chart},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    const [showNotes, setShowNotes] = useState(false);

    const addNotes = () => {
        setShowNotes(true);
    }

    const submitNotes = (notes) => {

        anNotes(notes);
        setShowNotes(false);
    }

    return (
        <div>
            <div onClick={addNotes} className='pet-card' ref={dragRef}>
                {name}
                {isDragging}
                {chart}
            </div>
            {showNotes ? <Notes closeNote={submitNotes}/> : null}
        </div>

    )
}

export const Basket = ({basket, setBasket, notes}) => {

    const [{isOver}, dropRef] = useDrop({

        accept: 'menuItem',
        drop: (item) => setBasket((basket) =>
            !basket.includes(item) ? [...basket, item] : basket),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    return (
        <div>
            <div style={{width: "800px", height: "600px", marginTop: "20px"}} className='basket' ref={dropRef}>
                {basket.map(menuItem => <BasketChart id={menuItem.id} name={menuItem.name} chart={menuItem.chart}
                                                     anNotes={notes}/>)}
                {isOver && <div>Drop Here!</div>}

            </div>

        </div>
    )
}
