import React, {useRef, useCallback} from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import {Link} from 'react-router-dom'

import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'

import { useToast } from '../../hooks/toast'

import logoImg from '../../assets/logoTMT.svg'

import Button from '../../components/Button'
import Input from '../../components/Input'

import { Container, Content, Background, AnimationContainer } from './styles'


const SignIn: React.FC = () => {

    const formRef= useRef<FormHandles>(null);

    const {addToast} = useToast();

    const handleSubmit = useCallback(async(data: object) => {
        try {
            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória'),
            })

            await schema.validate(data, {
                abortEarly: false,
            });
            
        } catch (err) {
            if (err instanceof Yup.ValidationError){
                const errors = getValidationErrors(err)

                formRef.current?.setErrors(errors)
            }

            addToast();
        }
    }, [addToast]);
    return(
        <Container>
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="GoBarber" />

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu logon</h1>
                        
                        <Input name="email" icon={FiMail} placeholder="E-mail"></Input>

                        <Input  name="password" icon={FiLock} type="password" placeholder="Senha"></Input>

                        <Button type="submit">Entrar</Button>

                        <Link to="/forgotpassword">Esqueci minha senha</Link>
                    </Form>

                    <Link to="/signup">
                        <FiLogIn/>
                        Criar conta
                    </Link>
                </AnimationContainer>
            </Content>

            <Background />

        </Container>
    )};

export default SignIn;