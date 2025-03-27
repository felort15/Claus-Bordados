// Cargar favoritos del localStorage
function loadFavorites() {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

// Guardar favoritos en localStorage
function saveFavorites(favorites) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Actualizar el estado visual del botón de favoritos
function updateFavoriteButton(button, isFavorite) {
  const svg = button.querySelector('svg');
  if (svg) {
    svg.style.fill = isFavorite ? 'currentColor' : 'none';
  }
}

// Inicializar botones de favoritos
document.querySelectorAll('.favorite-button').forEach((button) => {
  const imageData = JSON.parse(button.getAttribute('data-image') || '{}');
  const favorites = loadFavorites();
  const isFavorite = favorites.some((f) => f.src === imageData.src);
  updateFavoriteButton(button, isFavorite);

  button.addEventListener('click', () => {
    const favorites = loadFavorites();
    const index = favorites.findIndex((f) => f.src === imageData.src);
    
    if (index === -1) {
      favorites.push(imageData);
    } else {
      favorites.splice(index, 1);
    }
    
    saveFavorites(favorites);
    updateFavoriteButton(button, index === -1);
  });
}); 