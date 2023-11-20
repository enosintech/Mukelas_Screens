import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from 'react';

import Footer from '../components/Footer';

const StudentCreateAccount = () => {
    const [ visible, setVisible ] = useState(true);

  return (
    <View className="w-full h-full flex items-center justify-center">
      <View className="w-full h-[80%] flex items-center justify-center">
        <View className="w-full h-[23%] flex items-center justify-center">
            <Image 
                source={require("../../assets/images/eduDealsLogo.png")}
            />
        </View>
        <View className="w-[90%] h-[77%] rounded-lg shadow border-[0.5px] border-gray-300 bg-white">
            <View className="w-full h-[10%] flex items-center justify-center">
                <Text className="font-bold text-[20px]">Create Account</Text>
            </View>
            <View className="w-full h-[70%] flex items-center justify-evenly">
                <TextInput
                    className="w-[80%] h-[13%] bg-white shadow border-[0.5px] font-normal border-gray-300 rounded-2xl px-3"
                    placeholder='Enter First Name'
                />
                <TextInput
                    className="w-[80%] h-[13%] bg-white shadow border-[0.5px] font-normal border-gray-300 rounded-2xl px-3"
                    placeholder='Enter Last Name'
                />
                <TextInput
                    className="w-[80%] h-[13%] bg-white shadow border-[0.5px] font-normal border-gray-300 rounded-2xl px-3"
                    placeholder='Enter your Student Email'
                />
                <TextInput
                    className="w-[80%] h-[13%] bg-white shadow border-[0.5px] font-normal border-gray-300 rounded-2xl px-3"
                    placeholder='Student ID'
                />
                <View className="w-[80%] h-[13%] shadow rounded-2xl flex flex-row">
                    <TextInput
                        className="w-[85%] h-full bg-white font-normal border-[0.5px] border-gray-300 rounded-l-2xl px-3"
                        placeholder='Password'
                        secureTextEntry={!visible}
                    />
                    <View className="w-[15%] h-full bg-white shadow border-[0.5px] border-gray-300 rounded-r-2xl flex items-center justify-center">
                        <TouchableOpacity onPress={() => {
                            setVisible(!visible)
                        }}>
                            <MaterialIcons name={visible ? "visibility" : "visibility-off"}  size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View className="w-full h-[20%] flex items-center justify-start">
                <TouchableOpacity className="w-[55%] h-[50%] bg-[#614BC3] rounded-2xl flex items-center justify-center">
                    <Text className="text-[20px] font-bold text-white">Sign Up</Text>
                </TouchableOpacity>
                <View className="w-full h-[20%] mt-1 flex flex-row items-center justify-center">
                    <Text>Already have an Account?</Text>
                    <TouchableOpacity className="ml-1">
                        <Text className="font-bold text-[#614bc3]">Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
      <Footer />
    </View>
  )
}

export default StudentCreateAccount;