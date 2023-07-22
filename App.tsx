/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';
const Header = () => {
  return (
    <View style={styles.mainheader}>
      <View style={styles.innerheader}>
        <View>
          <Image
            style={{ width: 30, height: 30, }}
            source={require("../InventoryTransferScreen/android/app/src/image/backArrow.png")}
          />
        </View>
        <View><Text style={styles.title}>Inventory Transfer</Text></View>
        <View>
        <Image
            style={{ width: 30, height: 30, }}
            source={require("../InventoryTransferScreen/android/app/src/image/download.png")}
          />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardbody}>
          <View style={styles.minicard}>
            <View style={{ marginBottom: 30 }}>
              <Text style={{ color: "#000", fontSize: 13 }}>Finishing - filament Tape,</Text>
              <Text style={{ color: "#000", fontSize: 13 }}>50mm x 50m</Text>
            </View>
            <View style={{ marginBottom: 30 }}>
              <Text>item</Text>
              <Text style={styles.txtcolor}>FI-ADH1525-001</Text>
            </View>
            <View style={{ marginBottom: 30 }}>
              <Text>UOM</Text>
              <Text style={styles.txtcolor}>per RL(50m)</Text>
            </View>
            <View>
              <Text>Quntity on Hand</Text>
              <Text style={styles.txtcolor}>0</Text>
            </View>
          </View>
          <View style={styles.minicard}>
            <Image
              style={{ width: '100%', height: 240 }}
              source={require("../InventoryTransferScreen/android/app/src/image/cardimg.jpg")}
            />
          </View>
        </View>


      </View>
    </View>
  )
}

function App(): JSX.Element {
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [value, setValue] = useState(null);

  const isDarkMode = useColorScheme() === 'dark';
  const Locationdata =
    [
      {

        "locationName": "Location :New Industrial",
        "received": "-2"
      },
      {
        "locationName": "Location :New Industrial :Ahmed Bin Ali Stadium",
        "received": "1"
      },
      {
        "locationName": "Location :New Industrial :AI Bayt Stadium",
        "received": "1"
      },
      {
        "locationName": "Location :New Industrial :AI Janoub Stadium",
        "received": "0"
      },
      {
        "locationName": "Location :New Industrial :AI Thumama Stadium",
        "received": "0"
      },
      {
        "locationName": "Location :New Industrial :Education City Stadium",
        "received": "0"
      },
      {
        "locationName": "Location :New Industrial :Khalifa International Squash and Tennis Federation",
        "received": "0"
      },
      {
        "locationName": "Location :New Industrial :Khalifa international Stadium",
        "received": "0"
      },
      {
        "locationName": "Location :New Industrial :Lusail City Stadium",
        "received": "0"
      },
      {
        "locationName": "Location :New Industrial :Stadium 974",
        "received": "0"
      },
      {
        "locationName": "Location :west Bay",
        "received": "0"
      },
    ]
  function off(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scroll}>
        <View style={styles.locationCard}>
          {Locationdata.map((data, key) => {
            return (
              <View key={key}
                style={styles.locationMapView}
              >
                <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
                  <Text style={styles.locationName}> {data.locationName} </Text>
                  <Text style={styles.points}> {data.received} </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.detailCard}>
          <View style={styles.innerCarddetail}>

            <View style={styles.toggleView}>
              <TouchableOpacity onPress={() => {
                setIsContentVisible(!isContentVisible)
              }}
                style={[isContentVisible ? styles.active : styles.diactive]}>
                <Text style={[isContentVisible ? styles.activetxt : styles.deactivetxt]}>From</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[isContentVisible ? styles.diactive : styles.active]}
                onPress={() => {
                  setIsContentVisible(!isContentVisible)
                }} >
                <Text style={[isContentVisible ? styles.deactivetxt : styles.activetxt]}>To</Text>
              </TouchableOpacity>
            </View>
          </View>
          {isContentVisible ? <View
            style={styles.hiddencontaint}>
            <View><Text style={{ fontSize: 16 }}>Received</Text></View>
            <View>
              <Text style={styles.zerotxt}>0</Text>
              <View style={{ flexDirection: "row" }}>
                <Text>Received</Text>
                <Text style={{ color: "#DF2E38" }}> 0</Text>
              </View>
            </View>
          </View>
            :
            <View
              style={styles.hiddencontaint2}>
              <View><Text style={{ fontSize: 16 }}>Transfer</Text></View>
              <View >
                <Text style={{ fontSize: 16 }}>0</Text>
              </View>
            </View>
          }
          <View style={{ marginHorizontal: 30 }}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Location"
              searchPlaceholder="Search..."
              value={value}
              onChange={item => {
                // setValue(item.value);
              }}
            />
          </View>
          {isContentVisible ?
            <TouchableOpacity
              style={styles.nextbutton}>
              <Text style={{ color: "#DF2E38" }}>Next</Text>
            </TouchableOpacity> :
            <TouchableOpacity
              style={styles.updatebtn}>
              <Text style={{ color: "#DF2E38" }}>Update</Text>
            </TouchableOpacity>}
        </View>
        <TouchableOpacity
          style={styles.strickybtn}>
          <Text style={styles.txt}>print lable</Text>
        </TouchableOpacity>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  scroll: {
    height: Dimensions.get("window").height / 2.3,
  },
  highlight: {
    fontWeight: '700',
  },
  mainheader: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
  },
  innerheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#DF2E38"
  },
  title: {
    fontSize: 20,
    fontFamily: "Lato-Bold",
    alignItems: "center",
    marginRight: 14,
    color: "#fff"
  },
  locationCard: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 6,
    elevation: 6,
    marginVertical: 10,
  },
  locationMapView: {
    borderBottomWidth: 1,
    borderBlockColor: "#dddddd",
    marginHorizontal: 4
  },
  locationName: {
    color: "#000",
    fontSize: 14
  },
  txtcolor: {
    color: "#DF2E38"
  },
  points: {
    color: "#DF2E38",
    fontSize: 13,
    marginTop: 5
  },
  card: {
    borderRadius: 6,
    marginHorizontal: 20,
    padding: 20,
    marginTop: -20,
    backgroundColor: "#fff",
    elevation: 6,
    marginBottom: 20
  },
  cardbody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  minicard: {
    width: "50%"
  },
  active: {
    backgroundColor: "#DF2E38",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 40,
  },
  diactive: {
    backgroundColor: "#fff",
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  activetxt: {
    fontSize: 21,
    color: "#fff"
  },
  deactivetxt: {
    fontSize: 21,
    color: "#000"
  },
  detailCard: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 6,
    elevation: 6,
    marginBottom: 10,
    marginTop: 20

  },
  innerCarddetail: {
    borderWidth: 2,
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 120,
    overflow: "hidden",
    borderColor: "#DF2E38"
  },
  toggleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  hiddencontaint: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    alignItems: "center"
  },
  hiddencontaint2: {
    flexDirection: "row",
    marginHorizontal: 30,
    justifyContent: "space-between"
  },
  zerotxt: {
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderWidth: 2,
    borderColor: "#000",
    textAlign: "center",
    fontSize: 18,
    color: "#DF2E38"
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 19,
    color: "#DF2E38"
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 30,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  nextbutton: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DF2E38",
    borderRadius: 45,
    paddingVertical: 15,
    margin: 40
  },
  updatebtn: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DF2E38",
    borderRadius: 45,
    paddingVertical: 15,
    margin: 40
  },
  strickybtn: {
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 15,
    backgroundColor: 'gray',
    marginHorizontal: 20
  },
  txt: {
    color: "#fff",
    fontSize: 18
  }
});

export default App;
