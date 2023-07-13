import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
  }
`;



export default function Featured() {
  return(
    <Bg>
      <Center>
        <Wrapper>
          <div>
            <img src='https://content.vesti.cl/vendor/7c99b04b-a771-4ff9-924c-cd92c211530b/event/banner_d9256188-76de-4dae-a782-61c7dac36883.png' />
          </div>
        </Wrapper>
      </Center>
    </Bg>
  )
}