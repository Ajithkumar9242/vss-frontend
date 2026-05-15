/* =========================================================
   VSS ERP — COMPLETE THEME SYSTEM
   Deep Orange Professional ERP Theme
   Safe exports + backward compatibility
   ========================================================= */

/* =========================================================
   MAIN COLOR PALETTE
   ========================================================= */

export const ERP_COLORS = {
  /* =====================================================
     PRIMARY BRAND
     ===================================================== */
  primary: '#C2410C',
  primaryHover: '#EA580C',
  primaryActive: '#9A3412',
  primaryLight: '#FED7AA',
  primarySoft: '#FFEDD5',
  primaryUltraSoft: '#FFF7ED',
  primaryBorder: '#FDBA74',

  /* =====================================================
     ORANGE SHADES
     ===================================================== */
  orange50: '#FFF7ED',
  orange100: '#FFEDD5',
  orange200: '#FED7AA',
  orange300: '#FDBA74',
  orange400: '#FB923C',
  orange500: '#F97316',
  orange600: '#EA580C',
  orange700: '#C2410C',
  orange800: '#9A3412',
  orange900: '#7C2D12',

  /* =====================================================
     BACKGROUND COLORS
     ===================================================== */
  layout: '#FFF7ED',
  layoutBg: '#FFF7ED',
  bodyBg: '#FFF7ED',
  pageBg: '#FFF7ED',
  appBg: '#FFF7ED',

  card: '#FFFFFF',
  cardBg: '#FFFFFF',
  containerBg: '#FFFFFF',

  headerBg: '#FFFFFF',
  contentBg: '#FFFFFF',
  modalBg: '#FFFFFF',
  drawerBg: '#FFFFFF',

  hoverBg: '#FFF7ED',
  activeBg: '#FFEDD5',
  selectedBg: '#FED7AA',

  /* =====================================================
     SIDEBAR
     ===================================================== */
  sidebar: '#7C2D12',
  sidebarBg: '#7C2D12',
  siderBg: '#7C2D12',

  sidebarHover: '#9A3412',
  sidebarActive: '#C2410C',
  sidebarBorder: '#EA580C',

  sidebarText: '#FFFFFF',
  sidebarTextMuted: 'rgba(255,255,255,0.72)',
  sidebarTextActive: '#FFFFFF',

  /* =====================================================
     NAVBAR
     ===================================================== */
  navbarBg: '#FFFFFF',
  navbarBorder: '#E2E8F0',
  navbarText: '#0F172A',

  /* =====================================================
     TEXT COLORS
     ===================================================== */
  text: '#0F172A',
  textPrimary: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#64748B',
  textSoft: '#94A3B8',
  textDisabled: '#CBD5E1',

  textInverse: '#FFFFFF',
  textOnPrimary: '#FFFFFF',

  heading: '#0B1220',
  title: '#0B1220',

  /* =====================================================
     BORDERS
     ===================================================== */
  border: '#E2E8F0',
  borderSoft: '#F1F5F9',
  borderStrong: '#CBD5E1',

  divider: '#E2E8F0',
  outline: 'rgba(194,65,12,0.22)',

  /* =====================================================
     INPUTS
     ===================================================== */
  inputBg: '#FFFFFF',
  inputBorder: '#CBD5E1',
  inputBorderHover: '#FDBA74',
  inputBorderFocus: '#EA580C',
  inputPlaceholder: '#94A3B8',

  /* =====================================================
     TABLES
     ===================================================== */
  tableBg: '#FFFFFF',
  tableHeaderBg: '#FFF7ED',
  tableHeaderText: '#334155',

  tableRowHover: '#FFF7ED',
  tableRowSelected: '#FFEDD5',
  tableBorder: '#E2E8F0',

  /* =====================================================
     BUTTONS
     ===================================================== */
  buttonPrimary: '#C2410C',
  buttonPrimaryHover: '#EA580C',
  buttonPrimaryActive: '#9A3412',

  buttonSecondary: '#FFFFFF',
  buttonSecondaryHover: '#FFF7ED',

  buttonBorder: '#FDBA74',

  /* =====================================================
     STATUS COLORS
     ===================================================== */
  success: '#16A34A',
  successBg: '#DCFCE7',
  successBorder: '#86EFAC',

  warning: '#F59E0B',
  warningBg: '#FEF3C7',
  warningBorder: '#FCD34D',

  error: '#EF4444',
  errorBg: '#FEE2E2',
  errorBorder: '#FCA5A5',

  danger: '#DC2626',
  dangerBg: '#FEE2E2',

  info: '#0EA5E9',
  infoBg: '#E0F2FE',

  /* =====================================================
     TAGS
     ===================================================== */
  tagBg: '#FFF7ED',
  tagText: '#9A3412',
  tagBorder: '#FDBA74',

  /* =====================================================
     LINKS
     ===================================================== */
  link: '#C2410C',
  linkHover: '#EA580C',
  linkVisited: '#9A3412',

  /* =====================================================
     ICONS
     ===================================================== */
  icon: '#475569',
  iconMuted: '#94A3B8',
  iconOnPrimary: '#FFFFFF',

  /* =====================================================
     SHADOWS
     ===================================================== */
  shadowXs: '0 1px 2px rgba(15,23,42,0.04)',
  shadowSm: '0 2px 6px rgba(15,23,42,0.06)',
  shadowMd: '0 10px 24px rgba(15,23,42,0.08)',
  shadowLg: '0 18px 40px rgba(15,23,42,0.12)',

  /* =====================================================
     GRADIENTS
     ===================================================== */
  gradientPrimary:
    'linear-gradient(135deg, #C2410C 0%, #EA580C 100%)',

  gradientSidebar:
    'linear-gradient(180deg, #7C2D12 0%, #431407 100%)',

  gradientHero:
    'linear-gradient(135deg, rgba(194,65,12,0.12) 0%, rgba(234,88,12,0.06) 100%)',

  gradientCard:
    'linear-gradient(135deg, #FFFFFF 0%, #FFF7ED 100%)',

  /* =====================================================
     MISC
     ===================================================== */
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

/* =========================================================
   BACKWARD COMPATIBILITY EXPORTS
   ========================================================= */

export const COLORS = ERP_COLORS;
export const PALETTE = ERP_COLORS;
export const THEME_COLORS = ERP_COLORS;

/* =========================================================
   ANTD TOKEN SYSTEM
   ========================================================= */

export const TOKEN = {
  colorPrimary: ERP_COLORS.primary,
  colorPrimaryHover: ERP_COLORS.primaryHover,
  colorPrimaryActive: ERP_COLORS.primaryActive,

  colorSuccess: ERP_COLORS.success,
  colorWarning: ERP_COLORS.warning,
  colorError: ERP_COLORS.error,
  colorInfo: ERP_COLORS.info,

  colorText: ERP_COLORS.text,
  colorTextSecondary: ERP_COLORS.textSecondary,
  colorTextTertiary: ERP_COLORS.textMuted,

  colorTextLightSolid: ERP_COLORS.textInverse,

  colorBgLayout: ERP_COLORS.layout,
  colorBgContainer: ERP_COLORS.cardBg,
  colorBorder: ERP_COLORS.border,
  colorSplit: ERP_COLORS.divider,

  borderRadius: 8,

  fontSize: 14,

  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

/* =========================================================
   COMPLETE ANTD COMPONENT THEME
   ========================================================= */

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

      itemBorderRadius: 8,
    },

    Table: {
      headerBg: ERP_COLORS.tableHeaderBg,
      headerColor: ERP_COLORS.tableHeaderText,

      rowHoverBg: ERP_COLORS.tableRowHover,

      borderColor: ERP_COLORS.tableBorder,
    },

    Button: {
      colorPrimary: ERP_COLORS.primary,
      colorPrimaryHover: ERP_COLORS.primaryHover,
      colorPrimaryActive: ERP_COLORS.primaryActive,

      borderRadius: 8,
    },

    Input: {
      colorBgContainer: ERP_COLORS.inputBg,
      colorBorder: ERP_COLORS.inputBorder,

      activeBorderColor: ERP_COLORS.inputBorderFocus,
      hoverBorderColor: ERP_COLORS.inputBorderHover,
    },

    Select: {
      colorBgContainer: ERP_COLORS.inputBg,
      colorBorder: ERP_COLORS.inputBorder,

      optionSelectedBg: ERP_COLORS.primarySoft,
    },

    Card: {
      colorBgContainer: ERP_COLORS.cardBg,
      borderRadiusLG: 12,
    },

    Modal: {
      contentBg: ERP_COLORS.modalBg,
      headerBg: ERP_COLORS.modalBg,
    },

    Drawer: {
      colorBgElevated: ERP_COLORS.drawerBg,
    },

    Tabs: {
      itemSelectedColor: ERP_COLORS.primary,
      inkBarColor: ERP_COLORS.primary,
    },

    Badge: {
      colorError: ERP_COLORS.error,
    },

    Tag: {
      defaultBg: ERP_COLORS.tagBg,
      defaultColor: ERP_COLORS.tagText,
    },

    Pagination: {
      colorPrimary: ERP_COLORS.primary,
    },

    Statistic: {
      titleColor: ERP_COLORS.textMuted,
      contentColor: ERP_COLORS.text,
    },

    Tooltip: {
      colorBgSpotlight: '#1E293B',
    },
  },
};

/* =========================================================
   CSS VARIABLES
   ========================================================= */

export const ERP_CSS_VARIABLES = {
  '--erp-primary': ERP_COLORS.primary,
  '--erp-primary-hover': ERP_COLORS.primaryHover,
  '--erp-primary-active': ERP_COLORS.primaryActive,

  '--erp-layout': ERP_COLORS.layout,
  '--erp-card': ERP_COLORS.card,

  '--erp-sidebar': ERP_COLORS.sidebar,
  '--erp-sidebar-hover': ERP_COLORS.sidebarHover,
  '--erp-sidebar-active': ERP_COLORS.sidebarActive,

  '--erp-text': ERP_COLORS.text,
  '--erp-text-muted': ERP_COLORS.textMuted,

  '--erp-border': ERP_COLORS.border,
};

/* =========================================================
   APPLY CSS VARIABLES
   ========================================================= */

export const applyERPTheme = () => {
  if (typeof document === 'undefined') return;

  Object.entries(ERP_CSS_VARIABLES).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
};

/* =========================================================
   DEFAULT EXPORT
   ========================================================= */

export default ERP_COLORS;