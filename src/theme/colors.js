/* ============================================================
   VMS ERP THEME COLORS (Deep Orange)
   - Keep exports stable to avoid breaking imports
   - Provide alias keys so older code still works
   ============================================================ */

export const ERP_COLORS = {
  /* -----------------------------
     Brand / Primary
  ----------------------------- */
  primary: "#C2410C",          // Deep Orange 700
  primaryHover: "#EA580C",     // Orange 600
  primaryActive: "#9A3412",    // Orange 800
  primarySoft: "#FFEDD5",      // Orange 100
  primaryTint: "#FED7AA",      // Orange 200
  primaryBorder: "#FDBA74",    // Orange 300

  /* -----------------------------
     Layout Backgrounds
  ----------------------------- */
  layout: "#FFF7ED",           // Orange 50
  layoutBg: "#FFF7ED",
  pageBg: "#FFF7ED",
  contentBg: "#FFFFFF",
  card: "#FFFFFF",
  cardBg: "#FFFFFF",
  headerBg: "#FFFFFF",

  /* -----------------------------
     Sidebar
  ----------------------------- */
  sidebar: "#7C2D12",          // Orange 900-ish
  siderBg: "#7C2D12",
  sidebarBg: "#7C2D12",
  sidebarBorder: "#9A3412",
  sidebarHover: "#9A3412",
  sidebarActive: "#C2410C",
  sidebarText: "#FFFFFF",
  sidebarTextMuted: "rgba(255,255,255,0.75)",

  /* -----------------------------
     Text
  ----------------------------- */
  text: "#0F172A",             // Slate 900
  textStrong: "#0B1220",
  textMuted: "#475569",        // Slate 600
  textSoft: "#64748B",         // Slate 500
  textInverse: "#FFFFFF",
  textOnPrimary: "#FFFFFF",

  /* -----------------------------
     Borders / Dividers
  ----------------------------- */
  border: "#E2E8F0",           // Slate 200
  borderSoft: "#F1F5F9",       // Slate 100
  divider: "#E2E8F0",
  outline: "rgba(194,65,12,0.25)",

  /* -----------------------------
     Shadows (subtle)
  ----------------------------- */
  shadowSm: "0 1px 2px rgba(15,23,42,0.06)",
  shadowMd: "0 8px 24px rgba(15,23,42,0.08)",
  shadowLg: "0 18px 50px rgba(15,23,42,0.12)",

  /* -----------------------------
     Status
  ----------------------------- */
  success: "#16A34A",
  successSoft: "#DCFCE7",
  warning: "#F59E0B",
  warningSoft: "#FEF3C7",
  danger: "#EF4444",
  dangerSoft: "#FEE2E2",
  info: "#0EA5E9",
  infoSoft: "#E0F2FE",

  /* -----------------------------
     Buttons
  ----------------------------- */
  btnPrimary: "#C2410C",
  btnPrimaryHover: "#EA580C",
  btnPrimaryActive: "#9A3412",
  btnOutline: "#C2410C",
  btnOutlineHoverBg: "#FFEDD5",

  /* -----------------------------
     Inputs
  ----------------------------- */
  inputBg: "#FFFFFF",
  inputBorder: "#CBD5E1",
  inputBorderHover: "#FDBA74",
  inputBorderFocus: "#EA580C",
  inputPlaceholder: "#94A3B8",

  /* -----------------------------
     Table
  ----------------------------- */
  tableHeaderBg: "#FFF7ED",
  tableHeaderText: "#334155",
  tableRowHover: "#FFEDD5",
  tableRowStripe: "#FFF7ED",

  /* -----------------------------
     Tags / Badges
  ----------------------------- */
  badgeBg: "#FFEDD5",
  badgeText: "#9A3412",

  /* -----------------------------
     Links
  ----------------------------- */
  link: "#C2410C",
  linkHover: "#EA580C",

  /* -----------------------------
     Gradients
  ----------------------------- */
  gradientPrimary: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
  gradientSidebar: "linear-gradient(180deg, #7C2D12 0%, #431407 100%)",
  gradientHero: "linear-gradient(135deg, rgba(194,65,12,0.12) 0%, rgba(234,88,12,0.06) 100%)",

  /* -----------------------------
     Neutrals
  ----------------------------- */
  white: "#FFFFFF",
  black: "#000000",
};

