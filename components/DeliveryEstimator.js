import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  format,
  addDays,
  setHours,
  setMinutes,
  differenceInSeconds,
  isBefore,
} from "date-fns";
import { pincodeMapping } from "../data/pincodeMapping";

const { width, height } = Dimensions.get("window");


// Shows the time left for same-day delivery
const getCutoffTime = (hour) => {
  const now = new Date();
  const cutoffTime = setMinutes(setHours(now, hour), 0);
  return differenceInSeconds(cutoffTime, now) > 0
    ? cutoffTime
    : addDays(cutoffTime, 1);
};

// Formats the time in hours, minutes, and seconds
const formatTime = (seconds) => {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hours}h ${minutes}m ${secs}s`;
};

// Countdown Timer Component to show the time left for same-day delivery
const CountdownTimer = ({ cutoffHour, timeLeft, setTimeLeft }) => {
  useEffect(() => {
    if (timeLeft) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return null;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  return timeLeft ? (
    // Timer View to show the time left for same-day delivery
    <View style={styles.timerView}>
      <Text style={styles.timerText}>
        Time left for same-day delivery eligibility:{" "}
      </Text>
      <Text style={styles.timerCount}>{formatTime(timeLeft)}</Text>
    </View>
  ) : null;
};

const DeliveryEstimator = ({ product }) => {
  const [pincode, setPincode] = useState("");
  const [estimatedDate, setEstimatedDate] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const calculateDeliveryDate = (provider, tat) => {
    const now = new Date();
    let deliveryDate;
    let cutoffHour;

    // Calculate the delivery date based on the logistics provider
    switch (provider) {
      case "Provider A":
        cutoffHour = 17;
        deliveryDate = isBefore(now, setHours(now, cutoffHour))
          ? now
          : addDays(now, 1);
        setTimeLeft(differenceInSeconds(getCutoffTime(cutoffHour), now));
        break;
      case "Provider B":
        cutoffHour = 9;
        deliveryDate = isBefore(now, setHours(now, cutoffHour))
          ? now
          : addDays(now, 1);
        setTimeLeft(differenceInSeconds(getCutoffTime(cutoffHour), now));
        break;
      case "General Partners":
        deliveryDate = addDays(now, tat);
        break;
      default:
        deliveryDate = now;
    }

    // Format the delivery date and animate the text
    setEstimatedDate(format(deliveryDate, "dd-MM-yyyy"));
    animateFadeIn();
  };

  // Animate on click of Estimate button
  const animateFadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Reset the fields on click of Estimate button
  const resetFields = () => {
    setPincode("");
    setEstimatedDate("");
    setTimeLeft(null);
    fadeAnim.setValue(0);
  };

  // Handle the Estimate button click
  const handleEstimate = () => {
    resetFields();
    const pincodeData = pincodeMapping.find(
      (entry) => entry.Pincode === parseInt(pincode)
    );

    // Show alert if pincode is invalid or product is out of stock
    if (!pincodeData) {
      Alert.alert(
        "Invalid Pincode",
        "This pincode is not serviced by our logistics providers."
      );
      return;
    }

    // Show alert if product is out of stock
    if (!product.inStock) {
      Alert.alert(
        "Product Unavailable",
        "This product is currently out of stock."
      );
      return;
    }

    // Calculate the delivery date based on the logistics provider
    calculateDeliveryDate(pincodeData["Logistics Provider"], pincodeData.TAT);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {/* Pincode Taker input box */}
        <TextInput
          style={styles.input}
          placeholder="Enter pincode"
          value={pincode}
          maxLength={6}
          onChangeText={setPincode}
          keyboardType="numeric"
        />
        {/* Estimate Calculator Button */}
        <TouchableOpacity style={styles.button}
        
         onPress={handleEstimate}>
          <Text style={styles.buttonText}>Estimate</Text>
        </TouchableOpacity>
      </View>
      {estimatedDate && (
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.estimateText}>
            Estimated Delivery Date: {estimatedDate}
          </Text>
        </Animated.View>
      )}
      {/* Countdown SHow for left time for delivery */}
      <CountdownTimer
        cutoffHour={17}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
      />
    </View>
  );
};

export default DeliveryEstimator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: height * 0.03,
  },
  estimateText: {
    marginTop: width * 0.02,
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  timerView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.01,
  },
  timerText: {
    fontSize: width * 0.048,
    color: "red",
  },
  timerCount: {
    textAlign: "center",
    backgroundColor: "#FFC107",
    borderRadius: width * 0.04,
    paddingVertical: height * 0.01,
    marginTop: height * 0.01,
    width: width * 0.5,
    fontSize: width * 0.048,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: height * 0.01,
    marginHorizontal: width * 0.01,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: width * 0.04,
    paddingVertical: height * 0.013,
    paddingHorizontal: 15,
    fontSize: width * 0.04,
    marginRight: width * 0.02,
    backgroundColor: "#f8f8f8",
  },
  button: {
    backgroundColor: "#9C27B0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 0.04,
    paddingHorizontal: width * 0.04,
  },
  buttonText: {
    color: "#fff",
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
});
