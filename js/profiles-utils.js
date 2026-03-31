/**
 * Utilitários compartilhados para gerenciamento de perfis
 * Este arquivo contém funções reutilizáveis em todas as páginas
 */

const DEFAULT_PROFILES = [
    { 
        id: 1, 
        name: 'Perfil 1', 
        photo: 'assets/profile1.jpg' 
    },
    { 
        id: 2, 
        name: 'Perfil 2', 
        photo: 'assets/profile2.jpg' 
    },
    { 
        id: 3, 
        name: 'Perfil 3', 
        photo: 'assets/profile3.jpg' 
    },
    { 
        id: 4, 
        name: 'Perfil 4', 
        photo: 'assets/profile4.jpg' 
    },
    { 
        id: 5, 
        name: 'Perfil 5', 
        photo: 'assets/profile5.jpg' 
    }
];

const STORAGE_KEY = 'profiles';
const MAX_PROFILES = 5;

/**
 * Carrega perfis do localStorage
 * @returns {Array} Array de perfis
 */
function loadProfiles() {
    let profiles = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    
    if (profiles.length === 0) {
        profiles = DEFAULT_PROFILES;
        saveProfiles(profiles);
    }
    
    return profiles;
}

/**
 * Salva perfis no localStorage
 * @param {Array} profiles - Array de perfis a salvar
 */
function saveProfiles(profiles) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
}

/**
 * Encontra um perfil pelo ID
 * @param {Array} profiles - Array de perfis
 * @param {Number} id - ID do perfil
 * @returns {Object|undefined} Objeto do perfil ou undefined
 */
function findProfileById(profiles, id) {
    return profiles.find(p => p.id === id);
}

/**
 * Encontra índice de um perfil pelo ID
 * @param {Array} profiles - Array de perfis
 * @param {Number} id - ID do perfil
 * @returns {Number} Índice do perfil ou -1
 */
function findProfileIndexById(profiles, id) {
    return profiles.findIndex(p => p.id === id);
}

/**
 * Verifica se pode adicionar novo perfil
 * @param {Array} profiles - Array de perfis
 * @returns {Boolean} true se pode adicionar, false caso contrário
 */
function canAddProfile(profiles) {
    return profiles.length < MAX_PROFILES;
}

/**
 * Converte arquivo em base64
 * @param {File} file - Arquivo a converter
 * @returns {Promise} Promise que resolve com string base64
 */
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
