import { userInfo } from '../apiFunctions'
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from 'react'
import { AUTH_STORAGE_KEY } from '../utils/utils';
import Layout from '../components/layout'
import { Heading } from 'native-base';

const ScreenOne = () => {
    const [name, setName] = useState("")
    const getUserInfo = async () => {
        const token = await AsyncStorage.getItem(AUTH_STORAGE_KEY)
        const user = await userInfo(token);
        return setName(user.user)

    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <Layout>

            <Heading color="white" size="xl">HOLA {name.toUpperCase()}</Heading>
        </Layout>
    )
}

export default ScreenOne