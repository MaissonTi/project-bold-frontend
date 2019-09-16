import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import { TimelineMax } from 'gsap/all';
import { Container, Content } from './styles';
import BasePage from '../../components/basePage';

import { signInRequest, signUpRequest } from '../../store/modules/auth/actions';

import { isValidLogin, isValidCreate } from './validation';

const schemaLogin = isValidLogin();
const schemaCreate = isValidCreate();

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const tl = new TimelineMax();

  const container = document.getElementsByClassName('containerEnv');
  const envelope = document.getElementsByClassName('env');
  const envFront = document.getElementsByClassName('front');
  const envBack = document.getElementsByClassName('back');

  useEffect(() => {
    tl.set(container, { perspective: 1800 })
      .set(envelope, { transformStyle: 'preserve-3d' })
      .set(envBack, { rotationY: -180 })
      .set([envBack, envFront], { backfaceVisibility: 'hidden' });
  });

  function flapFace() {
    tl.to(envelope, 1, { rotationY: 180 });
  }

  function flapBack() {
    tl.to(envelope, 1, { rotationY: 0 });
  }

  function handleSubmitLogin({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  function handleSubmitCreate({ nameSave, emailSave, passwordSave }) {
    dispatch(signUpRequest(nameSave, emailSave, passwordSave));
  }

  return (
    <BasePage>
      <Container className="containerEnv">
        <div className="env">
          <div className="envFace front card">
            <div className="row">
              <div className="col s4">
                <h5>Entre em sua conta!</h5>
                <p>
                  Caso ainda não tenha sua conta, clique em
                  <b> Criar nova conta.</b>
                </p>
              </div>

              <div className="col s8">
                <Content>
                  <Form schema={schemaLogin} onSubmit={handleSubmitLogin}>
                    <Input name="email" type="email" placeholder="Seu email" />
                    <Input
                      name="password"
                      type="password"
                      placeholder="Sua senha"
                    />

                    <div>
                      <button
                        type="button"
                        className="white waves-light btn-large red"
                        onClick={flapFace}
                      >
                        Criar nova conta
                      </button>
                      <button
                        type="submit"
                        className="waves-light btn-large red"
                      >
                        {loading ? 'Carregando...' : 'Acessar'}
                      </button>
                    </div>
                  </Form>
                </Content>
              </div>
            </div>
          </div>
          <div className="envFace back card">
            <div className="row">
              <div className="col s4">
                <h5>Crie sua conta!</h5>
                <p>Crie sua conta e veja as melhores aulas sobre tecnologia</p>
              </div>
              <div className="col s8">
                <Content>
                  <Form schema={schemaCreate} onSubmit={handleSubmitCreate}>
                    <Input
                      name="nameSave"
                      type="text"
                      placeholder="Nome completo"
                    />
                    <Input name="emailSave" type="email" placeholder="Email" />
                    <Input
                      name="passwordSave"
                      type="password"
                      placeholder="Senha"
                    />

                    <div>
                      <button
                        type="button"
                        className="white-lack btn-large"
                        onClick={flapBack}
                      >
                        Já possuo conta!
                      </button>
                      <button
                        type="submit"
                        className="waves-light btn-large red"
                      >
                        {loading ? 'Carregando...' : 'Criar'}
                      </button>
                    </div>
                  </Form>
                </Content>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </BasePage>
  );
}
