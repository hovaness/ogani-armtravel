import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {UserCircleIcon} from 'react-native-heroicons/outline'
import {ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon} from 'react-native-heroicons/solid'
import Categorys from '../components/Categorys';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown:false, 
        })
    }, [])

    return (
        <SafeAreaView className='px-3 bg-zinc-100 mt-4'>
            {/* Header */}
            <View className='flex-row pb-3 items-center mx-2 justify-between '>
                <View className=''>
                    <Text className='font-bold text-gray-400 text-xs'>
                        Вы здесь!
                    </Text>
                    <View className= 'flex-row items-center space-x-1'>
                        <Text className='font-bold text-xl items-center'>
                            Ереван
                        </Text>
                        <ChevronDownIcon size={18} color='#A1A7B0'/>
                    </View>
                </View>
                <UserCircleIcon size={40} color='#464646'/>
            </View>

            {/* Search */}
            <View className='mx-2 pb-3 flex-row  items-center justify-between '>
                <View className='bg-white p-3 rounded-xl flex-row  space-x-2 w-64'>
                    <MagnifyingGlassIcon size={24} color='#CED0D4'/>
                    <TextInput className='text-gray-700' placeholder='Введите город или регион'></TextInput>
                </View>
                <AdjustmentsHorizontalIcon size={48} color='#4C9FC1'/>
            </View>

            {/* Body */}
            <ScrollView>
                <Categorys/>
            </ScrollView>
        </SafeAreaView>        
    )
}

export default HomeScreen