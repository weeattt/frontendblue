import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

type Props = {
    children: ReactNode;
};

const ScreenContainer: React.FC<Props> = ({children}) => {
    return(
        <SafeAreaView style={styles.safeArea}>
                {children}
          </SafeAreaView>  

    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, 
        
        justifyContent: 'center',
    }
})

export default ScreenContainer;