document.addEventListener('DOMContentLoaded', () => {
    // Depoimentos femininos e humanizados sem aspas literais no texto
    const testimonials = [
        {
            img: "imagens/depoimentos/foto1.jpg",
            text: "Eu nunca acreditei que um plano personalizado poderia transformar minha pele tão rápido. Depois de algumas semanas, a acne que me incomodava desapareceu! Meu rosto nunca esteve tão bonito e saudável.",
            name: "Mariana, 28 anos"
        },
        {
            img: "imagens/depoimentos/foto2.jfif",
            text: "Minha pele estava muito flácida depois da gravidez, mas com o plano que fiz especialmente para mim, agora sinto a pele firme e renovada. Não pensei que seria possível melhorar tão rápido!",
            name: "Fernanda, 34 anos"
        },
        {
            img: "imagens/depoimentos/foto3.jpg",
            text: "As manchas no meu rosto eram um pesadelo. Mas depois de seguir o plano que foi feito sob medida para mim, elas começaram a desaparecer. Me sinto mais confiante e bonita!",
            name: "Patrícia, 27 anos"
        },
        {
            img: "imagens/depoimentos/foto4.jfif",
            text: "Sofri muito com manchas e nunca achei que teria uma solução eficaz. Mas o plano que fiz foi completamente voltado para as minhas necessidades, e agora minhas manchas estão praticamente invisíveis!",
            name: "Juliana, 29 anos"
        },
        {
            img: "imagens/depoimentos/foto5.jfif",
            text: "As olheiras estavam me deixando com um ar cansado, mas depois de seguir o tratamento que foi feito especialmente para mim, meus olhos ficaram mais brilhantes e descansados.",
            name: "Isabela, 30 anos"
        },
    ];

    // Função para embaralhar os depoimentos aleatoriamente
    const shuffleTestimonials = () => {
        return testimonials.sort(() => Math.random() - 0.5);
    };

    // Exibe os depoimentos de forma dinâmica
    const showTestimonials = () => {
        const testimonialContainer = document.getElementById('testimonial-container');
        const shuffledTestimonials = shuffleTestimonials();

        // Exibe 3 depoimentos aleatórios
        shuffledTestimonials.slice(0, 3).forEach(testimonial => {
            const testimonialElement = `
                <div class="testimonial">
                    <img src="${testimonial.img}" alt="${testimonial.name}" class="testimonial-img">
                    <div class="testimonial-text">
                        <p>${testimonial.text}</p>
                        <span>- ${testimonial.name}</span>
                    </div>
                </div>
            `;
            testimonialContainer.innerHTML += testimonialElement;
        });
    };

    // Chama a função para mostrar os depoimentos assim que o DOM for carregado
    showTestimonials();

    // Função para redirecionar para o quiz
    window.startQuiz = () => {
        window.location.href = "quiz.html"; // Link relativo para o quiz
    };

    // Função para expandir o conteúdo da seção "Por Que Funciona?"
    const expandBtn = document.getElementById('expand-btn');
    const expandableContent = document.getElementById('expandable-content');

    // Inicializa a funcionalidade do botão de expandir
    expandBtn.addEventListener('click', () => {
        // Verifica se o conteúdo está visível e alterna a visibilidade
        if (expandableContent.style.display === 'block') {
            expandableContent.style.display = 'none';
            expandBtn.innerText = 'Saiba Mais';  // Atualiza o texto do botão
        } else {
            expandableContent.style.display = 'block';
            expandBtn.innerText = 'Mostrar Menos';  // Atualiza o texto do botão
        }
    });
});
