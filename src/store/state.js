export default {
    dark: true,
    currentPage: 'projects',
    // projectCards: [
    //     {   
    //         title: 'Feminicídio no Nordeste - Infográfico Interativo',
    //         shortTitle: 'Feminicídio no Nordeste',
    //         tags: ['Sistema','Infográfico','Trabalho de Faculdade'],
    //         description: 'Um infográfico interativo que mostra dados sobre o feminicídio na região nordeste no período de  '
    //         + '2007 até 2017. A fonte dos dados é o Atlas da Violência 2019. Esse infográfico interativo foi desenvolvido para o trabalho final da '
    //         + 'disciplina de Comunicação Visual 2 do Curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará.',
    //         functions: ['Desenvolvedor','Front-end'],
    //         img: require('@/assets/projects-images/info-feminicidio/info_feminicidio_image.png'),
    //         iconsTools: [
    //             require('@/assets/interests-icons/vue.png')
    //         ],
    //         carouselImages: [
    //             require('@/assets/projects-images/info-feminicidio/info_feminicidio_01.png'),
    //             require('@/assets/projects-images/info-feminicidio/info_feminicidio_02.png'),
    //             require('@/assets/projects-images/info-feminicidio/info_feminicidio_03.png'),
    //             require('@/assets/projects-images/info-feminicidio/info_feminicidio_04.png'),
    //             require('@/assets/projects-images/info-feminicidio/info_feminicidio_05.png'),
    //             require('@/assets/projects-images/info-feminicidio/info_feminicidio_06.png'),
    //             require('@/assets/projects-images/info-feminicidio/info_feminicidio_07.png'),
    //             require('@/assets/projects-images/info-feminicidio/info_feminicidio_08.png'),
    //             require('@/assets/projects-images/info-feminicidio/info_feminicidio_09.png'),
    //         ],
    //         link: 'https://infografico-cv2-406783.netlify.com/'
    //     }, 
    //     {   
    //         title: 'MIDE - Enigma dos Bilhetes',
    //         shortTitle: 'Enigma dos Bilhetes',
    //         tags: ['Sistema','Jogo','Estágio'],
    //         description: 'O Enigma dos Bilhetes é um recurso digital desenvolvido para o projeto de '
    //         + 'Pesquisa e Desenvolvimento de Recursos Educacionais Digitais (RED) para conteúdos de '
    //         + 'Língua Portuguesa e Matemática nos anos iniciais do ensino fundamental (Projeto MIDE). ',
    //         functions: ['Desenvolvedor','Front-end'],
    //         img: require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_image.png'),
    //         iconsTools: [
    //             require('@/assets/interests-icons/vue.png')
    //         ],
    //         carouselImages: [
    //             require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_01.png'),
    //             require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_02.png'),
    //             require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_03.png'),
    //             require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_04.png'),
    //             require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_05.png'),
    //             require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_06.png'),
    //             require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_07.png'),
    //             require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_08.png'),
    //             require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_09.png'),
    //             require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_10.png')
    //         ],
    //         link: 'https://mide-enigma-dos-bilhetes.netlify.com/#/'
    //     },
    //     {   
    //         title: 'Luz do Saber - Fundamental',
    //         shortTitle: 'Luz do Saber',
    //         tags: ['Sistema','Jogo','Estágio'],
    //         description: 'Software para alfabetização de crianças. Atividades digitais que contribuem para alfabetização infantil. '
    //         + 'O projeto trata-se de uma nova versão do antigo software Luz do Saber, feito em Flash. Agora criado no framework Vue.',
    //         functions: ['Desenvolvedor','Front-end'],
    //         img: require('@/assets/projects-images/luz-do-saber/luz_do_saber_image.png'),
    //         iconsTools: [
    //             require('@/assets/interests-icons/vue.png')
    //         ],
    //         carouselImages: [
    //             require('@/assets/projects-images/luz-do-saber/luz_do_saber_01.png'),
    //             require('@/assets/projects-images/luz-do-saber/luz_do_saber_02.png'),
    //             require('@/assets/projects-images/luz-do-saber/luz_do_saber_03.png'),
    //             require('@/assets/projects-images/luz-do-saber/luz_do_saber_04.png'),
    //             require('@/assets/projects-images/luz-do-saber/luz_do_saber_05.png'),
    //             require('@/assets/projects-images/luz-do-saber/luz_do_saber_06.png'),
    //             require('@/assets/projects-images/luz-do-saber/luz_do_saber_07.png'),
    //             require('@/assets/projects-images/luz-do-saber/luz_do_saber_08.png'),
    //             require('@/assets/projects-images/luz-do-saber/luz_do_saber_09.png'),
    //             require('@/assets/projects-images/luz-do-saber/luz_do_saber_10.png')
    //         ],
    //         link: 'http://luz-do-saber-staging.herokuapp.com/'
    //     },
    //     {   
    //         title: 'Egipcia Ecommerce',
    //         shortTitle: 'Egipcia',
    //         tags: ['Sistema','Trabalho de Faculdade'],
    //         description: 'Esse sistema gerencia o comércio digital fictício Egipcia. Com o uso de JSPs e Servlets, '
    //             + 'o Ecommerce Egipcia realiza operações de cadastro, listagem, filtragem, alteração e exclusão de '
    //             + 'produtos, categorias, compras e clientes para o administrador, e a realização de compras para '
    //             + 'o cliente. Utiliza cookies para realizar a função do carrinho de compras, podendo ser usado '
    //             + 'mesmo sem estar com uma sessão de usuário. Esse sistema foi desenvolvido para o trabalho final da '
    //             + 'disciplina de Programação Web I do Curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará.',
    //         functions: ['Desenvolvedor','Front-end','Back-end'],
    //         img: require('@/assets/projects-images/egipcia/egipcia_image.png'),
    //         iconsTools: [
    //             require('@/assets/interests-icons/java.png')
    //         ],
    //         carouselImages: [
    //             require('@/assets/projects-images/egipcia/egipcia_01.png'),
    //             require('@/assets/projects-images/egipcia/egipcia_02.png'),
    //             require('@/assets/projects-images/egipcia/egipcia_03.png'),
    //             require('@/assets/projects-images/egipcia/egipcia_04.png'),
    //             require('@/assets/projects-images/egipcia/egipcia_05.png'),
    //             require('@/assets/projects-images/egipcia/egipcia_06.png'),
    //         ],
    //         link: 'https://github.com/eduregis/egipcia'
    //     },    //    
    //     {   
    //         title: 'B.E.E.P.',
    //         shortTitle: 'B.E.E.P.',
    //         tags: ['Jogo','Trabalho de Faculdade'],
    //         description: 'Um malware invadiu o computador e descofigurou todos os robozinhos que o fazia funcionar, ' 
    //             + 'todos menos um. B.E.E.P. (Bot de Estudo e Esino de Programação) sobreviveu ao ataque e precisa de '
    //             + 'ajuda pra fazer o sistema voltar ao normal. Tendo B.E.E.P. como seu mentor, o jogador irá reprogramar '
    //             + 'os robozinhos utilizando comandos de "andar", "girar", "atacar", "segurar", "soltar e "apertar". '
    //             + 'A proposta do jogo é ensinar conceitos de programação como: Algoritmo, Laços de repetição, condicionais, '
    //             + 'funções e recursividade enquanto conta uma história. Conceitos da teoria cognitiva Socio-cultural '
    //             + 'foram utilizadas no desenvolvimento do jogo. Esse jogo foi desenvolvido para o trabalho de Projeto '
    //             + 'Integrado do Segundo Semestre do Curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará.'
    //             ,
    //         functions: ['Desenvolvedor'],
    //         img: require('@/assets/projects-images/beep/beep_image.png'),
    //         iconsTools: [
    //             require('@/assets/interests-icons/javascript.png')
    //         ],
    //         carouselImages: [
    //             require('@/assets/projects-images/beep/beep_01.png'),
    //             require('@/assets/projects-images/beep/beep_02.png'),
    //             require('@/assets/projects-images/beep/beep_03.png'),
    //             require('@/assets/projects-images/beep/beep_04.png')
    //         ],
    //         link: 'https://github.com/eduregis/smd-projeto-integrado-2018.1'
    //     },
    //      {   
    //         title: 'Breakout Remake',
    //         shortTitle: 'Breakout Remake',
    //         tags: ['Jogo','Trabalho de Faculdade'],
    //         description: 'Um remake do clássico jogo de atari Breakout. Feito com o framework Processing '
    //             + 'Esse jogo foi desenvolvido para o trabalho final da disciplina de Matemática aplicada à Multimídia I'
    //             + ' do Curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará.'
    //             ,
    //         functions: ['Desenvolvedor','Ilustrador'],
    //         img: require('@/assets/projects-images/breakout_remake/breakout_remake_image.png'),
    //         iconsTools: [
    //             require('@/assets/interests-icons/java.png')
    //         ],
    //         carouselImages: [
    //             require('@/assets/projects-images/breakout_remake/breakout_remake_01.png'),
    //             require('@/assets/projects-images/breakout_remake/breakout_remake_02.png'),
    //             require('@/assets/projects-images/breakout_remake/breakout_remake_03.png'),
    //             require('@/assets/projects-images/breakout_remake/breakout_remake_04.png')
    //         ],
    //         link: 'https://drive.google.com/file/d/1pgn1oRAIitkk32xheU2G57y_E9rOHMop/view'
    //     },  
    // ]
};