import { Imagem, Titulo, Preco } from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Titulo>Marvel`s Spider-Man: Miles Morales PS4 & PS5</Titulo>
    <Preco>
      De <span>R$ 299,99</span> <br />
      por apenas R$ 149,99
    </Preco>
  </Imagem>
)

export default Banner
