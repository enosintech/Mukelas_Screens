import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from 'react';

import Footer from '../components/Footer';

const StudentLogin = () => {
    const [ visible, setVisible ] = useState(true);
  return (
    <View className="w-full h-full flex items-center justify-center">
        <View className="w-full h-[70%]">
            <View className="w-full h-[35%] flex items-center justify-center">
                <Image 
                    source={require("../../assets/images/eduDealsLogo.png")}
                    className="w-[65%] h-[90%] object-cover"
                />
            </View>
            <View className="w-full h-[65%] flex items-center justify-center">
                <View className="w-[90%] h-[95%] border border-gray-300 shadow bg-white rounded-lg">
                    <View className="w-full h-[15%] flex items-center justify-center">
                        <Text className="font-bold text-[20px]">Sign In</Text>
                    </View>
                    <View className="w-full h-[45%] flex items-center justify-evenly">
                        <TextInput
                            className="w-[80%] h-[30%] bg-white shadow border-[0.5px] font-normal border-gray-300 rounded-2xl px-3"
                            placeholder='Student Email'
                        />
                        <View className="w-[80%] h-[30%] shadow rounded-2xl flex flex-row">
                            <TextInput
                                className="w-[85%] h-full bg-white font-normal border-[0.5px] border-gray-300 rounded-l-2xl px-3"
                                placeholder='Password'
                                secureTextEntry={!visible}
                            />
                            <View className="w-[15%] h-full bg-white shadow border-[0.5px] border-gray-300 rounded-r-2xl flex items-center justify-center">
                                <TouchableOpacity onPress={() => {
                                    setVisible(!visible)
                                }}>
                                    <MaterialIcons name={visible ? "visibility" : "visibility-off"} size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity className="w-full h-[10%] flex items-center justify-center">
                            <Text className="font-bold">Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="w-full h-[40%] flex items-center justify-center">
                        <TouchableOpacity className="w-[55%] h-[35%] rounded-2xl bg-[#614BC3] items-center justify-center">
                            <Text className="font-bold text-[20px] text-white">Sign In</Text>
                        </TouchableOpacity>
                        <View className="w-full h-[25%] mt-1 flex flex-row items-center justify-center">
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity className="ml-1">
                                <Text className="font-bold text-[#614bc3]">Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
      <Footer />
    </View>
  )
}

export default StudentLogin;