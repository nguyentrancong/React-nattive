import React, { useState } from 'react';
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Modal,
    TouchableHighlight,
    Alert,
 } from 'react-native';
import LineComponent from '../commons/line';

 const ModalComponent = () => {

    const [modalVisible, setModalVisible] = useState(false);

     return (
         <SafeAreaView style={styles.container}>
             <View style={{height: 45}}>
                <Text style={styles.textHeader}>Modal Component</Text>
                <LineComponent marginLeftAndRight={0}/>
             </View>
            <View style={styles.centeredView}>
                <Modal visible={modalVisible}
                    transparent={true}
                    animationType='slide'
                >
                    <View style={{...styles.centeredView}}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>

                            <TouchableHighlight style={{...styles.openButton, backgroundColor: '#2196F3'}}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight style={styles.openButton}
                    onPress={() => {
                        setModalVisible(true)
                    }}
                >
                    <Text style={styles.textStyle}>Show Modal</Text>
                </TouchableHighlight>
            </View>
         </SafeAreaView>
     );
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textHeader: {
        height: 44,
        color: 'blue',
        padding: 8,
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 20,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    openButton: {
        backgroundColor: '#f194ff',
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        margin: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    }
 });

 export default ModalComponent;