import React, { useEffect, useRef } from 'react';
import styled from "styled-components";

const PhilippinesMap = () =>{
    const mapRef = useRef(null);

    useEffect(() => {
        //centered at 11.697591, 123.132078
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 11.697591, lng: 123.132078 },
            zoom: 5.6
        });

        const locations = [
            { lat: 15.8949, lng: 120.2863 }, //Pangasinan in Luzon
            { lat: 11.0050, lng: 122.5373 }, //West Visas
            { lat: 9.8169, lng: 124.0641 }, //Central Visas
            { lat: 7.3042, lng: 126.0893 }, //Davao Region
            { lat: 7.2047, lng: 124.2310 }, //Cotabato Province
        ];

        //add markers on each location
        locations.forEach(location => {
            new window.google.maps.Marker({
                position: location,
                map: map,
                title: 'Philippines'
            });
        });
    }, []);

    return <div ref={mapRef} style={{ height: '500px' }} />;
}

const IndiaMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 16.9124, lng: 80.6037 },
            zoom: 6
        });

        const locations = [
            { lat: 13.6288, lng: 79.4192 }, //Tirupati, Andhra Pradesh
            { lat: 17.6868, lng: 83.2185 } //Visakhapatnam, Andhra Pradesh
        ];

        locations.forEach(location => {
            new window.google.maps.Marker({
                position: location,
                map: map,
                title: 'India'
            });
        });
    }, []);

    return <div ref={mapRef} style={{ height: '500px' }} />;
}

const Mangos = () => {
    return (
        <Container>
            <h1>Specialty Crops - Mangos</h1>
            <MapsContainer>
                <MapContainer>
                    <h2>Philippines</h2>
                    <PhilippinesMap />
                </MapContainer>
                <MapContainer>
                    <h2>India</h2>
                    <IndiaMap />
                </MapContainer>
            </MapsContainer>
        </Container>
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
export default Mangos;
