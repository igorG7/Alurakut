import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/components/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar (propriedades) {
  console.log(propriedades);
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`}  style= {{borderRadius: '8px'}} />
    </Box>
  )
}



export default function Home() {
  const usuarioAleatorio = 'igorG7'
  const pessoasFavoritas = ["Lais102",
                    "kellycesario",
                    "GusthAlexandre"
                    ,"Lorenaasilva",
                    "omariosouto",
                    "rafaballerini"]

  return (
    <>
    <AlurakutMenu/>
    <MainGrid>
      <div className = "profileArea" style ={{gridArea:'profileArea'}}>
        <ProfileSidebar githubUser = {usuarioAleatorio} />
      </div>
      
      <div className = "welcomeArea" style={{gridArea:'welcomeArea'}}>
        <Box>
          <h1 className = "title">
              Bem-vindo(a)
          </h1>
          
          <OrkutNostalgicIconSet/>
        </Box>
      </div>
      
      <div className = "profileRelationsArea" style={{gridArea:'profileRelationsArea'}}>
        <Box> 
          Comunidades
        </Box>
        <ProfileRelationsBoxWrapper>
          <h2 className ='smallTitle'>Pessoas ({pessoasFavoritas.length})</h2>
          
          <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>         
        </ProfileRelationsBoxWrapper>
      </div>         
    </MainGrid>
    </>
  )
}
