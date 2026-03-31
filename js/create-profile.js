/**
 * Script da página de criação de perfil (new-create.html)
 * Responsável por gerenciar o formulário de criação de novo perfil
 */

let selectedPhotoData = null;

/**
 * Inicializa os event listeners do formulário
 */
function initCreateProfile() {
    const createPhoto = document.getElementById('create-photo');
    const photoInput = document.getElementById('create-profile-photo');
    const profileNameInput = document.getElementById('create-profile-name');
    const saveButton = document.getElementById('create-save-button');
    const cancelButton = document.getElementById('create-cancel-button');
    const backButton = document.getElementById('back-button');

    // Clique no círculo da foto para trocar
    if (createPhoto) {
        createPhoto.addEventListener('click', () => {
            photoInput.click();
        });
    }

    // Atualizar visualização ao selecionar nova foto
    if (photoInput) {
        photoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                selectedPhotoData = event.target.result;
                document.getElementById('create-profile-avatar').src = selectedPhotoData;
            };
            reader.readAsDataURL(file);
        });
    }

    // Botão Voltar
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Botão Salvar/Criar
    if (saveButton) {
        saveButton.addEventListener('click', createNewProfile);
    }

    // Botão Cancelar
    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
}

/**
 * Cria um novo perfil
 */
function createNewProfile() {
    const profiles = loadProfiles();
    const profileName = document.getElementById('create-profile-name').value.trim();

    // Validações
    if (!canAddProfile(profiles)) {
        alert('Máximo de 5 perfis atingido!');
        return;
    }

    if (!profileName) {
        alert('Preencha o nome do perfil!');
        return;
    }

    if (!selectedPhotoData) {
        alert('Selecione uma foto para o perfil!');
        return;
    }

    try {
        const newProfile = {
            id: Date.now(),
            name: profileName,
            photo: selectedPhotoData
        };

        profiles.push(newProfile);
        saveProfiles(profiles);
        
        console.log('Perfil criado com sucesso:', newProfile.name);
        
        // Redirecionar para página principal
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Erro ao criar perfil:', error);
        alert('Erro ao criar o perfil. Tente novamente.');
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initCreateProfile);

