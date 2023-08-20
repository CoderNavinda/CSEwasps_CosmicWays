import { Dimensions, StyleSheet, Image, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import TripCard from "../../src/components/tripCard";
import { useState } from 'react';

const { width, height } = Dimensions.get('window');

export default function MyTips() {
  const navigation = useNavigation();

  const handleBack = () => {
      navigation.navigate(routes.HOME_SCREEN);
  }


  const [support, setSupport] = useState([
    { name: '', id: '1', first: true },
    { name: '', id: '2', first: true },
    { name: '', id: '3', first: true },
    { name: '', id: '4', first: true },
    { name: '', id: '5', first: true },
    { name: '', id: '6', first: true },
    { name: '', id: '7', first: false },
  ]);
    
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
                <TouchableOpacity style={styles.back} onPress={handleBack} >
                <View style={styles.backIcon} >
                <Ionicons name="chevron-back" size={24} color="white"/>
                </View>
                </TouchableOpacity>
                <Text style={styles.title}>My Charts</Text>
            </View>
            
            
          <View style={{marginTop: height * 0.125, flex: 1 }}>
            <FlatList 
              keyExtractor={(item) => item.id} 
              data={support} 
              renderItem={({ item }) => ( 
                <View style={[styles.aitem, !item.first && styles.lst]}>
                  <TripCard start="Earth" dest="Mars"
                            startCity="Colombo"
                            destCity="Olympus Mons"
                            date="Aug 20" time="0430h"
                            flight="AB889" durationDays={1}
                            durationHours={23}
                  />
                </View>
              )}
            />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  aitem: {
    width: width,
    height: height * 0.26,
    bottom: height * 0.12,
  },

  lst: {
    marginTop: height * 0.08,
    bottom: height * 0.2,
  },
  
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