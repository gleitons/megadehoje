import TodosDepoimentos from "./TodosDepoimentos"
import Link from "next/link"
export default function MegacomDepoimentos() {
    return (
        <>
        <h2>O que é a Mega-Sena</h2>
                    <p>A Mega-Sena é a maior modalidade lotérica do Brasil, sendo uma entre as dez modalidades atuais das loterias da Caixa (Caixa Econômica Federal), com sorteios ordinários duas vezes por semana, além da Mega-Sena da Virada e outras modalidades de prêmios, devido a baixa arrecadação de Mercado.

                        Para ganhar o prêmio máximo da Mega-Sena, denominado sena, é necessário obter coincidência entre seis dos números apostados e os seis números sorteados, de um total de seis dezenas (de um a sessenta), independentemente da ordem da aposta ou da ordem do sorteio. O concurso prevê também a chance de se ganhar parte do prêmio máximo, pelo acerto da quina (apenas cinco dos números sorteados), ou da quadra (apenas quatro dos números sorteados), com prêmios significativamente menores que aquele que seria pago na ocorrência do acerto da sena, sendo o da quina maior que o da quadra.</p>

                    <h2>Depoimentos</h2>
                    <p>Escolhemos um site de confiança que está a mais de 12 anos no mercado e já distribuiu mais de 100 milhões de reais em prêmios. Confira os depoimentos de quem também já jogou e confia.</p>

                    <TodosDepoimentos />
                    <p>Todos os depoimentos são de pessoas que agora apostam online sem sair do conforto de sua casa. Depoimento de pessoas que conseguiram realizar bolões por apenas R$ 10,00 e serem premiadas nesse ano de 2021.</p>

                    <p>Não perca essa oportunidade, jogue online agora mesmo.</p>
                    <h2>Como jogar na Mega-sena</h2>
                    <p>A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha).</p>
                    <p>Para jogar online, basta acessar o link abaixo:</p>
                    <Link href='http://bit.ly/aposte-online' target='_blank' ><button>Jogar Online Agora mesmo</button></Link>
        </>
    )
}