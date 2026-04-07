import Product from '../Product'

import { Container, List } from './style'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="https://dummyimage.com/222x250/cccccc/969696.jpg"
          infos={['-10%', 'R$ 235,00']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="https://dummyimage.com/222x250/cccccc/969696.jpg"
          infos={['-10%', 'R$ 235,00']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="https://dummyimage.com/222x250/cccccc/969696.jpg"
          infos={['-10%', 'R$ 235,00']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="https://dummyimage.com/222x250/cccccc/969696.jpg"
          infos={['-10%', 'R$ 235,00']}
          system="Windows"
          title="Nome do jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
