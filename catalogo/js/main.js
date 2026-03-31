import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    try {
        const nomePerfil = localStorage.getItem('perfilAtivoNome');
        const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

        console.log('Perfil carregado:', { nome: nomePerfil, imagemTamanho: imagemPerfil?.length });

        // Configurar informações do perfil na navbar
        if (nomePerfil) {
            const kidsLink = document.querySelector('.kids-link');
            if (kidsLink) {
                kidsLink.textContent = nomePerfil;
            }
        }

        if (imagemPerfil) {
            const profileIcon = document.querySelector('.profile-icon');
            if (profileIcon) {
                profileIcon.src = imagemPerfil;
                profileIcon.onerror = () => {
                    console.warn('Erro ao carregar imagem do perfil');
                    profileIcon.style.display = 'none';
                };
            }
        }

        // Adicionar funcionalidade ao logo para voltar aos perfis
        const logoButton = document.querySelector('.logo-button');
        if (logoButton) {
            logoButton.addEventListener('click', () => {
                window.location.href = '../index.html';
            });
        }

        // Adicionar funcionalidade ao menu de perfil para voltar aos perfis
        const profileMenu = document.querySelector('.profile-menu');
        if (profileMenu) {
            profileMenu.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = '../index.html';
            });
        }

        // Carregar os carrosséis de conteúdo
        const container = document.getElementById('main-content');
        
        if (container) {
            categories.forEach(category => {
                const carousel = createCarousel(category);
                container.appendChild(carousel);
            });
        }
    } catch (error) {
        console.error('Erro ao carregar catálogo:', error);
    }
});
