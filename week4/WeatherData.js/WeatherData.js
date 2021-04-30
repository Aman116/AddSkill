import React, { Component } from 'react';
import Axios from 'axios';
class WeatherData extends Component {
    constructor() {
        super()
        this.state = {
            dataFetched: false,
            description:' ',
            pressure:' ',
            temp_max:' ',
            temp_min:' ',
            setData:' '
        }
    }
   /* componentDidMount() {
       Axios.get("http://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric&APPID=a0e78d3b449db7059df0a38abd3952f8")
            .then((response) => {
                this.setState({
                    description: response.data.weather[0].description,
                    pressure:   response.data.main.pressure,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min,
                    dataFetched: true,
                })
            })
            .catch((err) => {
                console.log('error has occured');
            })
    }*/
    GetData1=(event)=>{
        this.setState({
            setData:event.target.value,
        })

    }
    GetData=()=>{
        //const setdata=event.target.value;
        const {setData}=this.state;
        Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${setData}&units=metric&APPID=a0e78d3b449db7059df0a38abd3952f8`)
        .then((response) => {
            this.setState({
                description: response.data.weather[0].description,
                pressure:   response.data.main.pressure,
                temp_max: response.data.main.temp_max,
                temp_min: response.data.main.temp_min,
                dataFetched: true,
                //console.log(response)
            })
        })
        .catch((err) => {
            console.log('error has occured');
        })
    }
    render(){
        const {description, pressure, temp_max, temp_min}= this.state;
        console.log(description);
        console.log(pressure);
        console.log(temp_min);
        console.log(temp_max);
        return(
            <div>
                <input onChange={this.GetData1} type='text' />
                <button onClick={this.GetData}>Clicked</button>
                <h1>{description}</h1>
                <h1>{pressure}</h1>
                <h1>{temp_max}</h1>
                <h1>{temp_min} degree celsius</h1>
            </div>
        );
    }
}

export default WeatherData;