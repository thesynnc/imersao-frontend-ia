/**
 * Script da página de gerenciamento de perfis (manage-profiles.html)
 * Responsável por renderizar e gerenciar a lista de perfis para edição
 */

let profiles = [];

/**
 * Renderiza a lista de perfis para gerenciamento
 */
function renderProfiles() {
    const list = document.getElementById('profiles-list');
    list.innerHTML = '';

    profiles.forEach(profile => {
        const li = document.createElement('li');
        li.className = 'profile-item';
        li.innerHTML = `
            <article class="profile-card" aria-label="Perfil ${profile.name}">
                <a href="profile-edit.html?id=${profile.id}" class="profile-link" aria-label="Editar Perfil ${profile.name}">
                    <figure class="profile-photo" role="img" aria-label="Avatar do ${profile.name}">
                        <img src="${profile.photo}" alt="Avatar do ${profile.name}" />
                    </figure>
                    <span class="profile-name">${profile.name}</span>
                </a>
            </article>
        `;
        list.appendChild(li);
    });

}


/**
 * Inicializa a página
 */
function initManageProfiles() {
    profiles = loadProfiles();
    renderProfiles();
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initManageProfiles);
