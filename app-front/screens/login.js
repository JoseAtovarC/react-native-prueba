import React, { useState, useCallback } from 'react'
import { Input, Button } from 'native-base';
import { Icon } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import Layout from '../components/layout';
import { useForm } from "react-hook-form"
import { useAuth } from '../hooks/useAuth';


const Login = ({ navigation }) => {

    const [show, setShow] = useState(false);
    const { login } = useAuth();


    const { handleSubmit, setValue } = useForm();

    const onSubmit = async (formData) => {

        try {
            login(formData)
                .then(() => navigation.navigate("screenOne"))

        } catch (error) {
            console.log(error)
        }
    }

    const onChangeField = useCallback(
        user => password => {
            setValue(user, password);
        },
        []
    );

    return (
        <Layout>

            <Input w={{
                base: "75%",
                md: "25%"
            }} InputLeftElement={<Icon as={<MaterialIcons name="person" />}
                size={5} ml="2" color="muted.400" />}
                onChangeText={onChangeField('user')}
                placeholder="Name"
                mb="3" />

            <Input w={{
                base: "75%",
                md: "25%"
            }} type={show ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" :
                "visibility-off"} />}
                size={5} mr="2" color="muted.400" mb="3" onPress={() => setShow(!show)} />}
                onChangeText={onChangeField('password')}
                placeholder="Password" />

            <Button backgroundColor="light.300"
                w="40%"
                mt="3"

                _text={{
                    color: "black"
                }} title="Submit" onPress={handleSubmit(onSubmit)} >Login</Button>

            <Button title="Submit"
                mt="3"
                w="40%"
                backgroundColor="yellow.300"
                _text={{
                    color: "black"
                }}

                onPress={() => navigation.push('register')} >Register</Button>

        </Layout >
    )
}

export default Login