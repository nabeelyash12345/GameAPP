import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import image1 from "../assets/groundpic/g.jpeg";
import image2 from "../assets/groundpic/g1.jpeg";
import image3 from "../assets/groundpic/g2.jpeg";
import image4 from "../assets/groundpic/g3.jpg";

import image5 from "../assets/groundpic/g5.jpeg";


export default function ImageSwiperScreen() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <View style={styles.container}>
      <View style={styles.headerVidos}>
        <View>
          <Text
            style={{
              width: 220,
              height: 22,
              opacity: 0.9,
              fontFamily: "HelveticaNeue",
              fontSize: 18,
              fontWeight: "500",
              fontStyle: "normal",
              letterSpacing: 0.17,
              color: "#fcfcfc",
            }}
          >
            Near by Fields
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text
              style={{
                width: 108,
                height: 16,
                fontFamily: "Helvetica",
                fontSize: 14,
                fontWeight: "bold",
                fontStyle: "normal",
                letterSpacing: 0.13,
                textAlign: "right",
                color: "#18f2b2",
              }}
            >
              See all
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 20, marginTop: 33 }}
      >
        <View style={styles.Slider}>
          <SliderBox
            images={images}
            sliderBoxHeight={170}
            parentWidth={264}
            paginationBoxVerticalPadding={20}
            
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 50,
                  width: 35,
                  height: 20,
                }}
              >
                <Text
                  style={{
                    // width: 20,
                    // height: 10,
                    opacity: 0.8,
                    fontFamily: "HelveticaNeue",
                    fontSize: 11,
                    fontWeight: "normal",
                    fontStyle: "normal",
                    letterSpacing: 0.09,
                    textAlign: "center",
                    color: "white",
                    padding: 2,
                  }}
                >
                  6X6
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 50,
                  width: 35,
                  height: 20,
                  marginLeft: 8,
                }}
              >
                <Text
                  style={{
                    opacity: 0.8,
                    fontFamily: "HelveticaNeue",
                    fontSize: 11,
                    fontWeight: "normal",
                    fontStyle: "normal",
                    letterSpacing: 0.09,
                    textAlign: "center",
                    color: "white",
                    padding: 2,
                  }}
                >
                  7x7
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  width: 80,
                  height: 13,
                  opacity: 0.7,
                  fontFamily: "Helvetica",
                  fontSize: 12,
                  fontWeight: "normal",
                  fontStyle: "normal",
                  letterSpacing: 0.1,
                  textAlign: "right",
                  color: "white",
                }}
              >
                {" "}
                1.4 km away
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                width: 256,
                height: 20,
                opacity: 0.9,
                fontFamily: "HelveticaNeue",
                fontSize: 16,
                fontWeight: "500",
                fontStyle: "normal",
                letterSpacing: 0.13,
                color: "white",
                marginTop: 16,
              }}
            >
              Pentalty football Fields{" "}
            </Text>
          </View>

          <View>
            <Text
              style={{
                width: 117,
                height: 15,
                opacity: 0.9,
                fontFamily: "HelveticaNeue",
                fontSize: 12,
                fontWeight: "bold",
                fontStyle: "normal",
                letterSpacing: 0.1,
                color: "white",
                marginTop: 16,
              }}
            >
              Hour /200AED
            </Text>
          </View>
        </View>


        <View style={styles.Slider}>
          <SliderBox
            images={images}
            sliderBoxHeight={170}
            parentWidth={264}
            paginationBoxVerticalPadding={20}
            dotStyle
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 50,
                  width: 35,
                  height: 20,
                }}
              >
                <Text
                  style={{
                    // width: 20,
                    // height: 10,
                    opacity: 0.8,
                    fontFamily: "HelveticaNeue",
                    fontSize: 11,
                    fontWeight: "normal",
                    fontStyle: "normal",
                    letterSpacing: 0.09,
                    textAlign: "center",
                    color: "white",
                    padding: 2,
                  }}
                >
                  6X6
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 50,
                  width: 35,
                  height: 20,
                  marginLeft: 8,
                }}
              >
                <Text
                  style={{
                    opacity: 0.8,
                    fontFamily: "HelveticaNeue",
                    fontSize: 11,
                    fontWeight: "normal",
                    fontStyle: "normal",
                    letterSpacing: 0.09,
                    textAlign: "center",
                    color: "white",
                    padding: 2,
                  }}
                >
                  7x7
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  width: 80,
                  height: 13,
                  opacity: 0.7,
                  fontFamily: "Helvetica",
                  fontSize: 12,
                  fontWeight: "normal",
                  fontStyle: "normal",
                  letterSpacing: 0.1,
                  textAlign: "right",
                  color: "white",
                }}
              >
                {" "}
                1.4 km away
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                width: 256,
                height: 20,
                opacity: 0.9,
                fontFamily: "HelveticaNeue",
                fontSize: 16,
                fontWeight: "500",
                fontStyle: "normal",
                letterSpacing: 0.13,
                color: "white",
                marginTop: 16,
              }}
            >
              Pentalty football Fields{" "}
            </Text>
          </View>

          <View>
            <Text
              style={{
                width: 117,
                height: 15,
                opacity: 0.9,
                fontFamily: "HelveticaNeue",
                fontSize: 12,
                fontWeight: "bold",
                fontStyle: "normal",
                letterSpacing: 0.1,
                color: "white",
                marginTop: 16,
              }}
            >
              Hour /200AED
            </Text>
          </View>
        </View>

        <View style={styles.Slider}>
          <SliderBox
            images={images}
            sliderBoxHeight={170}
            parentWidth={264}
            paginationBoxVerticalPadding={20}
            // dotStyle:{width:10}
            
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 50,
                  width: 35,
                  height: 20,
                }}
              >
                <Text
                  style={{
                    // width: 20,
                    // height: 10,
                    opacity: 0.8,
                    fontFamily: "HelveticaNeue",
                    fontSize: 11,
                    fontWeight: "normal",
                    fontStyle: "normal",
                    letterSpacing: 0.09,
                    textAlign: "center",
                    color: "white",
                    padding: 2,
                  }}
                >
                  6X6
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 50,
                  width: 35,
                  height: 20,
                  marginLeft: 8,
                }}
              >
                <Text
                  style={{
                    opacity: 0.8,
                    fontFamily: "HelveticaNeue",
                    fontSize: 11,
                    fontWeight: "normal",
                    fontStyle: "normal",
                    letterSpacing: 0.09,
                    textAlign: "center",
                    color: "white",
                    padding: 2,
                  }}
                >
                  7x7
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  width: 80,
                  height: 13,
                  opacity: 0.7,
                  fontFamily: "Helvetica",
                  fontSize: 12,
                  fontWeight: "normal",
                  fontStyle: "normal",
                  letterSpacing: 0.1,
                  textAlign: "right",
                  color: "white",
                }}
              >
                {" "}
                1.4 km away
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                width: 256,
                height: 20,
                opacity: 0.9,
                fontFamily: "HelveticaNeue",
                fontSize: 16,
                fontWeight: "500",
                fontStyle: "normal",
                letterSpacing: 0.13,
                color: "white",
                marginTop: 16,
              }}
            >
              Pentalty football Fields{" "}
            </Text>
          </View>

          <View>
            <Text
              style={{
                width: 117,
                height: 15,
                opacity: 0.9,
                fontFamily: "HelveticaNeue",
                fontSize: 12,
                fontWeight: "bold",
                fontStyle: "normal",
                letterSpacing: 0.1,
                color: "white",
                marginTop: 16,
              }}
            >
              Hour /200AED
            </Text>
          </View>
        </View>

        
        
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001052",

    // backgroundColor:"red"

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  Slider: {
    paddingRight: 20,
    borderRadius:10,
  },
  headerVidos: {
    marginLeft: 18,
    marginRight: 18,
    height: 50,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  bgImage: {
    width: 260,
    height: 230,
    borderColor: "red",
    borderWidth: 1,
    marginTop: 30,
  },
});
