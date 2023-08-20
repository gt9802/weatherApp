import { styled, Box, Typography, TextField, Button, Input } from "@mui/material"



const WeatherLogo = styled("img")({
    width: '140px',
    height: '140px',
    margin: '40px'
})

const CityLabel = styled(Typography)({
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px auto'
})

const SearchBox = styled(Box)({
    display: "flex",
    
})

const CityComponent = (props) => {
    const {setLocation, fetchWeather} = props;
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems:"center"}}>
        <WeatherLogo src="logo.png"></WeatherLogo>
        <CityLabel>Find weather of any city</CityLabel>
        <SearchBox>
        <TextField placeholder="enter city" onChange={(e) => setLocation(e.target.value)} InputProps={{ height:'40px'}}  sx={{ "& .MuiOutlinedInput-root":{height:'40px', marginRight:'5px'}}}></TextField>
        <Button  onClick={fetchWeather} variant={"contained"} sx={{textTransform: 'none' }}>search</Button>
        </SearchBox>
       
        
    </Box>
  )
}

export default CityComponent