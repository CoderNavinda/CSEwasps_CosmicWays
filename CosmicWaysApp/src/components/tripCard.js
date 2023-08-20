import { TouchableOpacity } from 'react-native';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';


const { width, height } = Dimensions.get('window');

export default function TripCard({start, dest, startCity, destCity, date, time, flight, durationDays, durationHours}) {

    const handleClick = () => {
      console.log("ok with it");
    };

  return (
         <TouchableOpacity onPress={handleClick}>
              {/* Flight tip backgroud */}
              <View style={styles.blueBox} />

              <View style={{ flexDirection: 'row' }}>
                <View style={styles.leftElipse} />
                <View style={styles.rightElipse} />
              </View>

              <View style={styles.cardBottomText}>
                <Text style={styles.cdLabel}>Date &amp; time</Text>
                <Text style={styles.cdDateTime}>{date}, {time}</Text>
                <Text style={styles.cdFlightNumberLabel}>Flight Number</Text>
                <Text style={styles.cdFlightNumber}>{flight}</Text>
              </View>

              <View style={styles.cardTopText}>
                <Text style={styles.cdTitleEarth}>{start}</Text>
                <View style={styles.cdTitle}>
                  <Text style={styles.cdSubTitleLeft}>{startCity}</Text>
                  <Text style={styles.cdSubTitleRight}>{destCity}</Text>
                </View>
                <Text style={styles.cdTitleMars}>{dest}</Text>
                <Text style={styles.cdTime}>{durationDays}d/{"\n"}{durationHours}h</Text>
              </View>

              <View style={styles.cdLine} />

            <View style={styles.RocketImage}>
              <Image source={require('../assets/Route.png')} style={styles.image} />
            </View>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    blueBox: {
    flex:1,
    width: width*0.9,
    height: height * 0.244,
    left: width * 0.05,
    borderRadius: 15,
    top: height * 0.2,
    backgroundColor: '#12092F',
    position: 'absolute',
  },

  leftElipse: {
    position:'absolute',
    width: width * 0.05,
    height: height * 0.02,
    left: width * 0.026,
    top: height*0.362,
    borderRadius: 25,
    backgroundColor: '#1C0E57', 
  },
  rightElipse: {
    position:'absolute',
    width: width * 0.05,
    height: height * 0.02,
    left: width * 0.92,
    top: height*0.362,
    borderRadius: 25,
    backgroundColor: '#1C0E57',
  },

  cardBottomText: {
    width: width * 0.78,
    height: height * 0.1,
    left: width * 0.114,
    top: height * 0.376,
    position: 'absolute',
  },
  cdLabel: {
    width: width * 0.3,
    left: 0,
    top: 0,
    position: 'absolute',
    color: '#8C8A93',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '400',
    textTransform: 'uppercase',
    lineHeight: height * 0.022,
  },
  cdDateTime: {
    width: width * 0.30,
    left: 0,
    top: height * 0.028,
    position: 'absolute',
    color: '#EAEDFA',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '400',
    lineHeight: height * 0.022,
  },
  cdFlightNumberLabel: {
    width: width * 0.31,
    left: width * 0.47,
    top: 0,
    position: 'absolute',
    textAlign: 'right',
    color: '#8C8A93',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '400',
    textTransform: 'uppercase',
    lineHeight: height * 0.022,
  },
  cdFlightNumber: {
    width: width * 0.31,
    left: width * 0.47,
    top: height * 0.028,
    position: 'absolute',
    textAlign: 'right',
    color: '#EAEDFA',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '400',
    lineHeight: height * 0.022,
  },
  cardTopText: {
    width: width * 0.78,
    height: height * 0.1,
    left: width * 0.114,
    top: height * 0.256,
    position: 'absolute',
  },
  cdSubTitleLeft: {
    width: width * 0.26,
    left: 0,
    top: height * 0.046,
    position: 'absolute',
    color: '#EAEDFA',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '400',
    lineHeight: 17.36,
  },
  cdSubTitleRight: {
    width: width * 0.28,
    left: width * 0.5,
    top: height * 0.046,
    position: 'absolute',
    textAlign: 'right',
    color: '#EAEDFA',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '400',
    lineHeight: 17.36,
  },
  cdTitle: {
    flexDirection: 'row',
  },

  cdTitleEarth: {
    width: width * 0.17,
    position: 'absolute',
    color: 'white',
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: 27.28,
  },
  cdTitleMars: {
    width: width * 0.17,
    left: width * 0.62,
    top: 0,
    position: 'absolute',
    color: 'white',
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: 27.28,
  },
  cdTime: {
    width: width * 0.11,
    left: width * 0.33,
    top: height * 0.01,
    position: 'absolute',
    textAlign: 'center',
    color: '#DCDEE3',
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '400',
  },

  cdLine: {
    width: width * 0.78,
    height: 1,
    left: width * 0.114,
    top: height * 0.356,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'dotted',
  },

  RocketImage: {
    flex: 1,
    left: width * 0.28,
    top: height * 0.2,
  },

  image: {
    width: width * 0.4,
    height: height * 0.07,
  },
});