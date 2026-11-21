import { createContext, useContext, useEffect, useState,} from "react";
const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
const [favorites, setFavorites] = useState(() => {
try {
const savedFavorites = localStorage.getItem("Haddasha_Store-favorites");
return savedFavorites ? JSON.parse(savedFavorites) : [];
} catch (error) {
console.error("Unable to load saved favorites:", error);
return [];
}
});

useEffect(() => {
localStorage.setItem(
"Haddasha_Store-favorites",
JSON.stringify(favorites)
);
}, [favorites]);

function toggleFavorite(product) {
setFavorites((currentFavorites) => {
const alreadyFavorite = currentFavorites.some(
(item) => item.id === product.id
);

  if (alreadyFavorite) {
    return currentFavorites.filter(
      (item) => item.id !== product.id
    );
  }

  return [...currentFavorites, product];
});

}

function isFavorite(productId) {
return favorites.some((item) => item.id === productId);
}

function removeFavorite(productId) {
setFavorites((currentFavorites) =>
currentFavorites.filter((item) => item.id !== productId)
);
}

return (
<FavoritesContext.Provider
  value={{ favorites, toggleFavorite, isFavorite, removeFavorite,}}
>
{children}
</FavoritesContext.Provider>
);
}

export function useFavorites() {
return useContext(FavoritesContext);
}









