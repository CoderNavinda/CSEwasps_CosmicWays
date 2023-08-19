import { Dimensions, StyleSheet, Image, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Circle, Line, Svg } from 'react-native-svg';
import TripCard from '../shared/tripCard';


const { width, height } = Dimensions.get('window');

export default function MyTips() {
  const handleBack = () => {
      console.log("working");
  }

    
  const cards = [];

  for (let i = 0; i < 4; i++) {

    cards.push(
      <View style={{top:i*185,} }>
            <TripCard/>
      </View>
    );
  }
    return (
        <View style={styles.container}>
            {/* Status bar */}
            <StatusBar style="light" />

            {/* Title */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={handleBack}>
                <View style={styles.backIcon} >
                <Ionicons name="chevron-back" size={24} color="white"/>
                </View>
                </TouchableOpacity>
                <Text style={styles.title}>My Charts</Text>
            </View>
            {cards}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#1C0E57',
    // overflow: 'hidden',
  },
  header: {
    position: 'absolute',
    left: width * 0.03,
    top: height * 0.06,
  },
  back: {
    width: width * 0.12,
    height: height * 0.06,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#12092F',
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'flex',
    shadowColor: 'rgba(32, 32, 32, 0.06)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  backIcon: {
    marginLeft: width * 0.025,
    marginTop: height * 0.01,
  },
  title: {
    position: 'absolute',
    left: width * 0.24,
    top: height * 0,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontFamily: 'roboto',
    fontWeight: '700',
    letterSpacing: 3,
    overflow: 'hidden',
  },

});