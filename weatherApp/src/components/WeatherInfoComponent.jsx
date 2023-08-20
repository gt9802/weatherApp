import { Image } from "@mui/icons-material"
import { styled, Box, Typography, Button, Icon } from "@mui/material"
import ThermostatIcon from '@mui/icons-material/Thermostat';


const WeatherComponent = styled(Box)({
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    
    
})

const Condition = styled(Typography)({
    margin: '20px',
    fontSize: '14px',
    "& span":{
        fontSize:'28px'
    }
})

const WeatherLogo = styled("img")({
    width: '100px',
    height: '100px',
    margin: '5px'
})

const Location = styled(Typography)({
    fontSize: '28px',
    textAlign:'center',
    fontWeight: 'bold'
})
const GoBack = styled(Button)({
   textTransform: 'none',
   backgroundColor:'black',
   color:'white',
   "&:hover":{
    backgroundColor:'grey'
   },
   marginTop:'10px'
})
const WeatherInfoLabel = styled(Typography)({
    fontSize: '14px',
    textAlign:'left',
    width: '90%',
    fontWeight: 'bold'
})

const WeatherInfoBox = styled(Box)({
    display:'flex',
    width:'100%',
    justifyContent:'space-around'
    
})
const WeatherInfo = styled(Box)({
    display:'flex',
    alignItems:'center'
    
})
const Logo = styled("img")({
    width: '30px',
    height: '30px',
    margin: '5px'
})
const WeatherInfoComponent = (props) => {
    const {weatherData,setWeatherData} = props;
  return (
    <>
    <WeatherComponent>
        <Condition>{weatherData.main.temp}°C | {weatherData.weather[0].main}</Condition>
        <WeatherLogo src={` https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}></WeatherLogo>
    </WeatherComponent>
    <Location>{weatherData.name}, {weatherData.sys.country}</Location>
    <WeatherInfoBox>
        <WeatherInfo><Logo src="thermometer.png"/>{weatherData.main.temp}°C</WeatherInfo>
        <WeatherInfo><Logo src="humidity.png"></Logo>{weatherData.main.humidity}</WeatherInfo>
        
    </WeatherInfoBox>
    <GoBack onClick={() => setWeatherData(null)}>go back</GoBack>

    </>
    
  )
}

export default WeatherInfoComponent