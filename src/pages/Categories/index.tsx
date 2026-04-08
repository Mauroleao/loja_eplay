import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zeldat from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Jogo de ação e aventura em mundo aberto.',
    title: 'Aventura Épica',
    system: 'PC',
    infos: ['10%', 'R$ 179,99'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description: 'Jogo de ação e aventura em mundo aberto.',
    title: 'Diablo',
    system: 'PC',
    infos: ['10%', 'R$ 179,99'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description: 'Jogo de ação e aventura em mundo aberto.',
    title: 'Zeldat',
    system: 'PC',
    infos: ['10%', 'R$ 179,99'],
    image: zeldat
  },
  {
    id: 4,
    category: 'Ação',
    description: 'Jogo de ação e aventura em mundo aberto.',
    title: 'Star Wars',
    system: 'PC',
    infos: ['10%', 'R$ 179,99'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'Jogo de ação e aventura em mundo aberto.',
    title: 'Aventura Épica',
    system: 'PC',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'Ação',
    description: 'Jogo de ação e aventura em mundo aberto.',
    title: 'Aventura Épica',
    system: 'PC',
    infos: ['17/05'],
    image: zeldat
  },
  {
    id: 7,
    category: 'Ação',
    description: 'Jogo de ação e aventura em mundo aberto.',
    title: 'Aventura Épica',
    system: 'PC',
    infos: ['17/05'],
    image: resident
  },
  {
    id: 8,
    category: 'Ação',
    description: 'Jogo de ação e aventura em mundo aberto.',
    title: 'Aventura Épica',
    system: 'PC',
    infos: ['17/05'],
    image: starWars
  }
]

const Categories = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Categories
