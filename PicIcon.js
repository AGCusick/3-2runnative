import react from "react";

import { View, Text, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

const PicIcon = ({ picName, iconUrl }) => {
    const [picture, setPicture] = useState();

    useEffect(() => {
        // night icons
        if (picName == '113.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/113.png'))
        } else if (picName == '116.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/116.png'))
        } else if (picName == '119.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/119.png'))
        } else if (picName == '122.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/122.png'))
        } else if (picName == '143.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/143.png'))
        } else if (picName == '176.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/176.png'))
        } else if (picName == '179.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/179.png'))
        } else if (picName == '182.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/182.png'))
        } else if (picName == '185.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/185.png'))
        } else if (picName == '200.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/200.png'))
        } else if (picName == '227.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/227.png'))
        } else if (picName == '230.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/230.png'))
        } else if (picName == '248.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/248.png'))
        } else if (picName == '260.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/260.png'))
        } else if (picName == '263.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/263.png'))
        } else if (picName == '266.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/266.png'))
        } else if (picName == '281.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/281.png'))
        } else if (picName == '284.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/284.png'))
        } else if (picName == '293.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/293.png'))
        } else if (picName == '296.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/296.png'))
        } else if (picName == '299.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/299.png'))
        } else if (picName == '302.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/302.png'))
        } else if (picName == '305.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/305.png'))
        } else if (picName == '308.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/308.png'))
        } else if (picName == '311.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/311.png'))
        } else if (picName == '314.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/314.png'))
        } else if (picName == '317.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/317.png'))
        } else if (picName == '320.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/320.png'))
        } else if (picName == '323.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/323.png'))
        } else if (picName == '326.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/326.png'))
        } else if (picName == '329.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/329.png'))
        } else if (picName == '332.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/332.png'))
        } else if (picName == '335.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/335.png'))
        } else if (picName == '338.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/338.png'))
        } else if (picName == '350.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/350.png'))
        } else if (picName == '353.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/353.png'))
        } else if (picName == '356.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/356.png'))
        } else if (picName == '359.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/359.png'))
        } else if (picName == '362.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/362.png'))
        } else if (picName == '365.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/365.png'))
        } else if (picName == '368.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/368.png'))
        } else if (picName == '371.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/371.png'))
        } else if (picName == '374.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/374.png'))
        } else if (picName == '377.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/377.png'))
        } else if (picName == '386.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/386.png'))
        } else if (picName == '389.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/389.png'))
        } else if (picName == '392.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/392.png'))
        } else if (picName == '395.png' && iconUrl.includes('night')) {
            setPicture(require('./Icons/night/395.png'))

            // day icons
        } else if (picName == '113.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/113.png'))
        } else if (picName == '116.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/116.png'))
        } else if (picName == '119.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/119.png'))
        } else if (picName == '122.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/122.png'))
        } else if (picName == '143.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/143.png'))
        } else if (picName == '176.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/176.png'))
        } else if (picName == '179.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/179.png'))
        } else if (picName == '182.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/182.png'))
        } else if (picName == '185.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/185.png'))
        } else if (picName == '200.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/200.png'))
        } else if (picName == '227.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/227.png'))
        } else if (picName == '230.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/230.png'))
        } else if (picName == '248.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/248.png'))
        } else if (picName == '260.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/260.png'))
        } else if (picName == '263.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/263.png'))
        } else if (picName == '266.png' && iconUrl.daydes('day')) {
            setPicture(require('./Icons/day/266.png'))
        } else if (picName == '281.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/281.png'))
        } else if (picName == '284.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/284.png'))
        } else if (picName == '293.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/293.png'))
        } else if (picName == '296.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/296.png'))
        } else if (picName == '299.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/299.png'))
        } else if (picName == '302.png' && iconUrl.daydes('day')) {
            setPicture(require('./Icons/day/302.png'))
        } else if (picName == '305.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/305.png'))
        } else if (picName == '308.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/308.png'))
        } else if (picName == '311.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/311.png'))
        } else if (picName == '314.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/314.png'))
        } else if (picName == '317.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/317.png'))
        } else if (picName == '320.png' && iconUrl.daydes('day')) {
            setPicture(require('./Icons/day/320.png'))
        } else if (picName == '323.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/323.png'))
        } else if (picName == '326.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/326.png'))
        } else if (picName == '329.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/329.png'))
        } else if (picName == '332.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/332.png'))
        } else if (picName == '335.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/335.png'))
        } else if (picName == '338.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/338.png'))
        } else if (picName == '350.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/350.png'))
        } else if (picName == '353.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/353.png'))
        } else if (picName == '356.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/356.png'))
        } else if (picName == '359.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/359.png'))
        } else if (picName == '362.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/362.png'))
        } else if (picName == '365.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/365.png'))
        } else if (picName == '368.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/368.png'))
        } else if (picName == '371.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/371.png'))
        } else if (picName == '374.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/374.png'))
        } else if (picName == '377.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/377.png'))
        } else if (picName == '386.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/386.png'))
        } else if (picName == '389.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/389.png'))
        } else if (picName == '392.png' && iconUrl.includes('day')) {
            setPicture(require('./Icons/day/392.png'))
        } else setPicture(require('./Icons/day/395.png'))
        

    }, [picName, iconUrl])
    return (
        <View>
            <Image style={styles.weatherImg}
                source={picture}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    weatherImg: {
        width: 100, 
        height: 100,
    },
})
export default PicIcon;
