import React from "react";  
import { TextInput, StyleSheet } from "react-native";

type Props = {
    value?: string;
    placeholder: string;
    onChangeText?: (text: string) => void;
};

const CustomTextinput: React.FC<Props> = ({
    placeholder,
    value = '',
    onChangeText = () => {},
}) => {
    return(
        <TextInput 
            placeholder={placeholder} 
            value=""
            onChangeText={onChangeText}
            style={styles.textInput} />
    );
}

const styles = StyleSheet.create({
    textInput : {
        padding: 20,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});

export default CustomTextinput;