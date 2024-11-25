document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 0;
    let selectedPath = '';

    const startQuiz = () => {
        document.getElementById('introduction').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
        showPathSelection();
    };

    const showPathSelection = () => {
        const questionArea = document.getElementById('question-area');
        questionArea.innerHTML = `
            <h2 class="fade-in">Escolha o problema que deseja resolver:</h2>
            <div class="path-selection fade-in">
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

    const loadQuestion = () => {
        const path = paths[selectedPath];
        if (!path || currentStep >= path.length) {
            showAnalyzing();
            return;
        }
        const { question, answers } = path[currentStep];
        const questionArea = document.getElementById('question-area');
        questionArea.innerHTML = `
            <h2 class="fade-in">${question}</h2>
            ${answers.map(answer => `
                <button class="quiz-button fade-in" onclick="answerQuestion('${answer}')">${answer}</button>
            `).join('')}
        `;
        updateProgress();
    };

    const answerQuestion = (answer) => {
        const thankYouMessage = document.getElementById('thank-you-message');
        thankYouMessage.innerHTML = `Obrigado por sua resposta: "${answer}"! Vamos para a próxima pergunta...`;
        thankYouMessage.style.display = 'block';

        setTimeout(() => {
            currentStep++;
            loadQuestion();
        }, 1000); // Delay de 1 segundo
    };

    const updateProgress = () => {
        const path = paths[selectedPath];
        const progressText = document.getElementById('progress-text');
        progressText.textContent = `Pergunta ${currentStep + 1} de ${path.length}`;
        document.getElementById('progress').style.width = `${((currentStep + 1) / path.length) * 100}%`;
    };

    const showAnalyzing = () => {
        document.getElementById('quiz').style.display = 'none';
        const analyzingSection = document.getElementById('analyzing-section');
        analyzingSection.style.display = 'flex';

        setTimeout(() => {
            analyzingSection.style.display = 'none';
            showFinalPlan();
        }, 3000); // Mostra análise por 3 segundos
    };

    const showFinalPlan = () => {
        const finalSection = document.getElementById('final-section');
        finalSection.style.display = 'flex';
    };

    window.startQuiz = startQuiz;
    window.choosePath = (path) => {
        selectedPath = path;
        currentStep = 0;
        loadQuestion();
    };
    window.answerQuestion = answerQuestion;
});
