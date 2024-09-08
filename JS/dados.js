//Pesquisar Racas
let racas = [
    {
        titulo : "Golden Retriever",
        descricao : "O Golden Retriever é uma raça de cachorro conhecida mundialmente por sua beleza, inteligência e temperamento amável. Com pelagem dourada exuberante e olhos expressivos, esses cães possuem um porte elegante e são muito populares como animais de companhia. Além de serem ótimos companheiros para famílias, os Goldens são excelentes cães de trabalho, utilizados em diversas atividades como terapia, busca e resgate, e como cães-guia. Sua natureza gentil, lealdade e facilidade de aprendizado os tornam verdadeiros amigos para toda a vida.",
        link : "https://www.petz.com.br/cachorro/racas/golden-retriever/",
        tags: "grande porte, ativo, familiar, amigável, inteligente, dócil, pelagem longa, resgate, terapia"
    }, 
    {
        titulo : "Pitbull",
        descricao : "O Pitbull, apesar de ter sido injustamente estereotipado, é uma raça inteligente, forte e leal. Quando bem socializados e treinados, são excelentes companheiros de família. Conhecidos por sua energia e necessidade de atividades físicas, os Pitbulls precisam de donos responsáveis e dedicados. Sua força e determinação os tornam ótimos cães de trabalho, como cães de guarda e em atividades de busca e resgate.",
        link : "https://www.petz.com.br/cachorro/racas/pitbull/",
        tags: "porte médio, forte, leal, energético, protetor, treinamento, socialização, guarda"
    }, 
    {
        titulo : "São Bernardo",
        descricao : "O São Bernardo é uma raça gigante e gentil, conhecida por sua natureza calma e paciente. Originário dos Alpes Suíços, esses cães foram criados para trabalhos pesados, como o resgate de viajantes perdidos na neve. Apesar do tamanho imponente, são cães dóceis e excelentes companheiros de família. Sua pelagem longa e espessa os protege do frio e exige cuidados especiais.",
        link : "https://www.petz.com.br/cachorro/racas/sao-bernardo-cachorro/",
        tags: "gigante, calmo, paciente, dócil, pelagem longa, resgate, família"
    },
    {
        titulo: "Bulldog Inglês",
        descricao: "O Bulldog Inglês é conhecido por sua aparência robusta e expressão fofa. Apesar de seu tamanho, é um cão tranquilo e companheiro, ideal para apartamentos. Requer cuidados especiais com a saúde devido à sua conformação física.",
        link: "https://www.petz.com.br/cachorro/racas/bulldog-ingles/",
        tags: "pequeno porte, tranquilo, companheiro, brachycephalic, cuidados especiais"
      },
    
      {
        titulo: "Poodle",
        descricao: "O Poodle é uma raça inteligente e versátil, disponível em três tamanhos: padrão, miniatura e toy. É hipoalergênico e excelente para pessoas com alergias. Além de ser um ótimo cão de companhia, o Poodle se destaca em diversas atividades, como agility e obediência.",
        link: "https://www.petz.com.br/cachorro/racas/poodle/",
        tags: "inteligente, versátil, hipoalergênico, agility, obediência"
      },
    
      {
        titulo: "Beagle",
        descricao: "O Beagle é um cão de caça com um olfato aguçado e personalidade alegre. É um ótimo cão de família, mas pode ser teimoso e precisa de adestramento consistente. Sua paixão por comida o torna um tanto guloso.",
        link: "https://www.petz.com.br/cachorro/racas/beagle/",
        tags: "caça, olfato aguçado, alegre, teimoso, guloso"
      },
    
      {
        titulo: "Rottweiler",
        descricao: "O Rottweiler é um cão forte, protetor e inteligente. Requer um dono experiente e firme, capaz de proporcionar o treinamento adequado. Apesar de sua aparência imponente, pode ser um cão amoroso e leal com a família.",
        link: "https://www.petz.com.br/cachorro/racas/rottweiler/",
        tags: "forte, protetor, inteligente, treinamento, leal"
      },
    
      {
        titulo: "Siberiano Husky",
        descricao: "O Husky Siberiano é um cão de trabalho com uma beleza única e personalidade forte. Ele precisa de muito exercício e espaço para correr. É um cão independente e pode ser teimoso, mas é extremamente leal à sua família.",
        link: "https://www.petz.com.br/cachorro/racas/husky-siberiano/",
        tags: "trabalho, beleza, independente, teimoso, exercício"
      },
    
      {
        titulo: "Chihuahua",
        descricao: "O Chihuahua é o menor cão do mundo e possui uma personalidade grande. É um cão alerta e vigilante, mas também pode ser muito carinhoso com sua família. Requer cuidados especiais com sua saúde.",
        link: "https://www.petz.com.br/cachorro/racas/chihuahua/",
        tags: "pequeno porte, alerta, vigilante, carinhoso, cuidados especiais"
      },
    
      {
        titulo: "Akita",
        descricao: "O Akita é um cão de grande porte, independente e leal. Ele precisa de um dono experiente e firme. É um cão reservado com estranhos, mas é extremamente protetor com sua família.",
        link: "https://www.petz.com.br/cachorro/racas/akita/",
        tags: "grande porte, independente, leal, reservado, protetor"
      },
    
      {
        titulo: "Border Collie",
        descricao: "O Border Collie é um cão de pastoreio extremamente inteligente e energético. Ele precisa de muita estimulação mental e física. É um cão versátil e pode se destacar em diversas atividades, como agility e obediência.",
        link: "https://www.petz.com.br/cachorro/racas/border-collie/",
        tags: "inteligente, energético, pastoreio, agility, obediência"
      },
    
      {
        titulo: "Dachshund",
        descricao: "O Dachshund, conhecido como salsicha, é um cão de caça com pernas curtas e corpo alongado. Ele é corajoso e determinado, mas também pode ser teimoso. É um ótimo cão de companhia, mas precisa de socialização adequada.",
        link: "https://www.petz.com.br/cachorro/racas/dachshund/",
        tags: "caça, corajoso, teimoso, socialização, pernas curtas"
      },
    
      {
        titulo: "Samoyedo",
        descricao: "O Samoyedo é um cão de trabalho com uma pelagem branca e fofa. Ele é alegre, amigável e gosta de brincar na neve. É um ótimo cão de família, mas precisa de muito exercício.",
        link: "https://www.petz.com.br/cachorro/racas/samoyedo/",
        tags: "trabalho, alegre, amigável, pelagem branca, exercício"
      },
      {
        titulo: "Labrador Retriever",
        descricao: "O Labrador Retriever é uma raça popular conhecida por sua personalidade amigável e versátil. Eles são ótimos cães de família, guia e serviço. Sua pelagem curta e densa os protege do frio e da água.",
        link: "https://www.petz.com.br/cachorro/racas/labrador-retriever/",
        tags: "porte médio, ativo, familiar, inteligente, dócil, pelagem curta, água, guia"
      },
    
      {
        titulo: "Shih Tzu",
        descricao: "O Shih Tzu é um cão de companhia pequeno e charmoso, conhecido por sua pelagem longa e sedosa. Ele é alegre, brincalhão e adora a companhia de seus donos.",
        link: "https://www.petz.com.br/cachorro/racas/shih-tzu/",
        tags: "pequeno porte, companheiro, alegre, brincalhão, pelagem longa, apartamento"
      },
    
      {
        titulo: "Pastor Alemão",
        descricao: "O Pastor Alemão é uma raça inteligente, forte e versátil. Ele é frequentemente utilizado como cão de trabalho, como cão policial, militar e guia. Sua lealdade e inteligência o tornam um excelente companheiro.",
        link: "https://www.petz.com.br/cachorro/racas/pastor-alemao/",
        tags: "porte médio, inteligente, leal, versátil, trabalho, proteção"
      }
];

