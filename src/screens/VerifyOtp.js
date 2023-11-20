import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'

import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

const VerifyOtp = () => {
  return (
    <SafeAreaView className="w-full h-full flex items-center justify-between">
        <View className="w-full h-[45%]">
            <BackButton />
            <View className="w-full h-[80%]">
                <View className="w-full h-[50%] flex items-center justify-center">
                    <Text className="font-bold text-[25px]">Phone Verification</Text>
                    <Text className="font-light text-[15px] mt-5 text-gray-400">Enter your OTP code</Text>
                </View>
                <View className="w-full h-[50%] flex items-center justify-center">
                    <View className="w-full h-[50%] flex flex-row items-center justify-center gap-2">
                        <TextInput 
                            className="w-[13%] h-[90%] border-[0.5px] text-[50px] shadow bg-white border-gray-300 rounded-xl"
                        />
                        <TextInput 
                            className="w-[13%] h-[90%] border-[0.5px] text-[50px] shadow bg-white border-gray-300 rounded-xl"
                        />
                        <TextInput 
                            className="w-[13%] h-[90%] border-[0.5px] text-[50px] shadow bg-white border-gray-300 rounded-xl"
                        />
                        <TextInput 
                            className="w-[13%] h-[90%] border-[0.5px] text-[50px] shadow bg-white border-gray-300 rounded-xl"
                        />
                        <TextInput 
                            className="w-[13%] h-[90%] border-[0.5px] text-[50px] shadow bg-white border-gray-300 rounded-xl"
                        />
                    </View>
                    <View className="mt-3 flex flex-row">
                        <Text>Didn't Receive Code?</Text>
                        <TouchableOpacity className="ml-1">
                            <Text className="font-bold text-[#614bc3]">Resend</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        <View className="w-full h-[15%] flex items-center justify-start">
            <TouchableOpacity className="w-[55%] h-[50%] rounded-2xl bg-[#614bc3] flex items-center justify-center">
                <Text className="font-bold text-white text-[20px]">Verify</Text>
            </TouchableOpacity>
        </View>
        <Footer />
    </SafeAreaView>
  )
}

export default VerifyOtp;