import React from "react";
import CustomTextinput from "./CustomTestInput";
import { StyleSheet, SafeAreaView } from "react-native";

const Signin = () => {
    return(
        <SafeAreaView style={styles.safeArea}>
            <CustomTextinput placeholder="아이디" value=""></CustomTextinput>
            <CustomTextinput placeholder="비밀번호" value=""></CustomTextinput>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, 
        
        justifyContent: 'center',
    }
})

export default Signin;