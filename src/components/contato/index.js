import React, { useEffect, useState } from 'react';
import * as M from 'materialize-css';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Container, ModalDiv, Content } from './styles';
import api from '../../services/api';

const schema = Yup.object().shape({
  emailContato: Yup.string()
    .email('Insira um email valido')
    .required('O e-mail é obrigatório'),
  nomeContato: Yup.string().required('O nome é obrigatório'),
  telefoneContato: Yup.string().required('O telefone é obrigatório'),
  mensagemContato: Yup.string().required('A messagem é obrigatório'),
  sobrenomeContato: Yup.string().required('A sobrenome é obrigatório'),
});

export default function Contato() {
  const [modal, setModal] = useState({});

  useEffect(() => {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      startingTop: '4%',
      endingTop: '10%',
      onCloseEnd: () => {},
    };

    M.Modal.init(modal, options);
  }, [modal]);

  function openModal() {
    const instance = M.Modal.getInstance(modal);
    instance.open();
  }

  function closeModal() {
    const instance = M.Modal.getInstance(modal);
    instance.close();
  }

  async function handleSubmit(json) {
    const contato = {
      nome: json.nomeContato,
      sobrenome: json.sobrenomeContato,
      telefone: json.telefoneContato,
      email: json.emailContato,
      messagem: json.mensagemContato,
    };

    const result = await api.post(`/email`, contato);

    if (result.status === 200)
      toast.success('Email enviado com sucesso.', {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        onClose: () => {
          closeModal();
        },
      });
  }

  return (
    <Container>
      <button
        type="button"
        onClick={openModal}
        className="waves-effect waves-light btn-large red"
      >
        FALE CONOSCO
      </button>

      <ModalDiv
        className="modal"
        ref={Modal => {
          setModal(Modal);
        }}
      >
        <div className="modal-content">
          <h4>Fale conosco</h4>
          <div className="row">
            <div className="col s4">
              <h5>Entre em contato!</h5>
              <p>
                Tem alguma dúvida sobre nosso cursos, metodologia ou mentores?
                vem falar com a gente :)
              </p>
            </div>

            <div className="col s8">
              <Content>
                <Form schema={schema} onSubmit={handleSubmit}>
                  <div>
                    <div>
                      <Input
                        name="nomeContato"
                        type="text"
                        placeholder="Primeiro Nome"
                      />
                    </div>

                    <div>
                      <Input
                        name="sobrenomeContato"
                        type="text"
                        placeholder="Sobrenome"
                      />
                    </div>
                    <div>
                      <Input
                        name="emailContato"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <Input
                        name="telefoneContato"
                        type="text"
                        placeholder="Telefone"
                      />
                    </div>
                  </div>
                  <Input
                    multiline
                    name="mensagemContato"
                    className="materialize-textarea"
                    placeholder="Sua mensagem"
                  />

                  <button
                    type="submit"
                    className="waves-effect waves-light btn-large red"
                  >
                    Comece uma conversa
                  </button>
                </Form>
              </Content>
            </div>
          </div>
        </div>
      </ModalDiv>
    </Container>
  );
}
