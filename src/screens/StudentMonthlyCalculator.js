import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

const StudentMonthlyCalculator = () => {

  return (
    <View className="w-full h-full">
      <View className={`w-full h-1/4 bg-[#614bc3]`}>
        <View className={`w-full flex items-center justify-end h-[65%]`}>
          <Text className={`text-[28px] text-white font-bold`}>Monthly Statement</Text>
        </View>
      </View>
      <View className={`relative w-full h-3/4 bg-white`}>
        <View className={`w-full h-[10%] border-b-[0.25px] border-gray-300 flex flex-row`}>
          <TouchableOpacity className={`w-1/2 h-full flex flex-row items-center justify-center`}>
            <Text className={`text-[25px] font-bold mr-1`}>2023</Text>
            <Ionicons name='chevron-down' size={25}/>
          </TouchableOpacity>
          <TouchableOpacity className={`w-1/2 h-full flex flex-row items-center justify-center`}>
            <Text className={`text-[25px] font-light mr-1`}>November</Text>
            <Ionicons name='chevron-down' size={25}/>
          </TouchableOpacity>
        </View>
        <View className={`w-full h-[12%] flex flex-row`}>
          <View className={`w-1/2 h-full border-r-[0.25px] border-gray-300 flex items-center justify-center`}>
            <Text className={`text-[25px] font-thin`}>Spent</Text>
            <Text className={`text-[20px] font-bold`}>RM 1,250</Text>
          </View>
          <View className={`w-1/2 h-full flex items-center justify-center`}>
            <Text className={`text-[25px] font-thin`}>Earned</Text>
            <Text className={`text-[20px] font-bold`}>RM 54,250</Text>
          </View>
        </View>
        <View className={`w-full h-[7%] flex items-center justify-center`}>
          <Text className={`font-bold text-[20px]`}>Breakdown</Text>
        </View>
        <View className={`absolute w-full h-[13%] bottom-12 flex items-center justify-center`}>
          <TouchableOpacity className={`w-[55%] h-[70%] rounded-2xl flex items-center justify-center shadow border-[0.25px] border-[#614bc3] bg-[#614bc3]`}>
            <Text className={`font-bold uppercase text-white text-[16px]`}>Add Transaction</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default StudentMonthlyCalculator;