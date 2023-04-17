import react from "react";
import { Text, View, StyleSheet } from "react-native";


const Home = ({navigation}) =>{

    return (
        <View style={styles.homeContainer}>
            {/* <Text style={styles.titleText}>3-2Run</Text> */}
            <Text style={styles.homeText} onPress={() => navigation.navigate('Goal')}>Set Goal</Text>
            <Text style={styles.homeText} onPress={() => navigation.navigate('PaceCalculator')}>Pace Calculator</Text>
            <Text style={styles.homeText} onPress={() => navigation.navigate('Weather')}>Check Weather</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center',
    },

    titleText: {
        fontSize: 40,
        
        top: '-12%',
        color: '#ff8d00',
    },

    homeText: {
        fontSize: 25,
        marginBottom: 100,
        color: '#ff8d00',
        fontWeight: 600,
    },
  });

  export default Home;