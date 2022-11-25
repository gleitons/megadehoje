import DepoimentosMega from "./DepoimentosMega"
import Link from "next/link"
export default function TodosDepoimentos() {
    return (
        <>
            <h2>O que é a Mega-Sena</h2>
            <p>A Mega-Sena é a maior modalidade lotérica do Brasil, sendo uma entre as dez modalidades atuais das loterias da Caixa (Caixa Econômica Federal), com sorteios ordinários duas vezes por semana, além da Mega-Sena da Virada e outras modalidades de prêmios, devido a baixa arrecadação de Mercado.

                Para ganhar o prêmio máximo da Mega-Sena, denominado sena, é necessário obter coincidência entre seis dos números apostados e os seis números sorteados, de um total de seis dezenas (de um a sessenta), independentemente da ordem da aposta ou da ordem do sorteio. O concurso prevê também a chance de se ganhar parte do prêmio máximo, pelo acerto da quina (apenas cinco dos números sorteados), ou da quadra (apenas quatro dos números sorteados), com prêmios significativamente menores que aquele que seria pago na ocorrência do acerto da sena, sendo o da quina maior que o da quadra.</p>

            <h2>Depoimentos</h2>
            <p>Escolhemos um site de confiança que está a mais de 12 anos no mercado e já distribuiu mais de 100 milhões de reais em prêmios. Confira os depoimentos de quem também já jogou e confia.</p>

            <DepoimentosMega Cidade="São Paulo - SP" Depoimento='A partir do mês de Setembro deste ano eu passei a fazer minhas apostas por este Site. O que me deu muita confiança foi a emissão da nota fiscal dos valores gastos com as apostas, o que nos dá segurança da idoneidade do serviço prestado.' Nome='Mario Antonio Pires' />

            <DepoimentosMega Cidade="Campinas - SP" Depoimento='Vim aqui parabenizar o trabalho sério que vocês fazem. Ainda não ganhei um prêmio de expressão, mas vejo que jogando com vocês as chances aumentam de forma real. Quero tentar jogar sempre e com certeza estarei no bolão da Mega da Virada. Gosto de jogar em bolão porque todo mundo ganha. Abraços!' Nome='Gleidson Cezar de Moura' />


            <DepoimentosMega Cidade="Rio de Janeiro - RJ" Depoimento='Muito prático e rápido este site, adorei!!!!!' Nome='Norma Freitas da Costa' />

            <DepoimentosMega Cidade="ipojuca - PE" Depoimento='Obrigado! É um site com total segurança. Sempre faço minhas apostas aqui. Estou muito feliz pela premiação e espero realizar meus sonhos!!' Nome='José sandro de oliveira' />


            <DepoimentosMega Cidade="Nova Iguaçu - RJ" Depoimento='Ganhei na Lotofácil!! Pouco, mas joguei de primeira no site e pontuei! Vou continuar tentando!!!' Nome='Carina de oliveira Conceição' />

            <DepoimentosMega Cidade="Belo Horizonte - MG" Depoimento='Desde que comecei a jogar, todos os dias eu ganho com 12 e 13 acertos. Estou amandoooo!!' Nome='Edileide de Souza Braga' />
            <p>Todos os depoimentos são de pessoas que agora apostam online sem sair do conforto de sua casa. Depoimento de pessoas que conseguiram realizar bolões por apenas R$ 10,00 e serem premiadas nesse ano de 2021.</p>

            <p>Não perca essa oportunidade, jogue online agora mesmo.</p>
            <h2>Como jogar na Mega-sena</h2>
            <p>A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha).</p>
            <p>Para jogar online, basta acessar o link abaixo:</p>
            <Link href='http://bit.ly/aposte-online' target='_blank' ><button>Jogar Online Agora mesmo</button></Link>
        </>
    )
}