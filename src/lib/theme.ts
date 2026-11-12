/**
 * Thèmes disponibles. Chaque nom correspond à un fichier
 * `src/styles/themes/<nom>.css` qui définit les variables `--theme-*`
 * sous le sélecteur `[data-theme="<nom>"]`.
 *
 * Pour changer de thème : modifiez `ACTIVE_THEME`.
 * Pour ajouter un thème : copiez un fichier de `src/styles/themes/`,
 * ajustez les couleurs, importez-le dans `globals.css` et ajoutez son nom ici.
 */
export const THEMES = ["maison-kente", "orange-neon"] as const;

export type ThemeName = (typeof THEMES)[number];

export const ACTIVE_THEME: ThemeName = "orange-neon";
