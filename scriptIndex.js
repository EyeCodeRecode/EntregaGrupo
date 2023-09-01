document.addEventListener("DOMContentLoaded", function () {
    const accessibilityContainer = document.querySelector('.container-acessibilidade');
    const submenuAcessibilidade = document.querySelector('.submenu-acessibilidade');
    const botaoFechar = document.querySelector('.botao-fechar');
    const botaoAcessibilidade = document.querySelector('.botao-acessibilidade');
    const botaoAumentarFonte = document.querySelector('.botao-opcao-aumentar');
    const botaoDiminuirFonte = document.querySelector('.botao-opcao-diminuir');
    const botaoModoClaro = document.querySelector('.botao-opcao-claro'); 
    const botaoModoEscuro = document.querySelector('.botao-opcao-escuro'); 
    const conteudoSite = document.getElementById('conteudo-site');
    const pSite = document.getElementsByTagName('p');
    const divDepTexto = document.querySelectorAll('.divDepTexto');
    const navLink = document.querySelectorAll('.nav-link');
    const navMenu = document.querySelector('.nav-menu');

    const main = document.querySelector('.main');
    const a = document.querySelectorAll('a');
    const divCartao = document.querySelectorAll('.divCartao');
    const itemCarrosel = document.querySelectorAll('.itemCarrosel');
    const divDepoimento = document.querySelectorAll('.divDepoimento');

    const feedback = document.querySelector('.feedback');
    const textoTecno = document.querySelectorAll('.textoTecno');
    const exploreCategorias = document.querySelector('.exploreCategorias');
    const divVejaCursos = document.querySelector('.divVejaCursos');
    const divConteudoComeco = document.querySelector('.divConteudoComeco');

    const sectionDepoimento = document.querySelector('.sectionDepoimento');
    const divTecnologias = document.querySelector('.divTecnologias');
    const sectionCard = document.querySelector('.sectionCard');

    const botaoFontePadrao = document.querySelector('.botao-opcao-padrao');

    botaoFontePadrao.addEventListener("click", redefinirFontePadrao);
    botaoAcessibilidade.addEventListener("click", toggleSubmenuAcessibilidade);
    botaoFechar.addEventListener("click", toggleSubmenuAcessibilidade);
    botaoAumentarFonte.addEventListener("click", function () {
        aumentarFonte();
        salvarPreferencias();
    });
    botaoDiminuirFonte.addEventListener("click", function () {
        diminuirFonte();
        salvarPreferencias();
    });
    botaoModoClaro.addEventListener("click", function () {
        modoClaro();
        salvarPreferencias();
    });
    botaoModoEscuro.addEventListener("click", function () {
        modoEscuro();
        salvarPreferencias();
    });
    function redefinirFontePadrao() {
        conteudoSite.style.fontSize = "16px";

        for (let i = 0; i < pSite.length; i++) {
            pSite[i].style.fontSize = "16px";
        }

        for (let i = 0; i < divDepTexto.length; i++) {
            divDepTexto[i].style.fontSize = "16px";
        }
        salvarPreferencias(); 
    }

    function toggleSubmenuAcessibilidade() {
        submenuAcessibilidade.classList.toggle('show');
    }

    function aumentarFonte() {
        const fontSizeAtual = window.getComputedStyle(conteudoSite).fontSize;
        const novoTamanho = parseFloat(fontSizeAtual) + 2;
        conteudoSite.style.fontSize = novoTamanho + 'px';
        for (let i = 0; i < pSite.length; i++) {
            pSite[i].style.fontSize = novoTamanho + 'px';
        }
        for (let i = 0; i < divDepTexto.length; i++) {
            divDepTexto[i].style.fontSize = novoTamanho + 'px';
        }
        salvarPreferencias(); 
    }

    function diminuirFonte() {
        const fontSizeAtual = window.getComputedStyle(conteudoSite).fontSize;
        const novoTamanho = parseFloat(fontSizeAtual) - 2;
        conteudoSite.style.fontSize = novoTamanho + 'px';
        for (let i = 0; i < pSite.length; i++) {
            pSite[i].style.fontSize = novoTamanho + 'px';
        }
        for (let i = 0; i < pSite.length; i++) {
            divDepTexto[i].style.fontSize = novoTamanho + 'px';
        }
        salvarPreferencias();
    }

    function modoClaro() {
        main.classList.add("modoClaro");
        submenuAcessibilidade.classList.add("modoClaro");
        navMenu.classList.add("modoClaro");
        a.forEach(element => {
            element.classList.add("modoClaroA");
        });
        divCartao.forEach(element => {
            element.classList.add("modoClaro");
        });
        itemCarrosel.forEach(element => {
            element.classList.add("modoClaro");
        });
        divDepoimento.forEach(element => {
            element.classList.add("modoClaro");
        });
        navLink.forEach(element => {
            element.classList.add("modoClaro");
        });
        feedback.classList.add("modoClaroAzul");
        textoTecno.forEach(element => {
            element.classList.add("modoClaroAzul");
        });
        exploreCategorias.classList.add("modoClaroAzul");
        divVejaCursos.classList.add("modoClaroAzul");
        divConteudoComeco.classList.add("modoClaroAzul");

        sectionDepoimento.classList.add("modoClaroAzulEscuro");
        divTecnologias.classList.add("modoClaroAzulEscuro");
        sectionCard.classList.add("modoClaroAzulEscuro");
        salvarPreferencias(); 
    }

    function modoEscuro() {
        const modEscuro = [
            document.querySelector('.main'),
            document.querySelector('.submenu-acessibilidade'),
            ...document.querySelectorAll('a'),
            ...document.querySelectorAll('.divCartao'),
            ...document.querySelectorAll('.itemCarrosel'),
            ...document.querySelectorAll('.divDepoimento'),
            ...document.querySelectorAll('.nav-link'),
            document.querySelector('.feedback'),
            ...document.querySelectorAll('.textoTecno'),
            document.querySelector('.exploreCategorias'),
            document.querySelector('.divVejaCursos'),
            document.querySelector('.divConteudoComeco'),
            document.querySelector('.sectionDepoimento'),
            document.querySelector('.divTecnologias'),
            document.querySelector('.sectionCard'),
            document.querySelector('.nav-menu')
        ];
        
        modEscuro.forEach(elemento => {
            elemento.classList.remove("modoClaro", "modoClaroA", "modoClaroAzul", "modoClaroAzulEscuro");
        });
        salvarPreferencias(); 
    }
    carregarPreferencias();
    function carregarPreferencias() {
        const preferencias = JSON.parse(localStorage.getItem('preferenciasUsuario'));
        if (preferencias) {
            conteudoSite.style.fontSize = preferencias.tamanhoFonte;
            if (preferencias.modoClaro) {
                modoClaro();
            } else {
                modoEscuro();
            }
            for (let i = 0; i < pSite.length; i++) {
                pSite[i].style.fontSize = preferencias.tamanhoFonteP;
            }
            for (let i = 0; i < divDepTexto.length; i++) {
                divDepTexto[i].style.fontSize = preferencias.tamanhoFonteDivDep;
            }
        }
    }
    function salvarPreferencias() {
        const preferencias = {
            tamanhoFonte: conteudoSite.style.fontSize,
            tamanhoFonteP: pSite[0].style.fontSize, 
            tamanhoFonteDivDep: divDepTexto[0].style.fontSize, 
            modoClaro: main.classList.contains("modoClaro")
        };
        localStorage.setItem('preferenciasUsuario', JSON.stringify(preferencias));
    }
    
    
    salvarPreferencias();
    
});
