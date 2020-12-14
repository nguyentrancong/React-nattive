import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    Button,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Keyboard,
    TouchableWithoutFeedback,

} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LineComponent from '../../coreComponents/commons/line';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginContent = ({loginHandle}) => {
    //
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    //
    const onChangeTextPhone = (value) => {
        setPhone(value);
    }

    const onChangeTextPassword = (value) => {
        setPassword(value);
    }

    const btClose = () => {
        //todo: close
        console.log('bt close');
        loginHandle();
    }

    const sendCode = () => {
        //todo: send code
    }

    const btLogin = () => {
        //todo: login
        loginHandle();
    }

    const btLoginFacebook = () => {
        //todo: login facebook
    }

    const btLoginGoogle = () => {
        //todo: login google
    }

    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
                <View style={styles.containerContent}>
                    <View style={styles.containerBtClose}>
                        <TouchableOpacity onPress={btClose}>
                            <Text>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.title}>Đăng nhập</Text>
                    </View>
                    <View>
                        <Text style={styles.description}>Lần đầu đăng nhập sẽ tự động đăng ký</Text>
                        <TextInput
                            placeholder='Số điện thoại'
                            keyboardType='numeric'
                            onChangeText={(value) => onChangeTextPhone(value)}
                            style={{...styles.inputPhone, marginTop: 40}}
                        />
                        <View>
                            <View style={{
                                position: 'absolute',
                                flexDirection: 'row',
                            }}>
                                <TextInput
                                    placeholder='Mã xác nhận'
                                    onChangeText={(value) => onChangeTextPassword(value)}
                                    style={{...styles.inputPhone, marginTop: 32, width: (windowWidth - 64)}}
                                />
                                <View style={styles.containerSendCode}>
                                    <TouchableOpacity onPress={sendCode}>
                                        <Text style={{color: 'gray'}}>Gửi mã</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={btLogin} style={{marginTop: 91, borderRadius: 22}}>
                        <View style={{borderRadius: 22,backgroundColor: '#f0f3f4',justifyContent: 'center', alignItems:'center', height: 44}}>
                            <Text style={{color: '#9ea0a1', fontSize: 16}}>Đăng nhập</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', alignItems: 'center', marginTop: 16}}>
                        <Text style={{textAlign: 'center'}}>Bằng việc đăng nhập, bạn đồng ý với Điều khoản & Chính sách của F99</Text>
                    </View>
                    <View style={{marginTop: 32, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{height: 0.5, backgroundColor: 'gray', width: 80}}/>
                        <Text style={{textAlign: 'center', fontSize: 14}}>Hoặc đăng nhập bằng</Text>
                        <View style={{height: 0.5, backgroundColor: 'gray', width: 80}}/>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                        <TouchableOpacity onPress={btLoginFacebook}>
                            <View style={{borderRadius: 22,backgroundColor: '#f0f3f4',justifyContent: 'center', alignItems:'center', height: 44, width: 148}}>
                                <Text style={{color: '#3B5998', fontSize: 16}}>Facebook</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={btLoginGoogle}>
                            <View style={{borderRadius: 22,backgroundColor: '#f0f3f4',justifyContent: 'center', alignItems:'center', height: 44, width: 148}}>
                                <Text style={{color: '#DC4B3E', fontSize: 16}}>Google</Text>
                            </View>
                    </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerBtClose: {
        marginTop: 16,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    containerContent: {
        paddingLeft: 32,
        paddingRight: 32,
        flexDirection: 'column'
    },
    title: {
        fontSize: 24,
        height: 33,
        textAlign: 'left',
        fontWeight: '600',
        marginTop: 10,

    },
    description: {
        marginTop: 10,
        fontSize: 15,
        height: 20,
        textAlign: 'left',
    },
    inputPhone: {
        height: 32,
        fontSize: 16,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    containerSendCode: {
        height: 24,
        width: 70,
        borderWidth: 0.5,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 30,
        marginLeft: -70,

    }
});

export default LoginContent;