let produtos = []

class Produto {
    constructor(nome, preco, imagem, artigo, puericulturaNivel, localidade, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.imagem = imagem;
        this.tipoDeArtigo = artigo;
        this.nivelPuericultura = puericulturaNivel;
        this.localidade = localidade;
        this.descricao = descricao;
        this.quantidade = 1;
    }
}

const armazenamentoCadastro = localStorage.getItem("produtosLocal")

if (armazenamentoCadastro == null) {
    produtos.push(new Produto("Brinquedo Educativo Cubo E Bola", 49.99, "https://bedastore.cdn.magazord.com.br/img/2023/11/produto/251/06-brinquedo-educativo-cubo-e-bola-didatica-crianca-infantil.jpeg?ims=600x600", "Entretenimento", "puericultura_nivel_1", 
    "Nacional", "Kit Infantil Cubo E Bola Educativa Didático. Os brinquedos educativos têm várias utilidades e benefícios, tanto para as crianças quanto para seus pais ou cuidadores. Aqui estão algumas das utilidades dos brinquedos educativos: Promoção do Aprendizado: Os brinquedos educativos são projetados para ensinar conceitos e habilidades de uma maneira envolvente. Eles ajudam as crianças a aprender de forma ativa, estimulando o pensamento crítico e a resolução de problemas. Desenvolvimento de Habilidades: Esses brinquedos auxiliam no desenvolvimento de uma ampla gama de habilidades, como cognitivas (pensamento lógico, matemática, linguagem), motoras (coordenação motora fina e grossa), sociais (trabalho em equipe, comunicação) e emocionais (gerenciamento de emoções)."))

    produtos.push(new Produto("Pista Carrinhos Corrida Brinquedo", 79.99, "https://http2.mlstatic.com/D_NQ_NP_828420-MLB69672822416_052023-O.webp", "Entretenimento", "puericultura_nivel_1", 
    "Nacional", "As pistinhas de carrinhos da Baby Animal são lindas e coloridas, o que são aliados fundamentais no processo do desenvolvimento infantil. Eles auxiliam no desenvolvimento cognitivo, motor, criativo e social da criança. Por meio dos brinquedos, as crianças também estimulam a imaginação e trabalham as vivências e habilidades manuais."))

    produtos.push(new Produto("Brinquedo Crocodilo Morde Dedo", 69.99, "https://m.media-amazon.com/images/I/71EjXLfVYrL._AC_UF894,1000_QL80_.jpg", "Entretenimento", "puericultura_nivel_2", 
    "Nacional", "O Jogo Crocodilo Morde Dedo é um jogo infantil para 2-9 jogadores, recomendado para crianças a partir de 3 anos e está dentro das normas de qualidade e segurança pelo instituto INMETRO brasileiro. O jogo é para a família toda sendo bem simples de jogar e muito divertido, pode ser jogado em qualquer lugar."))

    produtos.push(new Produto("Montar Brincar Torre Giraffe", 89.99, "https://cdn.awsli.com.br/600x450/859/859149/produto/217060258cc6a59d818.jpg", "Entretenimento", "puericultura_nivel_2", 
    "Nacional", "Educativo Torre Giraffe Tower BebêSempre pensando em brinquedos que contribuam para um bom desenvolvimento e diversão das crianças,A Maptoy apresenta uma linha voltada para brinquedos de montar.Blocos e outros sistemas de encaixe fazem a grande brincadeira,Estimulando o desenvolvimento infantil através de uma melhor coordenação motoraPercepção sensorial através de variadas formas e cores, sendo importante também no papel social, ajudando na integração das crianças."))

    produtos.push(new Produto("Jogo de Boliche Brinquedo", 99.99, "https://images.tcdn.com.br/img/img_prod/778114/jogo_de_boliche_brinquedo_infantil_6_pinos_2_bolas_22cm_8_pecas_10665_1_3494870a9a5b4113d5cda6b21f4bd3cf.jpg", "Entretenimento", "puericultura_nivel_2", 
    "Nacional", "Apresentamos o Jogo de Boliche Infantil , um produto de alta qualidade da renomada marca Cardoso Brinquedos. Este jogo é feito de plástico resistente, garantindo durabilidade e segurança para as crianças. O conjunto inclui 6 pinos de boliche, cada um com uma altura de 22cm, proporcionando um desafio divertido e emocionante para os pequenos. Além disso, o jogo vem com 2 bolas de plástico, perfeitamente dimensionadas para as mãos das crianças. No entanto, devido à presença de partes pequenas, este jogo não é recomendado para crianças menores de 3 anos, pois essas peças podem ser engolidas."))

    produtos.push(new Produto("Bicicleta Infantil Aro 12", 149.99, "https://forttudo.com.br/wp-content/uploads/2023/10/Bicicleta-Infantil-Aro-12-Banco-Macio-Nathor-Com-Garrafinha-3-jpg.webp", "Entretenimento", "puericultura_nivel_3", 
    "Nacional", "As bicicletas aro 12” Nathor são equipadas com os melhores itens de segurança e conforto para crianças. O movimento central avançado facilita o pedalar, estimulando o aprendizado. A aro 12” Nathor também tem uma relação de transmissão que foi desenvolvida para que a velocidade que a criança atinge pedalando seja a mesma de um adulto andando; ou seja: os pais conseguem acompanhar a brincadeira com tranquilidade, garantindo ainda mais segurança durante a diversão!"))

    produtos.push(new Produto("Kombinha Infantil De Passeio E Pedal", 589.99, "https://www.lojafix.com.br/uploads/1681222484.jpeg", "Entretenimento", "puericultura_nivel_2", 
    "Nacional", "DESCRIÇÃO DO PRODUTO: O primeiro carrinho a gente nunca esquece! Seu pequeno vai se divertir muito durante os passeios em família. A Kombina Azul, da Calesita, é um brinquedo 2 em 1 prático e divertido. Ela acompanha o crescimento da criança. Com cores divertidas, este carrinho é inspirado em no famoso carro clássico. Super estilosa, a Kombina vem com acessórios como o apoio de pé, aro protetor e haste com suporte para bolsa. Tem também um painel com peças em relevo, cores e formas que despertam a curiosidade dos pequenos e som que estimula a compreensão de causa e efeito. CARACTERÍSTICAS DO PRODUTO: Kombina, um brinquedo dois em um. Passeio ou Pedal. Super estilosa a Kombina com as suas cores. Para a versão passeio, ela vem com acessórios como apoio de pé, aro protetor e haste com suporte para bolsa. A Kombina possui um painel com peças em relevo, cores e formas que despertam a curiosidade dos pequenos e som que estimula a compreensão de causa e efeito. E para a diversão continuar com a versão pedal, é só desencaixar o aro protetor e retirar o apoio de pé e a haste, pronto! Agora é só pedalar por ai. A Kombina é rica em detalhes, tem retrovisor e faróis de brincadeirinha, buzina, e até cinto de segurança. Tem também, um espaço para guardar pequenos acessórios ou garrafinha de água."))

    ////////////////////////
    produtos.push(new Produto("Kit De Segurança Infantil", 89.99, "https://a-static.mlcdn.com.br/1500x1500/conjunto-de-seguranca-infantil-capacete-e-kit-para-bicicleta-e-skate-protecao-garantida-artss/lojasmeraki/294-307/4d99a30f8abadfeb91498fc462d32918.jpeg", "Segurança", "puericultura_nivel_3", 
    "Nacional", "Kit de Proteção Infantil para Bicicleta, Skate e Patins: Garanta a Segurança das Crianças Este kit de cotoveleira joelheira e Luva + Capacete infantil é um item essencial para garantir a segurança durante as aventuras das crianças com bicicletas, skate e patins. Com cores vibrantes e alta qualidade, proporcionando proteção e diversão ao mesmo tempo. Transforme o passeio de bicicleta das crianças em uma aventura segura e emocionante com o nosso Protetor de Capacete Infantil! Mais do que um simples acessório, é um presente perfeito para os pequenos ciclistas"))

    produtos.push(new Produto("Cadeira Infantil para Viajens", 269.99, "https://down-br.img.susercontent.com/file/sg-11134201-7qvec-lhl0omxpjbwgf5", "Segurança", "puericultura_nivel_1", 
    "Nacional", "A Cadeira Versati da Tutti Baby foi desenvolvida para acompanhar o seu filho desde 1 ano de idade, com conforto e segurana. Sua estrutura conta com cinto de segurana de 5 pontos que dever ser utilizado para crianas do Grupo I com peso entre 9kg a 18kg. Nos grupos II e III (15kg a 36kg) utiliza-se a cadeira ou o seu assento com o cinto de segurana do carro. Seu apoio de cabea vem montado direto de fbrica e possui 7 posies de altura, que acompanham o crescimento da criana. Para garantir maior conforto, a cadeira  revestida com tecido macio e possui redutores acolchoados, fceis de limpar. Alm do porta-copos ao alcance da criana. A estrutura de plstico de engenharia proporciona uma maior resistncia e segurana ao produto. A cadeira foi desenvolvida conforme a norma NBR 14400."))

    produtos.push(new Produto("Carrinho De Bebê Ecco Travel", 359.99, "https://imgs.casasbahia.com.br/1505924784/1xg.jpg", "Segurança", "puericultura_nivel_1", 
    "Internacional", "Está procurando um carrinho de bebê leve e ideal para passeios com a segurança, a praticidade, a qualidade e o conforto que o seu bebê merece? Então você acabou de encontrar o carrinho perfeito! A Maçã Verde Baby apresenta o Carrinho de Bebê Ecco da Burigotto. Vale a pena comprar o Carrinho de Bebe Ecco da Burigotto. Com este carrinho o passeio do seu bebê será incrível! E ele vai acompanhar o amor da sua vida desde o nascimento até 15Kg. O carrinho de bebe Ecco foi desenvolvido para garantir o máximo de versatilidade e praticidade para o dia a dia dos pais. Se você não quer perder nem um único olhar ou sorrisinho do seu bebê, o carrinho de bebê Ecco é o carrinho para bebes que você precisa ter! A capota do Ecco é regulável e pode ser removida. Ela é totalmente versátil e muito prática para o manuseio. Isso é ideal para aquele sorrisinho especial ou mesmo as piscadinhas exclusivas do nenê para o papai ou para a mamãe! A capota permite também reverter o carrinho Ecco, quando o carrinho estiver com o Ninho Pramette da Burigotto (verifique se este item está incluso neste anúncio ;). Ela é perfeita para quando o bebê é pequenininho e gosta de ficar olhando para a mamãe ou para o papai! Também é muito útil para o cuidado e pronto atendimento de qualquer atenção, cuidado, carinhos ou necessidades do seu filho ou de sua filha."))

    produtos.push(new Produto("Capacete de Segurança Bebês", 109.99, "https://omundodanuvem.com/cdn/shop/products/H004e68377fc14f368ae07ccc43212b83m_1200x1200.jpg?v=1635725269", "Segurança", "puericultura_nivel_1", 
    "Internacional", "Capacete de segurança para proteção de crianças, macio e confortável. Produzido com material de alta qualidade e elasticidade, dando maior proteção ao bebê. Fechamento em velcro o que facilita o ajuste na cabeça. Por ser flexível, cabe em bolsas, carrinho de bebê."))

    produtos.push(new Produto("Cordões e Coleiras Infantis", 79.99, "https://down-br.img.susercontent.com/file/sg-11134201-7repb-m2x9irhnzt9z84_tn.webp", "Segurança", "puericultura_nivel_1", 
    "Nacional", "Corda de tração de pulseira Anti-perda para bebê, modelo atualizado com trava de chave corda Anti-perda de segurança, as crianças saem com segurança para bebê corda de tração Anti-perdido, adequado para viajar com bebês de vários países, seguros e confiáveis Corda de tração de pulseira Anti-perda para bebê, modelo atualizado com trava de chave corda Anti-perda de segurança, as crianças saem com segurança para bebê corda de tração Anti-perdido, adequado para viajar com bebês de vários países, seguros e confiáveis"))

    //////////////////////////////////
    produtos.push(new Produto("Kit 13 peças Saúde do Bebê", 129.99, "https://down-br.img.susercontent.com/file/sg-11134201-7rfg2-m3bwh5y65ijr9f", "Saúde", "puericultura_nivel_1", 
    "Nacional", "KIT PARA MAIOR SEGURANÇA NOS CUIDADOS E HIGIENE DO SEU BEBÊ Kit com 13 itens - Acompanha Bolsa personalizada com Zíper"))

    produtos.push(new Produto("Kit 7 Peças Higiene Cuidados", 99.99, "https://a-static.mlcdn.com.br/1500x1500/kit-7-pecas-higiene-cuidados-e-saude-bebe-termometro-recem-nascido-016-nehc/oficialemaiscompras/16037694241/8c3af3714ef462ae56e02f18ddf161c1.jpeg", "Saúde", "puericultura_nivel_1", 
    "Nacional", "Kit 7 Peças Higiene Cuidados E Saúde Bebê Termômetro Recém Nascido. O nosso Kit é projetado para higiene e cuidado do seu bebê, de forma eficiente e com baixo custo. Possui a maioria dos itens essenciais para manter seu bebezinho sempre limpinho e cheiroso, com um material apropriado para recém-nascidos, tomando todos os cuidados e precauções necessários. Visando além da higiene, toda segurança nessa fase que é tão especial e delicada."))

    produtos.push(new Produto("Kit Completo Cuidados", 119.99, "https://down-br.img.susercontent.com/file/57ef7c903c1750c04176e4970b95ca67", "Saúde", "puericultura_nivel_1", 
    "Nacional", "Kit Completo Cuidados do Bebê Acqua White - Safety 1st Em um só lugar, acessórios para cuidado com as unhas, o cabelo, a gengiva, e depois os dentes. Acompanha lindo estojo de viagem dupla-face. O Kit Completo da Safety 1st facilita a rotina de cuidados com bebê ao reunir diversos itens essenciais: escova de cabelo, pente, escova massageadora de gengivas em silicone, escova de dentes, tesoura, cortador e lixas de unha. A escova e o pente facilitam a criação de uma rotina para manter o cabelo e o couro cabeludo saudáveis. É possível desembaraçar os cabelos sem puxá-los, pois o pente e a escova tratam com cuidado o bebê e têm cabo emborrachado e confortável para os pais."))

    produtos.push(new Produto("Chupeta Bebê Avent", 29.99, "https://s.brascol.com.br/product/2023/12/120020120020879840-001-2.jpg", "Saúde", "puericultura_nivel_1", 
    "Nacional", "Kit Chupeta Bebê Avent Ultra Air - 02 Peças A chupeta Ultra Air Avent possui tamanho 02 indicado para bebês de 06 à 18 meses, produzido em material macio e com estampa divertida, é livre de bisfenol-a (bpa). Seu modelo possui bico flexível de silicone com um formato simétrico, auxiliando no desenvolvimento correto da cavidade bucal. Além de possuir 04 entradas para um fluxo de ar adicional, evitando a irritação da pele, acompanha estojo para transporte e esterilização."))

    produtos.push(new Produto("Kit Mamadeira Bebê", 79.99, "https://s.brascol.com.br/product/2024/01/6840-az.jpg", "Saúde", "puericultura_nivel_1", 
    "Nacional", "Kit Mamadeira Bebê Petita Premium Filhotes - 03 Peças O kit de mamadeira Petita linha Premium Filhotes possui 03 tamanhos diferentes de mamadeiras. As mamadeiras possuem bico de silicone ortodôntico, encaixa perfeitamente na boca do bebê, auxiliando no desenvolvimento natural da sucção e da mandíbula devido ao seu formato, além de seu material ser livre de Bisfenol-A. Contém 03 peças: 01- Mamadeira com capacidade de 240 ml 01- Mamadeira com capacidade de 120 ml 01- Mini mamadeira com capacidade de 60 ml."))

    produtos.push(new Produto("NUK Mamadeiras de Combinação", 109.99, "https://www.anneclairebaby.com/cdn/shop/files/81EEhg6drML._AC_SL1500.jpg?v=1713171712", "Saúde", "puericultura_nivel_1", 
    "Nacional", "A MAMADEIRA QUE SE ADAPTA AO SEU BEBÊ: O material macio, semelhante à pele, e o bico super fino e flexível adaptam-se ao paladar do bebê, para uma sensação familiar e calmante; 98% dos bebés aceitam esta mamadeira* TRAVAMENTO MAIS FÁCIL: Graças ao formato cônico, ao apoio labial extra largo e ao bico macio e aveludado, o bebê pode pegar facilmente sozinho; confirmado por 97% das mães** ALIMENTAÇÃO CALMA E RELAXADA: A inovadora ventilação anticólica ajuda a prevenir a ingestão prejudicial de ar, com 3 opções de tamanhos de tetina que regulam o fluxo de leite da melhor maneira para o seu bebê"))

    produtos.push(new Produto("Fralda Descartável Infantil", 29.99, "https://m.media-amazon.com/images/I/71bT-pdr6bL._AC_UF1000,1000_QL80_.jpg", "Saúde", "puericultura_nivel_1", 
    "Nacional", "Facilidade de uso : O formato do short torna a fralda fácil de vestir, tirar e descartar, ideal para pais ocupados e bebês em movimento Alta absorção : A fralda é super absorvente, garantindo que seu bebê fique seco e confortável por mais tempo Barreiras antivazamento : Barreiras que ajudam a evitar vazamentos, você pode ficar tranquilo sabendo que seu bebê está protegido. Ajuste confortável : A fralda se ajusta ao corpo do bebê sem apertar, proporcionando conforto durante todo o dia. Dermatologicamente testado : Seguro para a pele sensível do bebê, sendo dermatologicamente testado para garantir sua qualidade. Hipoalergênico : Ideal para bebês com pele sensível, pois é hipoalergênico, minimizando o risco de irritações e alergias."))
} else {
    produtos = JSON.parse(armazenamentoCadastro)
}
console.log(produtos)


localStorage.setItem("produtosLocal", JSON.stringify(produtos))

