import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import Header from "../Navbar/header";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const CaliforniaMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {

        const map = new window.google.maps.Map(mapRef.current, {
            center: {lat: 37.9176, lng: -121.1710},
            zoom: 7
        });

        const locations = [
            {lat: 36.6066, lng: -120.1890}, //San Joaquin County
            {lat: 38.5816, lng: -121.4944}, //Sacramento
        ];

        //add markers on each location
        locations.forEach(location => {
            new window.google.maps.Marker({
                position: location,
                map: map,
                title: 'California'
            });
        });
    }, []);

    return <div ref={mapRef} style={{height: '500px'}}/>;
}

const IranMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: {lat: 36.6420, lng: 52.0790},
            zoom: 5
        });

        const locations = [
            {lat: 30.2839, lng: 57.0834}, //kerman
            {lat: 34.3277, lng: 47.0778}, //kermanshah
            {lat: 34.7983, lng: 48.5148}, //hamedan
            {lat: 33.5818, lng: 48.3998}, //lorestan
            {lat: 30.7246, lng: 50.8456}, //kohgiloyeh
            {lat: 35.1020, lng: 59.1042}, //khorasanrazavi
            {lat: 35.5685, lng: 45.3991}, //bakhtiari
            {lat: 38.4281, lng: 45.9071}, //east azerbaiajn
            {lat: 37.7595, lng: 45.0000}, //west azerbaiajn
            {lat: 34.6962, lng: 49.6911}, //markazi
        ];

        locations.forEach(location => {
            new window.google.maps.Marker({
                position: location,
                map: map,
                title: 'Iran'
            });
        });
    }, []);

    return <div ref={mapRef} style={{height: '500px'}}/>;
}

const Walnuts = () => {
    return (
        <div>
            < div className="row">
                <Header/>
            </div>
            <div className='row'>
                <div className='col-md-2'><NavBar/></div>
                <Container>
                    <h1>Specialty Crops - Walnuts</h1>
                    <MapsContainer>
                        <MapContainer>
                            <h2>California</h2>
                            <CaliforniaMap/>
                        </MapContainer>
                        <MapContainer>
                            <h2>Iran</h2>
                            <IranMap/>
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
export default Walnuts;
