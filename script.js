const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
//acima criação das constantes JS dos elementos HTML


const perguntas = [

    {
        enunciado: "Quais os principais desafios de escolher entre entrar na faculdade logo após o ensino médio ou buscar o primeiro emprego?",
        alternativas: [
            {
                texto: "Entrar direto na faculdade garante continuidade nos estudos",
                afirmacao: "Isso exige escolher uma carreira sem ter vivência prática no mercado. "
            },
            {
                texto: "Buscar o primeiro emprego traz independência financeira rápida.",
                afirmacao: "Isso pode dificultar a conciliação de horários ao decidir cursar uma faculdade depois."
            }
        ]
    },

      {
        enunciado: "Como a combinação de faculdade e primeira profissão impacta o desenvolvimento do jovem adulto?",
        alternativas: [
            {
                texto: "Fazer faculdade e trabalhar ao mesmo tempo acelera o crescimento pessoal.",
                afirmacao: "Essa rotina exige alto nível de organização e gestão do tempo. "
            },
            {
                texto: "A união de teoria e prática fortalece o currículo desde o início.",
                afirmacao: "Isso aumenta as chances de ascensão rápida no mercado de trabalho."
            }
        ]
    },

      {
        enunciado: "Como a conclusão do ensino médio influencia a decisão entre seguir para o ensino superior ou ingressar no mercado de trabalho?",
        alternativas: [
            {
                texto: "O fim do ensino médio marca o encerramento da formação básica.",
                afirmacao: "Essa etapa gera pressão para decidir rapidamente os próximos passos profissionais. "
            },
            {
                texto: "A formação escolar desperta o desejo por autonomia.",
                afirmacao: "A necessidade de renda faz muitos jovens priorizarem a primeira profissão."
            }
            
            
            //fechamento do objeto do texto e afirmação da lista de alternativas
        ]//fechamento da lista de alternativas
    }//fechamento do objeto com enunciado e lista de alternativas da lista de perguntas
            
]; //fechamento da lista de perguntas


let atual = 0; //variavel do inicio da lista de perguntas
let perguntaAtual; //variavel correspondente a pergunta atual selecionada
let historiaFinal = ""; //variavel que guarda os textos das afirmações para formar a frase final da IA

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    } 
//função que verifica se a ordem da pergunta atual é maior ou igual a das outras perguntas da lista. Se j[a foi todas, exibe o texto final]
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
} // codigo que mostra o texto de pergunta atual extraido do item enunciado.

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    } //Para a constante alternativa das alternativas é criado um botão novo com alternativa diferente a cada vez que seleciona uma resposta pelo clique
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
} //uma função seleciona as resposta e que vai juntando as afirmaçÕes delas em uma variavel historiaFinal selecionadas de acordo com as opçÕes selecionadas

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
} //função que mostra o Resultado final iniciando com nov um breve texto na caixa de perguntas e que o resultado do final é inserido com o texto guardado na varivel historiaFInal com um espaçamento vazio criado na caixa de alternativas.

mostraPergunta(); //função geral que mostra a pergunta