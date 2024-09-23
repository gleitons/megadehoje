import { FaMoneyCheckAlt } from 'react-icons/fa'; // Ícones genéricos
import { GiTwoCoins, GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'; // Ícones temáticos

const loterias = [
  {
    nome: 'Mega-Sena',
    link: '/mega-sena',
    icone: <FaMoneyCheckAlt />,
    cor: 'green-600', // Cor verde, associada à Mega-Sena
  },
  {
    nome: 'Lotofácil',
    link: '/lotofacil',
    icone: <GiTwoCoins />,
    cor: 'purple-500', // Cor roxa, associada à Lotofácil
  },
  {
    nome: 'Quina',
    link: '/quina',
    icone: <GiPerspectiveDiceSixFacesRandom />,
    cor: 'blue-600', // Cor azul, associada à Quina
  },
  {
    nome: 'Lotomania',
    link: '/lotomania',
    icone: <FaMoneyCheckAlt />,
    cor: 'orange-500', // Cor laranja, associada à Lotomania
  },
  {
    nome: 'Timemania',
    link: '/timemania',
    icone: <GiTwoCoins />,
    cor: 'yellow-500', // Cor amarela, associada à Timemania
  },
  {
    nome: 'Dupla Sena',
    link: '/dupla-sena',
    icone: <GiPerspectiveDiceSixFacesRandom />,
    cor: 'red-600', // Cor vermelha, associada à Dupla Sena
  },
  {
    nome: 'Dia de Sorte',
    link: '/dia-de-sorte',
    icone: <FaMoneyCheckAlt />,
    cor: 'pink-500', // Cor rosa, associada ao Dia de Sorte
  }
];

export default loterias;
