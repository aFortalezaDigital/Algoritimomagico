document.addEventListener('DOMContentLoaded', () => {
    const introSection = document.getElementById('intro-section');
    const problemSelection = document.getElementById('problem-selection');
    const questionSection = document.getElementById('question-section');
    const progressBar = document.getElementById('progress-bar');
    const thankYouMessage = document.getElementById('thank-you-message');
    const analyzingSection = document.getElementById('analyzing-section');
    const finalSection = document.getElementById('final-section');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');

    let currentPath = ''; // Variável que armazenará o caminho do problema escolhido
    let currentStep = 0;

    // Definição das perguntas e respostas para cada caminho
    const paths = {
        acne: [
            { question: "Com que frequência você lida com acne?", answers: ["Diariamente", "Semanalmente", "Apenas às vezes"] },
            { question: "Qual seu maior objetivo?", answers: ["Reduzir inflamação", "Prevenir crises", "Eliminar completamente"] }
        ],
        flacidez: [
            { question: "Em qual área sente mais flacidez?", answers: ["Rosto", "Pescoço", "Outros"] },
            { question: "Você já tentou tratamentos antes?", answers: ["Sim", "Não"] }
        ],
        manchas: [
            { question: "Qual tipo de mancha mais te incomoda?", answers: ["Solares", "De acne", "De idade"] },
            { question: "Você usa protetor solar regularmente?", answers: ["Sim", "Não"] }
        ],
        olheiras: [
            { question: "Qual o tipo de olheira?", answers: ["Genética", "Fadiga", "Pigmentação"] },
            { question: "Já tentou algum tratamento?", answers: ["Sim", "Não"] }
        ]
    };

    // Função para começar o quiz
    function startQuiz() {
        introSection.style.display = 'none';
        problemSelection.style.display = 'block';
    }

    // Função para escolher o problema (Acne, Flacidez, Manchas, Olheiras)
    function choosePath(path) {
        currentPath = path;
        currentStep = 0;
        problemSelection.style.display = 'none';
        questionSection.style.display = 'block';
        showQuestion();
    }

    // Função para exibir a pergunta atual
    function showQuestion() {
        const path = paths[currentPath];
        const currentQuestion = path[currentStep];
        questionText.textContent = currentQuestion.question;
        answersContainer.innerHTML = '';
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('quiz-button');
            button.onclick = handleAnswer;
            answersContainer.appendChild(button);
        });
        updateProgress();
    }

    // Função para tratar a resposta do usuário
    function handleAnswer() {
        thankYouMessage.textContent = "Obrigado por sua resposta!";
        thankYouMessage.style.display = 'block';
        setTimeout(() => {
            currentStep++;
            if (currentStep < paths[currentPath].length) {
                thankYouMessage.style.display = 'none';
                showQuestion();
            } else {
                finishQuiz();
            }
        }, 1500);
    }

    // Função para atualizar a barra de progresso
    function updateProgress() {
        const path = paths[currentPath];
        const progress = ((currentStep + 1) / path.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Função para finalizar o quiz
    function finishQuiz() {
        questionSection.style.display = 'none';
        analyzingSection.style.display = 'block';
        setTimeout(() => {
            analyzingSection.style.display = 'none';
            finalSection.style.display = 'block';
        }, 4000);
    }

    // Função para redirecionar para o plano de acordo com o problema escolhido
    function redirectToPlan() {
        const planLinks = {
            acne: "https://pay.kiwify.com.br/VhFdNES",
            flacidez: "https://pay.kiwify.com.br/AuptMRd",
            manchas: "https://pay.kiwify.com.br/LPEpNn0",
            olheiras: "https://pay.kiwify.com.br/LR91Ag6"
        };
        window.location.href = planLinks[currentPath];  // Redireciona para o link do plano
    }

    // Disponibilizando a função globalmente para o HTML
    window.startQuiz = startQuiz;
    window.choosePath = choosePath;
});
