import { FiPlus } from "react-icons/fi";

import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { HomeNote } from "../../components/HomeNote";

export function Home() {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <div className="home-header">
            <h1>Meus filmes</h1>
            <ButtonText to="/createmovie"
              icon={FiPlus}
              title="Adicionar filme"
            />
          </div>

          <div className="movies">
            <HomeNote
              movieTitle="Interstellar"
              text={`Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.

              Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
              `}
              rating={5}
              datatags={{tags: [
                  { id: '1', text: 'Ficção Científica' },
                  { id: '2', text: 'Drama' },
                  { id: '3', text: 'Família' }
                ]
              }}
            />

            <HomeNote
              movieTitle="Interstellar"
              text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor fringilla, auctor nisi eget, accumsan nunc. Phasellus egestas nibh ut pulvinar laoreet. Nunc euismod, nisl eu rhoncus fermentum, ante urna pretium lacus, et convallis nulla quam eget nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ut lacinia est. Quisque lobortis mattis venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus efficitur lorem metus, at blandit dui lacinia in. Phasellus risus nibh, ullamcorper vel hendrerit a, finibus id nibh. Ut in euismod justo. Maecenas quis pellentesque ante, nec tempus nulla. Donec ut lorem quis velit efficitur eleifend. Sed nec orci vestibulum, feugiat ligula a, accumsan nisi. Nunc et mauris eu arcu ultricies pharetra ut eget quam.

              Mauris nec diam purus. Maecenas sed cursus nisi. Vivamus hendrerit erat risus, eget interdum mi consectetur sed. Suspendisse potenti. Nullam vestibulum, quam eu placerat mollis, felis enim elementum turpis, sed dapibus justo nunc imperdiet quam. Nunc at iaculis augue. Aliquam nibh risus, ornare vitae sodales et, scelerisque ac augue. In vitae turpis sagittis, maximus odio id, tristique tortor. Aenean sapien mauris, euismod eu porta a, hendrerit quis libero. Nulla id quam eleifend, euismod quam eu, ullamcorper mi. Duis ac ligula egestas mauris iaculis volutpat. Etiam dolor nibh, aliquet et posuere in, sagittis quis metus.

              Donec vitae dignissim lorem, eu mollis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Mauris euismod urna velit, at porta metus vulputate ac. Proin pharetra, felis eu aliquet molestie, purus lectus malesuada sem, ornare ornare ligula lectus id dui. In commodo nisi et est consectetur laoreet. Nulla eu risus metus. Curabitur in lorem aliquam, lacinia sapien et, rutrum sapien. Morbi ultricies imperdiet orci, et dignissim orci commodo interdum. Etiam eu sagittis est. Donec eu posuere purus. Vestibulum ultrices fringilla dolor vulputate convallis. Curabitur vel lacinia justo, non blandit sem. Cras vitae neque purus.

              In vitae viverra orci. Curabitur ut dui ac arcu gravida feugiat. Vivamus consequat viverra orci, sit amet ullamcorper quam pharetra a. Donec vitae neque leo. Nullam pulvinar arcu ut rutrum vestibulum. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur id neque ut tristique. Nullam et rhoncus nisi.
              `}
              rating={2}
              datatags={{tags: [
                { id: '1', text: 'Ficção Científica' },
                { id: '2', text: 'Drama' },
                { id: '3', text: 'Família' }
                ]
              }}
            />

            <HomeNote
              movieTitle="Interstellar"
              text={`Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.

              Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
              `}

              datatags={{tags: [
                { id: '1', text: 'Ficção Científica' },
                { id: '2', text: 'Drama' },
                { id: '3', text: 'Família' }
                ]
              }}
            />
          </div>
        </Content>
      </main>
    </Container>
  )
}
