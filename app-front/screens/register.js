import React, { useCallback, useState } from 'react'
import { Text } from 'native-base';
import { Input, Button } from 'native-base';
import { Icon } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import Layout from '../components/layout';
import { useForm } from "react-hook-form"
import { useAuth } from '../hooks/useAuth';
import { validate } from '../validate/validateFunction';

const Register = ({ navigation }) => {
    const [message, setmessage] = useState("")
    const { handleSubmit, setValue } = useForm();
    const { register } = useAuth();

    const onSubmit = (formData) => {

        try {
            validate(formData, setmessage) ?
                register(formData)
                    .then(() => navigation.navigate("login")) : console.log('Validation Failed')



        }


        catch (error) {
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
                size={5} ml="2" color="muted.400" />} placeholder="Name"

                mb="3"
                onChangeText={onChangeField('user')}
            />

            <Input w={{
                base: "75%",
                md: "25%"
            }} type="password" InputRightElement={<Icon as={<MaterialIcons name={"visibility"} />}
                size={5} mr="2" color="muted.400" />} placeholder="Password"
                mb="3"
                onChangeText={onChangeField('password')}
            />

            <Input w={{
                base: "75%",
                md: "25%"
            }} type="password" InputRightElement={<Icon as={<MaterialIcons name={"visibility"} />}
                size={5} mr="2" color="muted.400" />}
                onChangeText={onChangeField('confirmPassword')}

                placeholder="Confirm your Password" />
            <Text color="red.600">{message}</Text>

            <Button title="Submit"
                backgroundColor="light.300"
                w="40%"
                mt="3"

                _text={{
                    color: "black"
                }}
                onPress={handleSubmit(onSubmit)} >Register</Button>

        </Layout>
    )
}

export default Register