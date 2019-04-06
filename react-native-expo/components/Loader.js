import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    ActivityIndicator,
    Text
} from 'react-native';
import PulseLoader from 'react-native-pulse-loader';
const fsa = require('../assets/fsa.jpeg')
const Loader = props => {
    const {
        loading,
        ...attributes
    } = props;
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => console.log('Closed')}
            >
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                <Text style={{fontSize: 30, fontStyle: 'italic', marginTop: 250, alignSelf: 'center'}}>The Full-Stack Apprenticeship</Text>
                <Text style={{fontSize: 24, fontStyle: 'italic', marginTop: 250}}>is Loading</Text>

                            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 200}}>
                            <PulseLoader
                            avatar={fsa}
                            size={150}
                            backgroundColor="#7851a9"
                            borderColor="#7851a9"
                          />
                          <Text style={{fontSize: 20, fontStyle: "italic", marginBottom: 250, marginRight: 10, marginLeft: 10}}>'Nothing will work unless you do.'{'\n'}{'\n'} Maya Angelou</Text>
                          </View>
                    
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalBackground: {
        flex: 0,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
export default Loader;