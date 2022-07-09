import { Flex } from 'native-base'
import React from 'react'

const Layout = ({ children }) => {

    return (
        <Flex align="center" flexGrow="1" justify="center" backgroundColor="muted.800"
            p="5">
            {children}
        </Flex>
    )
}

export default Layout