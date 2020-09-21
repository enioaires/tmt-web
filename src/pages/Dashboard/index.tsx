import React, { useRef, useCallback } from 'react';

import { FiPower, FiTruck, FiCalendar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as S from './styles';

import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'


import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Button from '../../components/Button'
import Input from '../../components/Input'

import logoImg from '../../assets/logoTMT.svg';





const Dashboard: React.FC = () => {

    const formRef= useRef<FormHandles>(null);

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

        }
    }, []);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <img src={logoImg} alt="Logo TMT" />

          <S.HeaderProfile>
            <div>
              <span>Bem-vindo,</span>
                <strong>Enio Aires</strong>
            </div>
          </S.HeaderProfile>
          <button type="button">
            <Link to = {"/"}>
                <FiPower size={20} />
            </Link>
          </button>
        </S.HeaderContent>
      </S.Header>

      <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Info. de Tarifas</h1>
                        
                        <Input name="eixo" icon={FiTruck} placeholder="Eixo"></Input>

                        <Input  name="cidadeDeOrigem" icon={FiTruck} placeholder="Cidade de Origem"></Input>
                        
                        <Input  name="UfOrigem" icon={FiTruck} placeholder="UF Origem"></Input>

                        <Input  name="CódigoIBGECidadeOrigem" icon={FiTruck} placeholder="Código IBGE Cidade Origem"></Input>

                        <Input  name="CidadeDeDestino" icon={FiTruck} placeholder="Cidade de Destino"></Input>

                        <Input  name="UFDestino" icon={FiTruck} placeholder="UF Destino"></Input>

                        <Input  name="CódigoIBGECidadeDestino" icon={FiTruck} placeholder="Código IBGE Cidade Destino"></Input>

                        <Input  name="Km" icon={FiTruck} placeholder="Km"></Input>

                        <Input  name="CapacidadeTONS" icon={FiTruck} placeholder="Capacidade TONS"></Input>

                        <Input  name="Pedágio(R$/Eixo)" icon={FiTruck} placeholder="Pedágio ( R$/Eixo )"></Input>

                        <Input  name="TarifaCarreteiro(ComPedágio)(R$/Ton)" icon={FiTruck} placeholder="Tarifa Carreteiro ( Com Pedágio ) ( R$/Ton)"></Input>

                        <Input  name="FontedaInformação" icon={FiTruck} placeholder="Fonte da Informação"></Input>

                        <Input  name="Transportadora" icon={FiTruck} placeholder="Transportadora"></Input>

                        <Input  name="DataDaColeta" icon={FiCalendar} placeholder="Data da Coleta"></Input>


                        <Button type="submit">Gerar Tabela</Button>
                    </Form>

 </S.Container>
  );
}


export default Dashboard