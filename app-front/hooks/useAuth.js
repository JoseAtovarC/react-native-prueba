import { AUTH_STORAGE_KEY } from "../utils/utils";
import { loginUser, createUser } from "../apiFunctions";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuth = () => {
    const isAuth = async () => {
        return await AsyncStorage.getItem(AUTH_STORAGE_KEY)

    }
    const [isLoading, updateIsLoading] = useState(false);


    const register = async (user) => {
        updateIsLoading(true); // me pongo en modo carga
        await createUser(user);
        updateIsLoading(false); // cuando termino de llamar al API dejo de cargar
    }

    const login = async (user) => {
        updateIsLoading(true); // me pongo en modo carga
        const token = await loginUser(user);
        await AsyncStorage.setItem(AUTH_STORAGE_KEY, token.access_token);
        updateIsLoading(false); // cuando termino de llamar al API dejo de cargar
    }



    return {
        isAuth,
        isLoading,
        register,
        login,
    }

}