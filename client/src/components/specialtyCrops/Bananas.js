import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import Header from "../Navbar/header";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ChinaMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        //centered at 27.1317, 107.2663
        const map = new window.google.maps.Map(mapRef.current, {
            center: {lat: 27.1317, lng: 107.2663},
            zoom: 5
        });

        const locations = [
            {lat: 23.1317, lng: 113.2663}, // Guangdong
            {lat: 24.3255, lng: 109.4155}, //Guangxi
            {lat: 25.0453, lng: 102.7097}, //Yunnan
            {lat: 20.0200, lng: 110.3486}, //Hainan

        ];

        //add markers on each location
        locations.forEach(location => {
            new window.google.maps.Marker({
                position: location,
                map: map,
                title: 'China'
            });
        });
    }, []);

    return <div ref={mapRef} style={{height: '500px'}}/>;
}

const IndonesiaMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: {lat: -4.69931, lng: 109.0097},
            zoom: 6
        });

        const locations = [
            {lat: -4.5586, lng: 105.0097}, //Lampung
            {lat: -7.5361, lng: 112.17081}, //east java
            {lat: -7.0909, lng: 107.296093} //west java

        ];

        locations.forEach(location => {
            new window.google.maps.Marker({
                position: location,
                map: map,
                title: 'Indonesia'
            });
        });
    }, []);

    return <div ref={mapRef} style={{height: '500px'}}/>;
}

const Bananas = () => {
    return (
        <div>
            <div className="row">
                <Header/>
            </div>
            <div className='row'>
                <div className='col-md-2'><NavBar/></div>
                <Container>
                    <h1>Specialty Crops - Banana</h1>
                    <MapsContainer>
                        <MapContainer>
                            <h2>China</h2>
                            <ChinaMap/>
                        </MapContainer>
                        <MapContainer>
                            <h2>Indonesia</h2>
                            <IndonesiaMap/>
                        </MapContainer>
                    </MapsContainer>
                </Container>
            </div>
            <Footer/>

        </div>
    );
}
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const MapsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MapContainer = styled.div`
  width: 48%;
  margin-bottom: 20px;
`;
export default Bananas;
