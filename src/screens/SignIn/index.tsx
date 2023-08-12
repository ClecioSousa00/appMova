import * as S from './styles'

import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebaseConfig'

import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import { AlreadyAccount } from '../../components/AlreadyAccount'
import { CreateUserSchemaProps, Form } from '../../components/Form'
import { StackAuthType } from '../../routes/authRoutes'

export const SignIn = () => {
  const navigation = useNavigation<StackAuthType>()
  const [isLoading, setIsLoading] = useState(false)

  const handleSign = (data: CreateUserSchemaProps) => {
    setIsLoading(true)
    console.log(data)
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {})
      .catch((error) => {
        const errorCode = error.code

        if (errorCode === 'auth/user-not-found') {
          Alert.alert(
            'Aviso',
            'Usuário não encontrado. Verifique se o e-mail está cadastrado.',
          )
        }
        if (errorCode === 'auth/wrong-password') {
          Alert.alert('Aviso', 'Senha incorreta. Verifique a senha digitada.')
        }
        const errorMessage = error.message
        console.log('erro ao fazer login', errorMessage)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <Form
          title="Faça login na sua conta"
          textButton="Entrar"
          loading={isLoading}
          handleSign={handleSign}
        />
        <S.ButtonForgotPassword
          onPress={() => navigation.navigate('forgotPassword')}
        >
          <S.TextForgotPassword>Esqueceu sua senha ?</S.TextForgotPassword>
        </S.ButtonForgotPassword>
        <AlreadyAccount
          text="Não possui uma conta?"
          buttonText="Cadastre-se"
          routeName="signUp"
        />
      </S.Container>
    </TouchableWithoutFeedback>
  )
}
