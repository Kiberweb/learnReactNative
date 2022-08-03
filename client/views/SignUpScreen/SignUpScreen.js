import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const users = [];
  const user = {
    id: "",
    email,
    username,
    password,
  };

  const onSignInPressed = () => {
    console.warn("onSignInPressed");
  };

  return (
    <View style={styles.container}>
      <CustomInput
        placeholder="E-mail"
        value={email}
        setValue={setEmail}
        type="email-address"
      />
      <CustomInput placeholder="Name" value={name} setValue={setName} />
      <CustomInput
        placeholder="Name"
        value={secondName}
        setValue={setSecondName}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomInput
        placeholder="Confirm password"
        value={confirmPass}
        setValue={setConfirmPass}
        secureTextEntry
        type="visible-password"
      />

      <View style={styles.btnWrapper}>
        <CustomButton text="Sing Up" handlePress={onSignInPressed} />
        <CustomButton
          text={`Log In`}
          handlePress={() => navigation.navigate("SignIn")}
          type="TERTIARY"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userImg: {
    width: 150,
    height: 150,
  },
  btnWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  singUpText: {
    color: "#4169F5",
  },
});
