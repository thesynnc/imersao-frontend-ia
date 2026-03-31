/**
 * Script da página principal (index.html)
 * Responsável por renderizar e gerenciar a lista de perfis disponíveis
 */

let profiles = [];

/**
 * Salva o perfil ativo no localStorage
 * @param {Object} profile - Dados do perfil selecionado
 */
function selectProfile(profile) {
    if (!profile || !profile.name || !profile.photo) {
        console.error('Perfil inválido:', profile);
        alert('Erro ao selecionar perfil. Tente novamente.');
        return;
    }

    try {
        localStorage.setItem('perfilAtivoNome', profile.name);
        localStorage.setItem('perfilAtivoImagem', profile.photo);
        
        console.log('Perfil selecionado:', { 
            nome: profile.name, 
            imagemTamanho: profile.photo.length 
        });
        
        // Pequeno delay para garantir que localStorage foi atualizado
        setTimeout(() => {
            window.location.href = 'catalogo/catalogo.html';
        }, 100);
    } catch (error) {
        console.error('Erro ao salvar perfil no localStorage:', error);
        alert('Erro ao salvar perfil. Verifique o console.');
    }
}

/**
 * Renderiza a lista de perfis disponíveis
 */
function renderProfiles() {
    const list = document.getElementById('profiles-list');
    list.innerHTML = '';

    profiles.forEach(profile => {
        const li = document.createElement('li');
        li.className = 'profile-item';
        li.innerHTML = `
            <article class="profile-card" aria-label="Perfil ${profile.name}">
                <button class="profile-link" aria-label="Abrir Perfil ${profile.name}" type="button">
                    <figure class="profile-photo" role="img" aria-label="Avatar do ${profile.name}">
                        <img src="${profile.photo}" alt="Avatar do ${profile.name}" />
                    </figure>
                    <span class="profile-name">${profile.name}</span>
                </button>
            </article>
        `;
        
        // Adicionar event listener ao botão de perfil
        const profileLink = li.querySelector('.profile-link');
        profileLink.addEventListener('click', () => selectProfile(profile));
        
        list.appendChild(li);
    });


}

/**
 * Inicializa a página
 */
function initIndex() {
    profiles = loadProfiles();
    renderProfiles();
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initIndex);