/* ============================================================
   Backward compatible aliases
   (If Codex or older code expects different exports/keys)
   ============================================================ */

export const COLORS = ERP_COLORS;
export const PALETTE = ERP_COLORS;

/* Ant Design-ish token map (optional use) */
export const TOKEN = {
  colorPrimary: ERP_COLORS.primary,
  colorPrimaryHover: ERP_COLORS.primaryHover,
  colorPrimaryActive: ERP_COLORS.primaryActive,

  colorSuccess: ERP_COLORS.success,
  colorWarning: ERP_COLORS.warning,
  colorError: ERP_COLORS.danger,
  colorInfo: ERP_COLORS.info,

  colorText: ERP_COLORS.text,
  colorTextSecondary: ERP_COLORS.textMuted,
  colorTextTertiary: ERP_COLORS.textSoft,
  colorTextLightSolid: ERP_COLORS.textInverse,

  colorBgLayout: ERP_COLORS.layout,
  colorBgContainer: ERP_COLORS.cardBg,
  colorBorder: ERP_COLORS.border,
  colorSplit: ERP_COLORS.divider,

  borderRadius: 8,
  fontSize: 14,
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

/* Theme bundle used by App.jsx if you want */
export const THEME = {
  token: TOKEN,
  components: {
    Layout: {
      siderBg: ERP_COLORS.sidebar,
      headerBg: ERP_COLORS.headerBg,
      bodyBg: ERP_COLORS.layout,
    },
    Menu: {
      darkItemBg: ERP_COLORS.sidebar,
      darkItemSelectedBg: ERP_COLORS.sidebarActive,
      darkItemHoverBg: ERP_COLORS.sidebarHover,
      darkItemColor: ERP_COLORS.sidebarTextMuted,
      darkItemSelectedColor: ERP_COLORS.sidebarText,
    },
    Table: {
      headerBg: ERP_COLORS.tableHeaderBg,
      headerColor: ERP_COLORS.tableHeaderText,
      rowHoverBg: ERP_COLORS.tableRowHover,
    },
    Button: {
      colorPrimary: ERP_COLORS.primary,
      colorPrimaryHover: ERP_COLORS.primaryHover,
      colorPrimaryActive: ERP_COLORS.primaryActive,
    },
    Input: {
      colorBgContainer: ERP_COLORS.inputBg,
      colorBorder: ERP_COLORS.inputBorder,
      colorPrimary: ERP_COLORS.primary,
    },
  },
};

/* ============================================================
   Helper: CSS variables (optional)
   If your CSS uses var(--primary) etc, call this once.
   ============================================================ */
export const ERP_CSS_VARS = {
  "--erp-primary": ERP_COLORS.primary,
  "--erp-primary-hover": ERP_COLORS.primaryHover,
  "--erp-primary-active": ERP_COLORS.primaryActive,
  "--erp-layout": ERP_COLORS.layout,
  "--erp-card": ERP_COLORS.card,
  "--erp-text": ERP_COLORS.text,
  "--erp-text-muted": ERP_COLORS.textMuted,
  "--erp-border": ERP_COLORS.border,
  "--erp-sidebar": ERP_COLORS.sidebar,
  "--erp-sidebar-hover": ERP_COLORS.sidebarHover,
  "--erp-sidebar-active": ERP_COLORS.sidebarActive,
};

export function applyErpCssVars(root = document.documentElement) {
  try {
    Object.entries(ERP_CSS_VARS).forEach(([k, v]) => root.style.setProperty(k, v));
  } catch (_) {}
}

/* Default export for any code doing: import theme from "@/theme/colors" */
export default ERP_COLORS;