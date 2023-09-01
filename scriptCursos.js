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
    const descTecno = document.querySelectorAll('.descTecno');
    const navLink = document.querySelectorAll('.nav-link');
    const navMenu = document.querySelector('.nav-menu');
    const main = document.querySelector('.main');
    const a = document.querySelectorAll('a');
    const divCartao = document.querySelectorAll('.divCartao');
    const itemCarrosel = document.querySelectorAll('.itemCarrosel');
    const textoTecno = document.querySelectorAll('.textoTecno');
    const exploreCategorias = document.querySelector('.exploreCategorias');
    const divVejaCursos = document.querySelectorAll('.divVejaCursos');
    const divTecnologias = document.querySelector('.divTecnologias');
    const sectionCard = document.querySelectorAll('.sectionCard');
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

        for (let i = 0; i < descTecno.length; i++) {
            descTecno[i].style.fontSize = "16px";
        }
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
        for (let i = 0; i < descTecno.length; i++) {
            descTecno[i].style.fontSize = novoTamanho + 'px';
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
            descTecno[i].style.fontSize = novoTamanho + 'px';
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
        descTecno.forEach(element => {
            element.classList.add("modoClaroAzul");
        });
        textoTecno.forEach(element => {
            element.classList.add("modoClaroAzul");
        });
        divCartao.forEach(element => {
            element.classList.add("modoClaro");
        });
        itemCarrosel.forEach(element => {
            element.classList.add("modoClaro");
        });
        
        navLink.forEach(element => {
            element.classList.add("modoClaro");
        });

        divVejaCursos.forEach(element => {
            element.classList.add("modoClaroAzul");
        });
        sectionCard.forEach(element => {
            element.classList.add("modoClaroAzulEscuro");
        });

        exploreCategorias.classList.add("modoClaroAzul");
        divTecnologias.classList.add("modoClaroAzulEscuro");

        salvarPreferencias();
    }

    function modoEscuro() {
        const modEscuro = [
            ...document.querySelectorAll('a'),
            ...document.querySelectorAll('.divCartao'),
            ...document.querySelectorAll('.itemCarrosel'),
            ...document.querySelectorAll('.nav-link'),
            ...document.querySelectorAll('.textoTecno'),
            ...document.querySelectorAll('.sectionCard'),
            ...document.querySelectorAll('.divVejaCursos'),
            document.querySelector('.main'),
            document.querySelector('.submenu-acessibilidade'),
            document.querySelector('.exploreCategorias'),
            document.querySelector('.divConteudoComeco'),
            document.querySelector('.sectionDepoimento'),
            document.querySelector('.divTecnologias'),
            document.querySelector('.sectionCard'),
            document.querySelector('.nav-menu'),
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
            modoClaro: main.classList.contains("modoClaro")
        };
        localStorage.setItem('preferenciasUsuario', JSON.stringify(preferencias));
    }

    
    salvarPreferencias();
});
