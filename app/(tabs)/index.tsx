import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  TouchableOpacity,
  Alert,
  Switch,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import { router } from "expo-router";
import AirportAutocomplete from "@/components/AirportAutocomplete";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const RadioButton = ({
  selected,
  onPress,
  label,
}: {
  selected: boolean;
  onPress: () => void;
  label: string;
}) => {
  return (
    <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
      <View style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonSelected} /> : null}
      </View>
      <Text style={styles.radioButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");
  const [fromAirport, setFromAirport] = useState<any>(null);
  const [toAirport, setToAirport] = useState<any>(null);
  const [travelClass, setTravelClass] = useState("ECONOMY");

  const handleDateSelect = (day: any) => {
    setSelectedDate(day.dateString);
  };

  return (
    <LinearGradient
      colors={['#12172B', '#497bbbff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.screen}
    >
      <StatusBar style="light" />
      <Image
        source={require("@/assets/images/world-map.png")}
        style={styles.image}
      />
      <View style={{ position: 'absolute', top: 104, left: 32 }}>
        <Text style={[styles.heading, styles.headingStroke]}>seatMaps</Text>
        <Text style={[styles.heading, { position: 'absolute', top: 0, left: 0 }]}>seatMaps</Text>
      </View>

      <BlurView
        intensity={80}
        tint="light"
        style={styles.formContainer}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.formContent}
          keyboardShouldPersistTaps="handled"
        >


          <View style={{ marginBottom: 15, marginTop: 0 }}>
            <Text style={styles.label}>From</Text>
            <AirportAutocomplete
              placeholder="Origin"
              icon={require("@/assets/images/takeoff.png")}
              onSelect={setFromAirport}
              containerStyle={{ marginBottom: 0 }}
            />
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={styles.label}>To</Text>
            <AirportAutocomplete
              placeholder="Destination"
              icon={require("@/assets/images/landing.png")}
              onSelect={setToAirport}
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Departure Date</Text>

            <Calendar
              onDayPress={handleDateSelect}
              theme={{
                calendarBackground: 'transparent',
                textSectionTitleColor: 'rgba(255, 255, 255, 0.6)',
                textSectionTitleDisabledColor: 'rgba(255, 255, 255, 0.3)',
                selectedDayBackgroundColor: 'rgba(255, 255, 255, 0.18)',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#ffffff',
                dayTextColor: '#ffffff',
                textDisabledColor: 'rgba(255, 255, 255, 0.3)',
                dotColor: '#ffffff',
                selectedDotColor: '#ffffff',
                arrowColor: '#ffffff',
                disabledArrowColor: 'rgba(255, 255, 255, 0.3)',
                monthTextColor: '#ffffff',
                indicatorColor: '#ffffff',
                textDayFontFamily: 'System',
                textMonthFontFamily: 'System',
                textDayHeaderFontFamily: 'System',
                textDayFontWeight: '400',
                textMonthFontWeight: '600',
                textDayHeaderFontWeight: '500',
                textDayFontSize: 14,
                textMonthFontSize: 15,
                textDayHeaderFontSize: 11,
              }}
              style={{ height: 300 }}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  selectedColor: 'rgba(255, 255, 255, 0.18)',
                },
              }}
            />

          </View>

          <View style={{ marginBottom: -30, marginTop: 30 }}>

            <BlurView intensity={30} tint="light" style={styles.classSelectorContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.classSelectorContent}>
                {['ECONOMY', 'PREMIUM_ECONOMY', 'BUSINESS', 'FIRST'].map((item) => {
                  const isSelected = travelClass === item;
                  return (
                    <TouchableOpacity
                      key={item}
                      onPress={() => setTravelClass(item)}
                      style={[
                        styles.classItem,
                        isSelected && styles.classItemSelected
                      ]}
                    >
                      <Text style={[
                        styles.classItemText,
                        isSelected && styles.classItemTextSelected
                      ]}>
                        {item.replace('_', ' ')}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </BlurView>
          </View>


          <BlurView
            intensity={40}
            tint="light"
            style={styles.searchButton}
          >
            <Pressable
              onPress={() => {
                if (!fromAirport || !toAirport || !selectedDate) {
                  Alert.alert("Error", "Please select all fields");
                  return;
                }
                router.push({
                  pathname: "/(flights)",
                  params: {
                    origin: fromAirport.iataCode,
                    destination: toAirport.iataCode,
                    date: selectedDate,
                    nonStop: 'true',
                    travelClass: travelClass,
                  },
                });
              }}
              style={styles.searchButtonInner}
            >
              <Text style={styles.searchButtonText}>Search Flights</Text>
            </Pressable>
          </BlurView>
        </ScrollView>
      </BlurView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    height: 400,
    width: "200%",
    position: "absolute",
    top: -110,
    left: -127,
    tintColor: "rgba(255, 255, 255, 0.1)",
    opacity: 0.3,
  },
  icon: {
    tintColor: "#272727",
    width: 28,
    height: 25,
    resizeMode: "contain",
  },

  heading: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    position: "absolute",
    top: 104,
    left: 32,
    textShadowColor: "rgba(255, 255, 255, 0.2)",
    textShadowOffset: { width: 10, height: 0 },
    textShadowRadius: 10,
  },

  headingStroke: {
    color: "transparent",
    textShadowColor: "rgba(144, 74, 132, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 20,
  },

  container: {
    flex: 1,
  },

  formContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 180,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderTopColor: 'rgba(255, 255, 255, 0.5)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    overflow: 'hidden',
  },

  formContent: {
    padding: 20,
    paddingBottom: 40,
  },

  bottomSheetContainer: {
    marginTop: 0,
    marginHorizontal: 20,
    flexDirection: "column",
    gap: 10,
  },

  label: {
    fontWeight: "600",
    color: "#ffffff",
    fontSize: 13,
    marginBottom: 4,
  },

  inputContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.6)",
    flexDirection: "row",
    gap: 16,
    shadowColor: '#904a84ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  inputText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 15,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },

  buttonSearch: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#25071fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  calendarContainer: {
    padding: 5,
    backgroundColor: "#fff",
  },

  calendarInline: {
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 12,
    padding: 10,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.8)",
    shadowColor: '#25071fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },

  // visionOS Calendar Design (from Figma)
  visionOSCalendar: {
    marginTop: 10,
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
    borderRadius: 24,
    padding: 10,
    borderWidth: 1.4,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },

  doneButton: {
    marginTop: 20,
    padding: 10,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 15,
    overflow: 'hidden',
  },

  doneButtonText: {
    color: "#fff",
    fontSize: 16,
  },

  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 0,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#272727",
  },
  radioButtonLabel: {
    fontSize: 14,
    color: "#333",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  // New Class Selector Styles
  classSelectorContainer: {
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
    borderRadius: 100,
    borderWidth: 1.4,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    overflow: 'hidden',
    padding: 6,
    marginHorizontal: 0,
  },
  classSelectorContent: {
    flexDirection: 'row',
    gap: 8,
    paddingRight: 20, // Allow scrolling a bit past the last item
  },
  classItem: {
    height: 44,
    paddingHorizontal: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  classItemSelected: {
    backgroundColor: 'rgba(94, 94, 94, 0.5)',
  },
  classItemText: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  classItemTextSelected: {
    color: '#FFFFFF',
  },
  searchButton: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderRadius: 42,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    overflow: 'hidden',
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  searchButtonInner: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});

export default Home;
