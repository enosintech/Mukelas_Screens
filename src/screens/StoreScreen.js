import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const StoreScreen = () => {
  return (
    <SafeAreaView className={`w-full h-full`}>
        <View className={`w-full h-1/4 flex flex-row items-center justify-center`}>
            <View className={`w-2/3 h-full flex items-start px-5 justify-end pb-3`}>
                <Text className={`font-bold text-[25px]`}>Apple Store</Text>
                <Text className={`w-[60%] text-justify font-thin mt-2`}>This is an apple store description please take it seriously fuck I am tired fix this</Text>
            </View>
            <View className={`w-1/3 h-full flex items-center justify-center`}>
                <Text>Place brand logo</Text>
            </View>
        </View>
        <View className={`w-full h-1/4 flex items-center justify-center`}>
            <View className={`w-[90%] h-[80%] bg-[#614bc3] rounded-xl shadow flex items-center justify-center`}>
                <Text>Place brand banner or ad here</Text>
            </View>
        </View>
        <View className={`w-full h-2/4`}>
            <View className={`w-full h-[10%] flex items-start px-3 justify-center`}>
                <Text className={`font-bold text-[20px]`}>Products on Promo</Text>
            </View>
            <View className={`flex-1`}>
                <ScrollView contentContainerStyle={{alignItems:"center", justifyContent: "center", flexWrap: "wrap", flexDirection:"row"}} className={`w-full`}>
                    <View className={`w-[180px] h-[200px] mt-2 rounded-xl shadow bg-white border-[0.25px] border-gray-300`}></View>
                    <View className={`w-[180px] h-[200px] mt-2 ml-2 rounded-xl shadow bg-white border-[0.25px] border-gray-300`}></View>
                    <View className={`w-[180px] h-[200px] mt-2 rounded-xl shadow bg-white border-[0.25px] border-gray-300`}></View>
                    <View className={`w-[180px] h-[200px] mt-2 ml-2 rounded-xl shadow bg-white border-[0.25px] border-gray-300`}></View>
                </ScrollView>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default StoreScreen;