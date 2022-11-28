import { View, Text, StyleSheet } from "react-native";
import React, { useState, useRef } from "react";
import { TextInput } from "react-native-gesture-handler";

const PasswordField = () => {

  const [otp, setOtp] = useState({1: "",2: "",3: "",4: "",5: "",6: ""});

    const pin1Ref = useRef(null)
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);
    const pin5Ref = useRef(null);
    const pin6Ref = useRef(null);
 
    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");
    const [pin5, setPin5] = useState("");
    const [pin6, setPin6] = useState("");

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View style={styles.TextInputView}>
        <TextInput
          ref={pin1Ref}
          keyboardType={"number-pad"}
          maxLength={1}
          onChangeText={(text1) => {
            setOtp({...otp, 1: text1 })
            setPin1(text1);
            if (text1 !== "") {
              pin2Ref.current.focus();
            }
          }}
          style={styles.TextInputText}
        />
      </View>
      <View style={styles.TextInputView}>
        <TextInput
          ref={pin2Ref}
          keyboardType={"number-pad"}
          maxLength={1}
          onChangeText={(text2) => {
            setOtp({ ...otp, 2: text2 });
            setPin2(text2);
            if (text2 !== "") {
              pin3Ref.current.focus();
            } else {
              pin1Ref.current.focus();
            }
          }}
          style={styles.TextInputText}
        />
      </View>
      <View style={styles.TextInputView}>
        <TextInput
          ref={pin3Ref}
          keyboardType={"number-pad"}
          maxLength={1}
          onChangeText={(text3) => {
            setOtp({ ...otp, 3: text3 });
            setPin3(text3);
            if (text3 !== "") {
              pin4Ref.current.focus();
            } else {
              pin2Ref.current.focus();
            }
          }}
          style={styles.TextInputText}
        />
      </View>
      <View style={styles.TextInputView}>
        <TextInput
          ref={pin4Ref}
          keyboardType={"number-pad"}
          maxLength={1}
          onChangeText={(text4) => {
            setOtp({ ...otp, 4: text4 });
            setPin4(text4);
            if (text4 !== "") {
              pin5Ref.current.focus();
            } else {
              pin3Ref.current.focus();
            }
          }}
          style={styles.TextInputText}
        />
      </View>
      <View style={styles.TextInputView}>
        <TextInput
          ref={pin5Ref}
          keyboardType={"number-pad"}
          maxLength={1}
          onChangeText={(text5) => {
            setOtp({ ...otp, 5: text5 });
            setPin5(text5);
            if (text5 !== "") {
              pin6Ref.current.focus();
            } else {
              pin4Ref.current.focus();
            }
          }}
          style={styles.TextInputText}
        />
      </View>
      <View style={styles.TextInputView}>
        <TextInput
          ref={pin6Ref}
          keyboardType={"number-pad"}
          maxLength={1}
          onChangeText={(text6) => {
            setOtp({ ...otp, 6: text6 });
            setPin6(text6);
            if (!text6) {
              pin5Ref.current.focus();
            }
          }}
          style={styles.TextInputText}
        />
      </View>
    </View>
  );
}

export default PasswordField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInputView: {
    backgroundColor:"white",

    width: 50,
    justifyContent:"center",
    alignItems: "center",
    marginHorizontal:5,
    borderRadius:10,
    height:55,
  },
  TextInputText:{
    fontSize: 30,
    textAlign:"center"
  }
});

