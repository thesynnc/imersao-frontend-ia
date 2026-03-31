/**
 * Script da página de edição de perfil (profile-edit.html)
 * Responsável por gerenciar a edição e exclusão de perfis
 */

let profiles = [];
let editingProfileId = null;

/**
 * Carrega os dados do perfil a ser editado
 */
function loadProfileData() {
    const urlParams = new URLSearchParams(window.location.search);
    const profileId = parseInt(urlParams.get('id'));

    if (!profileId) {
        window.location.href = 'manage-profiles.html';
        return;
    }

    const profile = findProfileById(profiles, profileId);

    if (!profile) {
        window.location.href = 'manage-profiles.html';
        return;
    }

    editingProfileId = profileId;
    document.getElementById('profile-name-title').textContent = profile.name;
    document.getElementById('edit-profile-avatar').src = profile.photo;
    document.getElementById('edit-profile-name').value = profile.name;
}

/**
 * Inicializa os event listeners
 */
function initProfileEdit() {
    const editablePhoto = document.getElementById('editable-photo');
    const photoInput = document.getElementById('edit-profile-photo');
    const saveButton = document.getElementById('edit-save-button');
    const deleteButton = document.getElementById('edit-del-button');
    const backButton = document.getElementById('back-button');

    // Clique no círculo da foto para trocar
    editablePhoto.addEventListener('click', () => {
        photoInput.click();
    });

    // Atualizar visualização ao selecionar nova foto
    photoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            document.getElementById('edit-profile-avatar').src = event.target.result;
        };
        reader.readAsDataURL(file);
    });

    // Botão Voltar
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = 'manage-profiles.html';
        });
    }

    // Botão Salvar
    saveButton.addEventListener('click', saveProfileChanges);

    // Botão Excluir
    deleteButton.addEventListener('click', deleteProfile);
}

/**
 * Salva as alterações do perfil
 */
function saveProfileChanges() {
    const nameInput = document.getElementById('edit-profile-name').value.trim();

    if (!nameInput) {
        alert('Nome é obrigatório!');
        return;
    }

    const profileIndex = findProfileIndexById(profiles, editingProfileId);
    if (profileIndex === -1) return;

    profiles[profileIndex].name = nameInput;
    profiles[profileIndex].photo = document.getElementById('edit-profile-avatar').src;

    saveProfiles(profiles);
    window.location.href = 'manage-profiles.html';
}

/**
 * Exclui o perfil
 */
function deleteProfile() {
    if (!confirm('Tem certeza que deseja excluir este perfil?')) return;

    profiles = profiles.filter(p => p.id !== editingProfileId);
    saveProfiles(profiles);
    window.location.href = 'manage-profiles.html';
}

/**
 * Inicializa a página
 */
function initPage() {
    profiles = loadProfiles();
    loadProfileData();
    initProfileEdit();
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initPage);
