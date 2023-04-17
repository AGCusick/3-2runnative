import react from "react";
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const PaceCalulator = () => {

    const [paceTime, setPaceTime] = useState({
        hours: (0),
        minutes: (0),
        seconds: (0),
        distance: (0)
    });

    const [secondsPace, setSecondsPace] = useState(0);
    const [runPace, setRunPace] = useState(0);

    const handlePaceChange = (time, value) => {
        setPaceTime({
            ...paceTime,
            [time]: value
        })
    }

    const handlePress = () => {
        let minuteFraction = paceTime.seconds / 60;
        let getMinutes = ((Number(paceTime.hours) * 60 + Number(paceTime.minutes) + minuteFraction) / Number(paceTime.distance));
        setSecondsPace(((getMinutes - Math.floor(getMinutes)) * 60).toFixed(0));
        setRunPace(Math.floor(getMinutes));
    }

    const handleReset = () => {
        setPaceTime({
            hours: (0),
            minutes: (0),
            seconds: (0),
            distance: (0)
        });

        setRunPace(null);
        setSecondsPace(null);
    }
    return (
        <View style={styles.paceCalculatorContainer}>
            <View>
                <Text style={styles.titleText}>Pace Calculator</Text>
                <TextInput
                    style={styles.paceCalculatorInput}
                    type='number'
                    keyboardType="numeric"
                    placeholder="distance(miles)"
                    value={paceTime.distance}
                    onChangeText={(value) => (handlePaceChange('distance', value))}
                />
            </View>
            <View>
                <TextInput
                    style={styles.paceCalculatorInput}
                    type='number'
                    keyboardType="numeric"
                    placeholder="hours"
                    value={paceTime.hours}
                    onChangeText={(value) => (handlePaceChange('hours', value))}
                />
            </View>
            <View>
                <TextInput
                    style={styles.paceCalculatorInput}
                    type='number'
                    keyboardType="numeric"
                    placeholder="minutes"
                    value={paceTime.minutes}
                    onChangeText={(value) => (handlePaceChange('minutes', value))}
                />
            </View>
            <View>
                <TextInput
                    style={styles.paceCalculatorInput}
                    type='number'
                    keyboardType="numeric"
                    placeholder="seconds"
                    value={paceTime.seconds}
                    onChangeText={(value) => (handlePaceChange('seconds', value))}
                />
            </View>
            <View>
                <Text style={styles.pace}>Pace: {runPace} min: {secondsPace} sec / mile   </Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => handlePress()} style={styles.btnStyle}>
                    <Text style={styles.submitBtn}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleReset()} style={styles.btnStyle}>
                    <Text style={styles.resetBtn}> Reset </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    paceCalculatorContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleText: {
        top: -30,
        fontSize: 30,
        color: '#ff8d00',
    },

    paceCalculatorInput: {
        top: -30,
        marginTop: 20,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ff8d00',
        width: 150,
    },

    pace: {
        top: -30,
        marginTop: 50,
        fontSize: 26,
    },

    btnContainer: {
        top: -30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300,
        marginTop: 35,
    },

    submitBtn: {
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 16,
        paddingLeft: 16,
        borderRadius: 30,
        textAlign: 'center',
        backgroundColor: '#ff8d00',
        borderColor: '#eee',  
        color: '#eee',  
    },
    resetBtn: {
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 16,
        paddingLeft: 16,
        borderRadius: 30,
        textAlign: 'center',
        backgroundColor: '#ff8d00',
        borderColor: '#eee',
        color: '#eee',
    },

});

export default PaceCalulator;