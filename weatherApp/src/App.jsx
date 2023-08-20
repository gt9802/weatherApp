import { Box, styled, Paper, Typography } from '@mui/material';
import WeatherInfoComponent from './components/WeatherInfoComponent';
import CityComponent from './components/CityComponent';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./App.css";
import { useState } from 'react';
import axios from 'axios';
const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 10px',
  alignItems: 'center',
  fontFamily: 'Montserrat'
  
}))

const AppLabel = styled(Typography)({
  color: 'black',
  fontSize: '18px',
  fontWeight: 'bold'
})




function App() {
  const [location, setLocation]  = useState();
  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState();

  const fetchWeather = async() => {
    try{
      const response = await axios.get(`http://localhost:3000/api/weather?location=${location}`)
      if(response.data.cod == '200'){
        setWeatherData(response.data);
      }else{
        setError(response.data.message)
      }
      
    }catch(error){
      setWeatherData(null)
    }
    
    
  }

  return(
    <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'center', margin:'200px auto'}}>

      <Paper elevation={3} sx={{width: '380px'}}
    >
      <Container>
      <AppLabel> Weather App</AppLabel>
      {location && weatherData ? (
          <WeatherInfoComponent weatherData={weatherData} setWeatherData={setWeatherData}></WeatherInfoComponent>
      ): (
        <CityComponent setLocation={setLocation} fetchWeather={fetchWeather}></CityComponent>
      )}
      {error &<di>{error}</di>}
      </Container>
    </Paper>
 
    </Box>
    
  )
}

export default App