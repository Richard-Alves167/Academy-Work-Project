class SiteFooter extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
    }

    build() {
        const footer = document.createElement('footer')

        const sectionAbout = document.createElement('section')
        const pLogo = document.createElement('p')
        pLogo.setAttribute('id','marca')
        const logo_B = document.createElement('span')
        logo_B.setAttribute('id','logo_B')
        logo_B.textContent = 'B'
        const logo_T = document.createElement('span')
        logo_T.setAttribute('id','logo_T')
        logo_T.textContent = 'T'
        pLogo.appendChild(logo_B)
        pLogo.appendChild(document.createTextNode('aby'))
        pLogo.appendChild(logo_T)
        pLogo.appendChild(document.createTextNode('oys'))
        const pDescription = document.createElement('p')
        pDescription.textContent = 'Somos uma loja especializada em brinquedos de qualidade, selecionados com carinho para oferecer diversão, aprendizado e momentos inesquecíveis para as crianças de todas as idades.<br>Nossa missão é proporcionar um ambiente seguro e estimulante, com brinquedos que favorecem o desenvolvimento, a imaginação e a criatividade,além da segurança e cuidado para seu filho.<br>'
        sectionAbout.appendChild(pLogo)
        sectionAbout.appendChild(pDescription)
        
        const sectionContact = document.createElement('section')
        const titleContact = document.createElement('h3')
        titleContact.textContent = 'Contato'
        const listContact = document.createElement('ul')

        const itemPhone = document.createElement('li')
        const imagePhone = document.createElement('img')
        imagePhone.src = '../assets/images/whatsapp.png'
        imagePhone.setAttribute('class','iconeRedeSocial')
        itemPhone.appendChild(imagePhone)
        itemPhone.appendChild(document.createTextNode('Whatzapp:'))
        itemPhone.appendChild(document.createElement('br'))
        itemPhone.appendChild(document.createTextNode('(11) 9 9999-9999'))

        const itemEmail = document.createElement('li')
        const imageEmail = document.createElement('img')
        imageEmail.src = '../assets/images/email.png'
        imageEmail.setAttribute('class','iconeRedeSocial')
        itemEmail.appendChild(imageEmail)
        itemEmail.appendChild(document.createTextNode('Email:'))
        itemEmail.appendChild(document.createElement('br'))
        itemEmail.appendChild(document.createTextNode('BabyToys@gmail.com'))

        const itemHourAttendence = document.createElement('li')
        itemHourAttendence.appendChild(document.createTextNode('Horário de atendimento:'))
        itemHourAttendence.appendChild(document.createElement('br'))
        itemHourAttendence.appendChild(document.createTextNode('07:00 às 18:00'))

        listContact.appendChild(itemPhone)
        listContact.appendChild(itemEmail)
        listContact.appendChild(itemHourAttendence)
        sectionContact.appendChild(titleContact)
        sectionContact.appendChild(listContact)

        const sectionFollow = document.createElement('section')
        const titleFollow = document.createElement('h3')
        titleFollow.textContent = 'Siga nos'
        const listFollow = document.createElement('ul')
        listFollow.appendChild(listItenSocialMedia('Instagram','','tiktok.png'))
        listFollow.appendChild(listItenSocialMedia('TikTok','','tiktok.png'))
        listFollow.appendChild(listItenSocialMedia('Twitter','','x.png'))
        listFollow.appendChild(listItenSocialMedia('Facebook','','facebook.png'))
        listFollow.appendChild(listItenSocialMedia('LinkedIn','','linkedin.png'))
        sectionFollow.appendChild(titleFollow)
        sectionFollow.appendChild(listFollow)

        function listItenSocialMedia (name, link, image) {
            const itemSocialMedia = document.createElement('li')
            const linkSocialMedia = document.createElement('a')
            linkSocialMedia.href = link
            const imageSocialMedia = document.createElement('img')
            imageSocialMedia.src = '../assets/images/' + image
            imageSocialMedia.setAttribute('class','iconeRedeSocial')
            linkSocialMedia.appendChild(imageSocialMedia)
            linkSocialMedia.appendChild(document.createTextNode(name))
            itemSocialMedia.appendChild(linkSocialMedia)
            return itemSocialMedia
        }
    
        const sectionInformations = document.createElement('section')
        const titleInformations = document.createElement('h3')
        titleInformations.textContent = 'Informações'
        const listInformations = document.createElement('ul')
        const itemAboutBuys = document.createElement('li')
        itemAboutBuys.textContent = '-Sobre compras'
        const itemClientInfo = document.createElement('li')
        itemClientInfo.textContent = '-Atendimento ao cliente'
        const itemAskQuestions = document.createElement('li')
        itemAskQuestions.textContent = '-Dúvidas frenquentes'
        listInformations.appendChild(itemAboutBuys)
        listInformations.appendChild(itemClientInfo)
        listInformations.appendChild(itemAskQuestions)
        sectionInformations.appendChild(titleInformations)
        sectionInformations.appendChild(listInformations)

        
        footer.appendChild(sectionAbout)
        footer.appendChild(sectionContact)
        footer.appendChild(sectionFollow)
        footer.appendChild(sectionInformations)
        return footer
    }

    style() {
        const style = document.createElement('style')
        style.textContent = `
        footer {
            margin-top: 80px;
            background-color: #30b3ce;
            color: aliceblue;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 120px;
            bottom: auto;
            align-items: baseline;
            padding-top: 50px;
            padding-bottom: 30px;
        }

        footer section {
            width: 15%;
            height: 70%;
            display: flex;
            flex-direction: column;
        }

        footer section h3 {
            font-size: 25px;
            margin: 10px;
            margin-inline: 0px;
        }

        footer section p {
            font-size: 10px;
        }

        footer section ul{
            list-style: none;
            padding: 0px;
        }

        footer section ul li{
            display: flex;
            align-items: center;
            margin-top: 6px;
            gap: 10px;
        }

        footer section ul a{
            display: flex;
            gap: 10px;
        }

        #marca {
            padding: 0px;
            margin: 0px;
            text-decoration: none;
            font-family: fraseinicial;
            font-size: 24px;
            color: black;
        }

        #logo_B {
            font-size: 40px;
            font-family: fraseinicial;
            color: rgb(228, 209, 122);
        }

        #logo_T {
            font-size: 40px;
            font-family: fraseinicial;
            color: #ff6c70;
        }

        #sobreNos {
            font-size: 13px;
        }

        .iconeRedeSocial {
            width: 30px;
            height: 30px;
        }
        `
        return style
    }
}

customElements.define('site-footer', SiteFooter)