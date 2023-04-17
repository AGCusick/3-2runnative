import react, { useEffect, useState } from "react";
import axios from 'axios';
import { Platform, View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Location from 'expo-location';
import PicIcon from "./PicIcon";


const Weather = () => {
  const url = 'http://api.weatherapi.com/v1/current.json?key=6e6263afb84f44279f731543222510&q=London&aqi=no'
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null)
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [temp, setTemp] = useState('');
  const [wind, setWind] = useState('');
  const [windDir, setWindDir] = useState('');
  const [gust, setGust] = useState('');
  const [precip, setPrecip] = useState('');
  const [iPic, setIpic] = useState('');
  const [picName, setPicName] = useState('');
  const [iconUrl, setIconUrl] = useState('');

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLat(location.coords.latitude);
      setLong(location.coords.longitude);
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=6e6263afb84f44279f731543222510&q=${lat},${long}&aqi=no`);
      setCity(response.data.location.name);
      setState(response.data.location.region);
      setTemp(response.data.current.temp_f);
      setWind(response.data.current.wind_mph);
      setWindDir(response.data.current.wind_dir);
      setGust(response.data.current.gust_mph);
      setPrecip(response.data.current.precip_in);
      setPicName(response.data.current.condition.icon.slice(-7));
      setIconUrl(response.data.current.condition.icon)
      setIpic(picName)
  
    
      })();
  
  }, [lat, picName, iconUrl]);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (

    <View style={styles.weatherContainer}>
      <View style={styles.infoContainer}>
        <PicIcon iPic={iPic} picName={picName} iconUrl={iconUrl} />
        <Text style={styles.weatherText}>{city}, {state} </Text>
        <Text style={styles.weatherText}>Current temp: {Math.round(temp)}°F</Text>
        <Text style={styles.weatherText}>Wind: {windDir}, {Math.round(wind)} mph</Text>
        <Text style={styles.weatherText}>Gusts: {Math.round(gust)} mph</Text>
        <Text style={styles.weatherText}>Current precip: {precip}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoContainer: {
    marginTop: -150,
  },

  weatherText: {
    fontSize: 20,
    color: '#ff8d00',

  },
})

export default Weather;