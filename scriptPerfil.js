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
    const cursos = document.querySelector('.cursos');
    const botaoFontePadrao = document.querySelector('.botao-opcao-padrao');
    const divCartao = document.querySelectorAll('.divCartao');

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
        salvarPreferencias();
    }

    function diminuirFonte() {
        const fontSizeAtual = window.getComputedStyle(conteudoSite).fontSize;
        const novoTamanho = parseFloat(fontSizeAtual) - 2;
        conteudoSite.style.fontSize = novoTamanho + 'px';
        for (let i = 0; i < pSite.length; i++) {
            pSite[i].style.fontSize = novoTamanho + 'px';
        }
        salvarPreferencias();
    }

    function modoClaro() {
        main.classList.add("modoClaro");
        submenuAcessibilidade.classList.add("modoClaro");
        navMenu.classList.add("modoClaro");
        cursos.classList.add("modoClaroAzulEscuro");
        a.forEach(element => {
            element.classList.add("modoClaroA");
        });
        navLink.forEach(element => {
            element.classList.add("modoClaro");
        });
        divCartao.forEach(element => {
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
            ...document.querySelectorAll('.divCartao'),
            ...document.querySelectorAll('.nav-link'),
            document.querySelector('.exploreCategorias'),
            document.querySelector('.botao'),
            document.querySelector('.nav-menu')
        ];

        modEscuro.forEach(elemento => {
            if (elemento) {
                elemento.classList.remove("modoClaro", "modoClaroA", "modoClaroAzul", "modoClaroAzulEscuro");
            }
        });
        salvarPreferencias();
    }

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

    carregarPreferencias();
    salvarPreferencias();
});
