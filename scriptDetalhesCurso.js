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
    const navLink = document.querySelectorAll('.nav-link');
    const navMenu = document.querySelector('.nav-menu');
    const main = document.querySelector('.main');
    const a = document.querySelectorAll('a');
    const botaoFontePadrao = document.querySelector('.botao-opcao-padrao');
    const botao = document.querySelectorAll('.botao');
    const asideImg = document.querySelector('.asideImg')

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
        asideImg.classList.add("modoClaroAzul");
        a.forEach(element => {
            element.classList.add("modoClaroA");
        });
        botao.forEach(element => {
            element.classList.add("modoClaroAzul");
        });
        navLink.forEach(element => {
            element.classList.add("modoClaro");
        });
        salvarPreferencias(); 
    }

    function modoEscuro() {
        const modEscuro = [
            document.querySelector('.asideImg'),
            document.querySelector('.main'),
            document.querySelector('.submenu-acessibilidade'),
            ...document.querySelectorAll('a'),
            ...document.querySelectorAll('.nav-link'),
            document.querySelector('.exploreCategorias'),
            document.querySelector('.botao'),
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
            modoClaro: main.classList.contains("modoClaro")
        };
        localStorage.setItem('preferenciasUsuario', JSON.stringify(preferencias));
    }

    
    salvarPreferencias();

    });
