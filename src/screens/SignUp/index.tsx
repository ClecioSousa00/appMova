import * as S from './styles'

import { useState } from 'react'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebaseConfig'

import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import { CreateUserSchemaProps, Form } from '../../components/Form'

import { AlreadyAccount } from '../../components/AlreadyAccount'

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const handleSign = (data: CreateUserSchemaProps) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {})
      .catch((error) => {
        const errorCode = error.code

        if (errorCode === 'auth/email-already-in-use') {
          Alert.alert(
            'Aviso',
            'Já existe uma conta com o endereço de email fornecido.',
          )
        }
        const errorMessage = error.message
        console.log('erro ao criar conta do usuário ', errorMessage)
      })
    setIsLoading(false)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <Form
          title="Criar Conta"
          textButton="Inscrever-se"
          loading={isLoading}
          handleSign={handleSign}
        />

        <AlreadyAccount
          text="Já tem uma conta?"
          buttonText="Entrar"
          routeName="signIn"
        />
      </S.Container>
    </TouchableWithoutFeedback>
  )
}
