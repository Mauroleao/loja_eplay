import { Imagem, Titulo, Preco } from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia.</Tag>
      <div>
        <Titulo>Marvel`s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Preco>
          De <span>R$ 299,99</span> <br />
          por apenas R$ 149,99
        </Preco>
      </div>

      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
