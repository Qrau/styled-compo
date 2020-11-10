import React from 'react'
import { Container, Form, FormContent, FormH1, FormInput, FormLabel, Icon, FormButton, Text } from './SignInElements'

const SignIn = () => {
    return (
            <Container>
                <Icon to='/'>logO herE</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign in tou your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='password' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot Pass?</Text>
                    </Form>
                </FormContent>
            </Container>
    )
}

export default SignIn
