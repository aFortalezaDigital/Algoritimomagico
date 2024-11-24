document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 0;
    let selectedPath = '';

    // Função para começar o quiz
    const startQuiz = () => {
        const introduction = document.getElementById('introduction');
        const quiz = document.getElementById('quiz');

        if (!introduction || !quiz) {
            console.error("Elementos 'introduction' ou 'quiz' não encontrados.");
            return;
        }

        introduction.style.display = 'none';
        quiz.style.display = 'block';
        showPathSelection();
    };

    // Exibir opções de problema
    const showPathSelection = () => {
        const questionArea = document.getElementById('question-area');
        if (!questionArea) {
            console.error("Elemento 'question-area' não encontrado.");
            return;
        }

        questionArea.innerHTML = `
            <h2>Escolha o problema que deseja resolver:</h2>
            <div class="path-selection">
                <div class="path-option" onclick="choosePath('acne')">
                    <img src="imagens/acne.jpg" alt="Acne" class="path-image">
                    <p>Acne/Espinhas</p>
                </div>
                <div class="path-option" onclick="choosePath('flacidez')">
                    <img src="imagens/flacidez.jpg" alt="Flacidez" class="path-image">
                    <p>Pele Flácida</p>
                </div>
                <div class="path-option" onclick="choosePath('manchas')">
                    <img src="imagens/manchas.jpg" alt="Manchas" class="path-image">
                    <p>Manchas na Pele</p>
                </div>
                <div class="path-option" onclick="choosePath('olheiras')">
                    <img src="imagens/olheiras.jpg" alt="Olheiras" class="path-image">
                    <p>Olheiras</p>
                </div>
            </div>
        `;
    };

    // Escolher o problema
    const choosePath = (path) => {
        selectedPath = path;
        currentStep = 0;
        loadQuestion();
    };

    // Carregar perguntas
    const loadQuestion = () => {
        const path = paths[selectedPath];
        if (!path) {
            console.error(`Caminho "${selectedPath}" não encontrado.`);
            return;
        }
        if (currentStep >= path.length) {
            showAnalyzing();
            return;
        }
        const { question, answers } = path[currentStep];
        const questionArea = document.getElementById('question-area');
        if (!questionArea) {
            console.error("Elemento 'question-area' não encontrado.");
            return;
        }

        questionArea.innerHTML = `
            <h2>${question}</h2>
            ${answers.map(answer => `
                <button class="quiz-button" onclick="answerQuestion('${answer}')">${answer}</button>
            `).join('')}
        `;
        updateProgress();
    };

    // Atualizar barra de progresso
    const updateProgress = () => {
        const path = paths[selectedPath];
        if (path) {
            document.getElementById('progress').style.width = `${((currentStep + 1) / path.length) * 100}%`;
        }
    };

    // Mostrar a análise
    const showAnalyzing = () => {
        document.getElementById('quiz').style.display = 'none';
        const analyzingSection = document.getElementById('analyzing-section');
        analyzingSection.style.display = 'flex';
        analyzingSection.innerHTML = `<h2>Analisando suas escolhas...</h2><p>Aguarde enquanto criamos o melhor plano para você.</p>`;
        setTimeout(() => {
            analyzingSection.innerHTML = `<h2>Definindo o melhor plano para você...</h2>`;
        }, 3000);
        setTimeout(() => {
            analyzingSection.style.display = 'none';
            showFinalPlan();
        }, 7000);
    };

    // Mostrar plano final
    const showFinalPlan = () => {
        const finalSection = document.getElementById('final-section');
        finalSection.style.display = 'block';
        const plan = ebooks[selectedPath];
        finalSection.innerHTML = `
            <h2>Seu plano está pronto!</h2>
            <p>O melhor plano que normalmente custa R$49,99 está disponível por apenas <span class="price-discount">${plan.price}</span>.</p>
            <a href="${plan.link}" class="cta-button">Adquirir Agora</a>
        `;
    };

    // Adicionar funções ao escopo global
    window.startQuiz = startQuiz;
    window.choosePath = choosePath;
});
