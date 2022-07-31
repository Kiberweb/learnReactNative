import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import UserImg from "../../../assets/user.png";

export default function SingInScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("onSignInPressed");
  };

  return (
    <View style={styles.container}>
      <Image source={UserImg} style={styles.userImg} />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <View style={styles.btnWrapper}>
        <CustomButton text="Sing In" handlePress={onSignInPressed} />
        <CustomButton
          text={`Create a new account`}
          handlePress={onSignInPressed}
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
