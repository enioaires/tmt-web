import React from 'react';
import { FiAlertTriangle, FiXCircle, FiUserCheck, FiInfo } from "react-icons/fi";

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
        <Container>
            <Toast hasDescription>
                <FiInfo size={20}/>

                <div>
                    <strong>INFO</strong>
                    <p>informações</p>
                </div>

                <button type="button">
                    <FiXCircle size={18}/>
                </button>
            </Toast>

            <Toast type = "success" hasDescription={false}>
                <FiUserCheck size={20}/>

                <div>
                    <strong>Login efetuado com sucesso</strong>
                </div>

                <button type="button">
                    <FiXCircle size={18}/>
                </button>
            </Toast>

            <Toast type="error" hasDescription>
                <FiAlertTriangle size={20}/>

                <div>
                    <strong>Aconteceu um erro</strong>
                    <p>Não foi possível fazer login na aplicação</p>
                </div>

                <button type="button">
                    <FiXCircle size={18}/>
                </button>
            </Toast>
        </Container>
  )}

export default ToastContainer;