import React from 'react';
import { Container, CopyRight, Footer, Pagamento, Pay, SubMenu } from './footer-styled';
import { BsInstagram, BsTwitter, BsFacebook, BsYoutube } from 'react-icons/bs';
import { SocialMedias } from './footer-styled';

function FooterPage() {
  return (
    <>
      <Container>
        <Footer>
          <Pagamento>
          
            <form>
              <label htmlFor="cadastro">Inscreva-se para receber nossas incríveis novidades por e-mail!</label>
              <input type="text" name="cadastro" className="name" placeholder="Nome"/>
              <input type="email" name="email" id="email" className="email" placeholder="Email" />
              <button type="submit" className="button">Assinar</button>
            </form>
          
            <Pay>
              <img src="/icons/american-express.svg" alt="" />
              <img src="/icons/boleto.svg" alt="" />
              <img src="/icons/diners.svg" alt="" />
              <img src="/icons/elo.svg" alt="" />
              <img src="/icons/mastercard.svg" alt="" />
              <img src="/icons/paypal.svg" alt="" />
              <img src="/icons/pix.svg" alt="" />
              <img src="/icons/visa.svg" alt="" />
            </Pay>

            <SubMenu>
        
              <div>
                <ul>
                  <h3>Categorias</h3>
                  <li>Feminino</li>
                  <li>Masculino</li>
                  <li>Infantil</li>
                  <li>Acessórios</li>
                  <li>Calçados</li>
                  <li>Decoração</li>
                  <li>Outlet</li>
                </ul>
              </div>
              <div>
                <ul>
                  <h3>Institucional</h3>
                  <li>Quem somos</li>
                  <li>Nossa loja</li>
                  <li>Central de atendimento</li>
                  <li>Trabalhe conosco</li>
                  <li>Política de privacidade</li>
                  <li>Condiçoes e frete</li>
                  <li>Sobre nossos produtos</li>
                </ul>
              </div>
              <div>
                <ul>
                  <h3>Ajuda</h3>
                  <li>00-0000-0000</li>
                  <li>00-0-0000-0000</li>
                  <li>@mendes-store.com.br</li>
                  <li>SEG a SAB das 9H - 19H</li>
                  <SocialMedias>
                    <BsInstagram />
                    <BsTwitter />
                    <BsFacebook />
                    <BsYoutube />
                  </SocialMedias>
                </ul>
              </div>
             
            </SubMenu>
          </Pagamento>
        </Footer>
      </Container>
      <CopyRight>
          © 2023 - Todos os direitos reservados. Conteúdo licenciado.
      </CopyRight>
    </>
  );
}
export default FooterPage;
