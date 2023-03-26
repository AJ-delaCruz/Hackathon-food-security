import React from "react";
import RangeSlider from "./RangeSlider";

class Homepage extends React.Component {
    constructor(){
        super();

        this.minRange= 1970;
        this.maxRange= 2020;
        this.onCountryChange = this.onCountryChange.bind(this);
        this.onRangeChange = this.onRangeChange.bind(this);
    
      }
      onCountryChange(event){
        this.country=event.target.value;
        if(this.country === "India"){
          //handle
        } else if(this.country === "China") {
          //handle
        } else if(this.country === "USA") {
          //handle
        }
        
      }
      onRangeChange(min, max){
        this.rangeChangedDataGdp = JSON.parse(JSON.stringify(this.changedDataGdp));
        if(min != 1970 || max !=2020){
         //needs to be handled.
        }
        
      }
      render() {
    
        return (
            <RangeSlider
            min={1970}
            max={2020}
            onChange={({ min, max }) => {
              this.onRangeChange(min, max)
            }}
          />

        )}
};
 export default Homepage;