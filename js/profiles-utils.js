/**
 * Utilitários compartilhados para gerenciamento de perfis
 * Este arquivo contém funções reutilizáveis em todas as páginas
 */

const DEFAULT_PROFILES = [
    { 
        id: 1, 
        name: 'Perfil 1', 
        photo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzZGMzJBMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkF2YXRhciAxPC90ZXh0Pjwvc3ZnPg==' 
    },
    { 
        id: 2, 
        name: 'Perfil 2', 
        photo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0UyNjQyMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkF2YXRhciAzPC90ZXh0Pjwvc3ZnPg==' 
    },
    { 
        id: 3, 
        name: 'Perfil 3', 
        photo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0UyNjQyMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkF2YXRhciAzPC90ZXh0Pjwvc3ZnPg==' 
    },
    { 
        id: 4, 
        name: 'Perfil 4', 
        photo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzA1NzZDNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkF2YXRhciA0PC90ZXh0Pjwvc3ZnPg==' 
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
