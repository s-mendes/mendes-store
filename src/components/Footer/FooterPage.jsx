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
                  <li><a href="#">Feminino</a></li>
                  <li><a href="#">Masculino</a></li>
                  <li><a href="#">Infantil</a></li>
                  <li><a href="#">Acessórios</a></li>
                  <li><a href="#">Calçados</a></li>
                  <li><a href="#">Decoração</a></li>
                  <li><a href="#">Outlet</a></li>
                </ul>
              </div>
              <div>
                <ul>
                  <h3>Institucional</h3>
                  <li><a href="#">Quem somos</a></li>
                  <li><a href="#">Nossa loja</a></li>
                  <li><a href="#">Central de atendimento</a></li>
                  <li><a href="#">Trabalhe conosco</a></li>
                  <li><a href="#">Política de privacidade</a></li>
                  <li><a href="#">Condições e frete</a></li>
                  <li><a href="#">Sobre nossos produtos</a></li>
                </ul>
              </div>

              <div>
                <ul>
                  <h3>Ajuda</h3>
                  <li>00-0000-0000</li>
                  <li>+55 37 9.9996-6963</li>
                  <li>@s-mendes</li>
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
