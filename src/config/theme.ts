// TypeScript mirror of CSS design tokens for use in JS contexts
// The source of truth is globals.css — keep these in sync when rebranding

export const themeTokens = {
  primary: {
    50: "#e6eef9",
    100: "#c0d4ee",
    200: "#93b4e1",
    300: "#6294d3",
    400: "#357ac7",
    500: "#0048a5",
    600: "#003d8c",
    700: "#003373",
    800: "#00295a",
    900: "#001f43",
  },
  accent: {
    50: "#fde7e8",
    100: "#fbc4c5",
    200: "#f7898b",
    300: "#f24e51",
    400: "#ee2d30",
    500: "#e91415",
    600: "#c41011",
    700: "#9e0d0e",
    800: "#79090a",
  },
  foreground: "#0d1424",
  muted: "#6b7280",
  border: "#e5e7eb",
  surface: "#f7f9fc",
  background: "#ffffff",
} as const;
