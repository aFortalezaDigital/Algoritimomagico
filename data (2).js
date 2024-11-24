const paths = {
    acne: [
        {
            question: "Com que frequência você lida com acne?",
            answers: [
                "Diariamente",
                "Semanalmente",
                "Ocasionalmente"
            ]
        },
        {
            question: "Qual seria o principal benefício que você busca?",
            answers: [
                "Reduzir inflamações",
                "Eliminar completamente",
                "Prevenir crises futuras"
            ]
        },
        {
            question: "Você sabia que o abacate ajuda a equilibrar a oleosidade da pele?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Como você descreveria a sua alimentação?",
            answers: [
                "Muito saudável",
                "Moderada",
                "Pouco saudável"
            ]
        },
        {
            question: "Você tem o hábito de beber bastante água?",
            answers: [
                "Sim, sempre",
                "Às vezes",
                "Não, raramente"
            ]
        },
        {
            question: "Você já usou algum creme ou tratamento para acne?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Você se sente confortável em usar tratamentos caseiros?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Você percebe que a acne piora em algum momento específico do mês?",
            answers: [
                "Sim, durante a TPM",
                "Sim, quando estou estressado",
                "Não, é constante"
            ]
        },
        {
            question: "Você já consultou um dermatologista sobre a acne?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Quanto tempo você está disposto a dedicar ao tratamento diário?",
            answers: [
                "Menos de 10 minutos",
                "De 10 a 20 minutos",
                "Mais de 20 minutos"
            ]
        }
    ],
    flacidez: [
        {
            question: "Onde você percebe a flacidez mais intensamente?",
            answers: [
                "Rosto",
                "Corpo",
                "Ambos"
            ]
        },
        {
            question: "Você já usou cremes ou tratamentos anti-flacidez?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Você pratica exercícios regularmente?",
            answers: [
                "Sim, todos os dias",
                "Às vezes",
                "Não"
            ]
        },
        {
            question: "Você sente que a flacidez aumentou com o tempo?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Qual área do corpo mais te incomoda devido à flacidez?",
            answers: [
                "Pele do rosto",
                "Pele da barriga",
                "Pele das coxas"
            ]
        },
        {
            question: "Você já experimentou tratamentos estéticos para flacidez?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Qual tipo de tratamento você gostaria de usar?",
            answers: [
                "Natural",
                "Tecnológico",
                "Ambos"
            ]
        },
        {
            question: "Você gostaria de ver resultados visíveis em até quanto tempo?",
            answers: [
                "De 1 a 3 meses",
                "De 3 a 6 meses",
                "Mais de 6 meses"
            ]
        },
        {
            question: "Você tem algum problema de saúde relacionado à flacidez?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Você já seguiu alguma rotina de cuidados com a pele anteriormente?",
            answers: [
                "Sim, com frequência",
                "Às vezes",
                "Não"
            ]
        }
    ],
    manchas: [
        {
            question: "Qual tipo de mancha você tem?",
            answers: [
                "Manchas solares",
                "Manchas de idade",
                "Manchas pós-inflamatórias"
            ]
        },
        {
            question: "Você usa protetor solar regularmente?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Você já usou algum creme clareador de manchas?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Você já consultou um dermatologista sobre suas manchas?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "As manchas pioram durante algum período do ano?",
            answers: [
                "Sim, no verão",
                "Sim, no inverno",
                "Não, são constantes"
            ]
        },
        {
            question: "Você já teve algum tipo de reação alérgica ao usar produtos de clareamento?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Você prefere tratamentos caseiros ou de farmácia?",
            answers: [
                "Caseiros",
                "Farmácia",
                "Ambos"
            ]
        },
        {
            question: "Você sente que suas manchas afetam sua autoestima?",
            answers: [
                "Sim, muito",
                "Sim, um pouco",
                "Não, não afeta"
            ]
        },
        {
            question: "Você tem a pele mais oleosa ou seca?",
            answers: [
                "Oleosa",
                "Seca",
                "Mista"
            ]
        },
        {
            question: "Você está disposto a seguir um plano diário de tratamento?",
            answers: [
                "Sim, sem problemas",
                "Talvez, depende do tempo",
                "Não, prefiro soluções rápidas"
            ]
        }
    ],
    olheiras: [
        {
            question: "Você percebe que suas olheiras são mais visíveis em qual momento?",
            answers: [
                "De manhã",
                "À noite"
            ]
        },
        {
            question: "Você já usou algum tratamento para olheiras?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Você tem dificuldades para dormir?",
            answers: [
                "Sim, frequentemente",
                "Às vezes",
                "Não, durmo bem"
            ]
        },
        {
            question: "Você usa cremes ou produtos específicos para olheiras?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Você percebe que suas olheiras pioram com o estresse?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Você já tentou tratamentos caseiros para olheiras?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Você sente que a cor das suas olheiras muda durante o dia?",
            answers: [
                "Sim, fica mais escura",
                "Sim, fica mais clara",
                "Não, é constante"
            ]
        },
        {
            question: "Você já procurou um dermatologista para tratar suas olheiras?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Você tem outros problemas de pele além das olheiras?",
            answers: [
                "Sim",
                "Não"
            ]
        },
        {
            question: "Você preferiria um tratamento rápido ou um plano de longo prazo?",
            answers: [
                "Rápido",
                "Plano de longo prazo"
            ]
        }
    ]
};

// Links dos eBooks e preços
const ebooks = {
    acne: {
        link: "https://pay.kiwify.com.br/VhFdNES",
        price: "R$27,00"
    },
    flacidez: {
        link: "https://pay.kiwify.com.br/AuptMRd",
        price: "R$27,00"
    },
    manchas: {
        link: "https://pay.kiwify.com.br/LPEpNn0",
        price: "R$27,00"
    },
    olheiras: {
        link: "https://pay.kiwify.com.br/LR91Ag6",
        price: "R$27,00"
    }
};
