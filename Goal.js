import react, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import { ScrollView } from "react-native";
import GoalInputs from "./GoalInputs";

const Goal = () => {
    const [goal, setGoal] = useState(0);
    const [monday, setMonday] = useState(0);
    const [tuesday, setTuesday] = useState(0);
    const [wednesday, setWednesday] = useState(0);
    const [thursday, setThursday] = useState(0);
    const [friday, setFriday] = useState(0);
    const [saturday, setSaturday] = useState(0);
    const [sunday, setSunday] = useState(0);
    const [milesToGo, setMilesToGo] = useState();

    const storeGoal = async () => {
        try {
            await AsyncStorage.setItem('goal', JSON.stringify(goal));
            Keyboard.dismiss();
        } catch (error) {

        }
    }

    const storeMonday = async () => {
        try {
            await AsyncStorage.setItem('monday', JSON.stringify(monday));
            Keyboard.dismiss();
        } catch (error) {
            console.log(error)
        }
    }
    const storeTuesday = async () => {
        try {
            await AsyncStorage.setItem('tuesday', JSON.stringify(tuesday));
            Keyboard.dismiss();
        } catch (error) {
            console.log(error)
        }
    }
    const storeWednesday = async () => {
        try {
            await AsyncStorage.setItem('wednesday', JSON.stringify(wednesday));
            Keyboard.dismiss();
        } catch (error) {
            console.log(error)
        }
    }
    const storeThursday = async () => {
        try {
            await AsyncStorage.setItem('thursday', JSON.stringify(thursday));
            Keyboard.dismiss();
        } catch (error) {
            console.log(error)
        }
    }
    const storeFriday = async () => {
        try {
            await AsyncStorage.setItem('friday', JSON.stringify(friday));
            Keyboard.dismiss();
        } catch (error) {
            console.log(error)
        }
    }
    const storeSaturday = async () => {
        try {
            await AsyncStorage.setItem('saturday', JSON.stringify(saturday));
            Keyboard.dismiss();
        } catch (error) {
            console.log(error)
        }
    }
    const storeSunday = async () => {
        try {
            await AsyncStorage.setItem('sunday', JSON.stringify(sunday));
            Keyboard.dismiss();
        } catch (error) {
            console.log(error)
        }
    }


    const retrieveGoal = async () => {
        try {
            const value = await AsyncStorage.getItem('goal')
            setGoal(JSON.parse(value))
        } catch (err) {

        }
    }
    const retrieveMonday = async () => {
        try {
            const value = await AsyncStorage.getItem('monday')
            setMonday(JSON.parse(value))
        } catch (err) {

        }
    }
    const retrieveTuesday = async () => {
        try {
            const value = await AsyncStorage.getItem('tuesday')
            setTuesday(JSON.parse(value))
        } catch (err) {

        }
    }
    const retrieveWednesday = async () => {
        try {
            const value = await AsyncStorage.getItem('wednesday')
            setWednesday(JSON.parse(value))
        } catch (err) {

        }
    }
    const retrieveThursday = async () => {
        try {
            const value = await AsyncStorage.getItem('thursday')
            setThursday(JSON.parse(value))
        } catch (err) {

        }
    }
    const retrieveFriday = async () => {
        try {
            const value = await AsyncStorage.getItem('friday')
            setFriday(JSON.parse(value))
        } catch (err) {

        }
    }
    const retrieveSaturday = async () => {
        try {
            const value = await AsyncStorage.getItem('saturday')
            setSaturday(JSON.parse(value))
        } catch (err) {

        }
    }
    const retrieveSunday = async () => {
        try {
            const value = await AsyncStorage.getItem('sunday')
            setSunday(JSON.parse(value))
        } catch (err) {

        }
    }


    const resetMiles = async() =>{
        setMonday(0);
        setTuesday(0);
        setWednesday(0);
        setThursday(0);
        setFriday(0);
        setSaturday(0);
        setSunday(0);

        let key = [
            'monday', 
            'tuesday',
            'wednesday', 
            'thursday', 
            'friday', 
            'saturday', 
            'sunday'
        ]

        await AsyncStorage.multiRemove(key)
    }

    const resetGoal = async() =>{
        setGoal(0);
        await AsyncStorage.removeItem('goal');
        
    }
    useEffect(() => {
        retrieveGoal();
        retrieveMonday();
        retrieveTuesday();
        retrieveWednesday();
        retrieveThursday();
        retrieveFriday();
        retrieveSaturday();
        retrieveSunday();
    }, []);

    useEffect(() => {
        setMilesToGo(Number(goal) - (Number(monday) + Number(tuesday) + Number(wednesday) + Number(thursday) + Number(friday) + Number(saturday) + Number(sunday)));
    }, [monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal])

    return (
        <ScrollView keyboardShouldPersistTaps='handled' goal={goal} >
            {/* set goal */}
            <View style={styles.goalContainer}>
                <Text style={styles.goalText}>Goal: {goal}  Miles to go: {milesToGo}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.goalInput}
                        type="number"
                        placeholder="enter goal"
                        keyboardType="numeric"
                        value={goal}
                        onChangeText={(value) => setGoal(value)}
                    />
                </View>
                <View style={styles.goalBtnContainer}>
                    <TouchableOpacity style={styles.goalBtn} onPress={() => storeGoal()}>
                        <Text style={styles.goalBtnText}>Submit Goal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.goalBtn} onPress={() => resetGoal()}>
                        <Text style={styles.goalBtnText}>Reset Goal</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.weekDayContainer}>
                <View style={styles.milesInput}>
                    <Text style={styles.weekDayText}>Monday</Text>
                    <TextInput style={styles.weekDayInput}
                        type="number"
                        placeholder="enter miles"
                        keyboardType="numeric"
                        value={monday}
                        onChangeText={(value) => setMonday(value)}
                    />
                    <TouchableOpacity style={styles.milesBtn} onPress={() => storeMonday()}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.milesInput}>
                    <Text style={styles.weekDayText}>Tuesday</Text>
                    <TextInput style={styles.weekDayInput}
                        type="number"
                        placeholder="enter miles"
                        keyboardType="numeric"
                        value={tuesday}
                        onChangeText={(value) => setTuesday(value)}
                    />
                    <TouchableOpacity style={styles.milesBtn} onPress={() => storeTuesday()}>
                        <Text style={styles.milesBtnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.milesInput}>
                    <Text style={styles.weekDayText}>Wednesday</Text>
                    <TextInput style={styles.weekDayInput}
                        type="number"
                        placeholder="enter miles"
                        keyboardType="numeric"
                        value={wednesday}
                        onChangeText={(value) => setWednesday(value)}
                    />
                    <TouchableOpacity style={styles.milesBtn} onPress={() => storeWednesday()}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.milesInput}>
                    <Text style={styles.weekDayText}>Thursday</Text>
                    <TextInput style={styles.weekDayInput}
                        type="number"
                        placeholder="enter miles"
                        keyboardType="numeric"
                        value={thursday}
                        onChangeText={(value) => setThursday(value)}
                    />
                    <TouchableOpacity style={styles.milesBtn} onPress={() => storeThursday()}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.milesInput}>
                    <Text style={styles.weekDayText}>Friday</Text>
                    <TextInput style={styles.weekDayInput}
                        type="number"
                        placeholder="enter miles"
                        keyboardType="numeric"
                        value={friday}
                        onChangeText={(value) => setFriday(value)}
                    />
                    <TouchableOpacity style={styles.milesBtn} onPress={() => storeFriday()}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.milesInput}>
                    <Text style={styles.weekDayText}>Saturday</Text>
                    <TextInput style={styles.weekDayInput}
                        type="number"
                        placeholder="enter miles"
                        keyboardType="numeric"
                        value={saturday}
                        onChangeText={(value) => setSaturday(value)}
                    />
                    <TouchableOpacity style={styles.milesBtn} onPress={() => storeSaturday()}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.milesInput}>
                    <Text style={styles.weekDayText}>Sunday</Text>
                    <TextInput style={styles.weekDayInput}
                        type="number"
                        placeholder="enter miles"
                        keyboardType="numeric"
                        value={sunday}
                        onChangeText={(value) => setSunday(value)}
                    />
                    <TouchableOpacity style={styles.milesBtn} onPress={() => storeSunday()}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.resetMilesBtn} onPress={() => resetMiles()}>
                    <Text style={styles.resetMilesBtnText}>Reset Miles</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    goalBtnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        backgroundColor: '#F5F5F5'
    },


    goalText: {
        fontSize: 30,
        marginBottom: 30,
        color: '#ff8d00',
        fontWeight: 700,
        textAlign: 'center',
        marginTop: 20,
    },

    goalInput: {
        marginLeft: '22%',
        height: 50,
        width: 200,
        textAlign: 'center',
        borderBottomWidth: 1,
        marginRight: 16,

    },

    weekDayInput: {
        position: 'absolute',
        left: 120,
        borderBottomWidth: 1,
        width: 100,
        height: 40,
        marginBottom: 10,
        textAlign: 'center',
    },

    weekDayContainer: {
        marginTop: 80,
        marginLeft: 50,
    },

    weekDayText: {
        fontSize: 20,
        marginBottom: 10,
    },

    milesInput: {
        display: "flex",
        flexDirection: 'row',
    },

    goalBtn: {
        marginTop: 20,
        backgroundColor: '#ff8d00',
        width: 100,
        height: 40,
        borderRadius: 60,
    },
    resetBtn: {
        marginTop: 20,
        backgroundColor: '#ff8d00',
        width: 100,
        height: 40,
        borderRadius: 60,
    },

    goalBtnText: {
        textAlign: 'center',
        top: '26%',
        color: '#eee',
    },
    resetMilesBtn: {
        marginTop: 20,
        backgroundColor: '#ff8d00',
        width: 100,
        height: 40,
        borderRadius: 60,   
    },
    
    resetMilesBtnText: {
        textAlign: 'center',
        top: '26%',
        color: '#eee',
    },

    milesBtn: {
        position: 'absolute',
        left: 250,
        top: 15,
    },
    
    milesBtnText: {
        textAlign: 'center',
        top: '26%',
    }

});
export default Goal;