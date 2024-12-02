const recipeList = [
    { id: 1, title: 'Mingau de Aveia Proteico', image: 'https://guiadacozinha.com.br/wp-content/uploads/2023/02/mingau-de-aveia-proteico-768x619.jpg', description: 'Delicioso mingau de aveia proteico...', 
        ingredients: 
        [
            {
                nome: 'aveia',
                unidade_de_medida: 'Xícara',
                qtd: 1
            },
            {
                nome: 'leite',
                unidade_de_medida: 'Xícara',
                qtd: 2
            },
            {
                nome: 'mel',
                unidade_de_medida: 'Colher de sopa',
                qtd: 1
            },
        ], steps: ['Misture todos os ingredientes em uma panela...', 'Cozinhe em fogo médio até engrossar...'], calories: 250, prepTime: 10 },
    { id: 2, title: 'Mousse de Abacaxi Fit', image: 'https://mgtnutri.com.br/wp-content/uploads/2017/03/mousse-leve-de-abacaxi.jpg', description: 'Mousse de abacaxi leve e saudável...', 
        ingredients: 
        [
            {
                nome: 'abacaxi',
                unidade_de_medida: 'Unidade',
                qtd: 1
            },
            {
                nome: 'Gelatina',
                unidade_de_medida: 'Colher de sopa',
                qtd: 2
            },
            {
                nome: 'Água',
                unidade_de_medida: 'Xícara',
                qtd: 1
            },
        ], steps: ['Coloque o abacaxi em uma panela e cozinhe por 20 minutos.', 'Deixe esfriar e reserve na geladeira','Se desejar incluir mel na receita, misture no abacaxi cozido após retirar do fogo','Após isso, prepare a gelatina sem sabor como está indicado na embalagem — não é precisa esperar endurecer','Em um recipiente separado, dissolva o amido de milho no leite de coco','Bata no liquidificador até ficar bem cremoso: o iogurte + metade do abacaxi cortado e cozido + a gelatina + o amido de milho dissolvido com leite','Em uma travessa, despeje o creme batido e adicione a outra metade do abacaxi cortado e assado e misture','Deixe na geladeira até que fique firme e gelado'], calories: 120, prepTime: 15 },
    { id: 3, title: 'Tapioca Recheada com Frango', image: 'https://www.saboresajinomoto.com.br/uploads/images/recipes/tapioca-de-frango.jpg', description: 'Tapioca recheada com frango desfiado...', 
        ingredients: 
        [
            {
                nome: 'Tapioca',
                unidade_de_medida: 'Colher de sopa',
                qtd: 2
            },
            {
                nome: 'Frango desfiado',
                unidade_de_medida: 'Gramas',
                qtd: 100
            },
            {
                nome: 'Sal',
                unidade_de_medida: 'A gosto',
                qtd: 1
            },
            ], steps: ['Prepare a tapioca...', 'Recheie com o frango desfiado...'], calories: 300, prepTime: 15 },
    { id: 4, title: 'Mousse de Maracujá Fit', image: 'https://baudasreceitas.com.br/wp-content/uploads/2020/04/receita-de-mousse-de-maracuja-fit.jpg', description: 'Mousse de maracujá delicioso e fit...', 
        ingredients: 
        [
            {
                nome: 'Maracujá',
                unidade_de_medida: 'Unidade',
                qtd: 1
            },
            {
                nome: 'Água',
                unidade_de_medida: 'Xícara',
                qtd: 1
            },
            {
                nome: 'Mel',
                unidade_de_medida: 'Colher de sopa',
                qtd: 2
            },
        ], steps: ['Bata o maracujá no liquidificador...', 'Misture todos os ingredientes...'], calories: 130, prepTime: 15 },
    { id: 5, title: 'Bolo de Caneca Sem Leite', image: 'https://www.acasaencantada.com.br/wp-content/uploads/2023/06/bolo_de_caneca_sem_leite_02.jpeg', description: 'Bolo de caneca fácil e rápido...', 
        ingredients: 
        [
            {
                nome: 'Farinha',
                unidade_de_medida: 'Xícara',
                qtd: 1
            },
            {
                nome: 'Ovo',
                unidade_de_medida: 'Unidade',
                qtd: 1
            },
            {
                nome: 'Açúcar',
                unidade_de_medida: 'Colher de sopa',
                qtd: 2
            },
        ], steps: ['Misture todos os ingredientes...', 'Leve ao micro-ondas por 5 minutos...'], calories: 180, prepTime: 5 },
    { id: 6, title: 'Pudim de Chia', image: 'https://s2-receitas.glbimg.com/qUGgAkzRCDhRIKTCf4Fx2b8LvJo=/0x0:5760x3840/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/O/6/GIjXUpT3OG2XSktYFHQQ/shutterstock-562510153.jpg', description: 'Pudim saudável de chia...', ingredients: ['2 colheres de chia', '1 xícara de leite de coco', '1 colher de sopa de mel'], steps: ['Misture todos os ingredientes...', 'Deixe na geladeira por 4 horas...'], calories: 150, prepTime: 5 }
];

export default recipeList