// Tailwind CSS utility classes organized by component/functionality
// This promotes reusability and consistency across the application

export const navigationStyles = {
  // Navigation container styles
  nav: {
    base: "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
    scrolled:
      "bg-white/90 backdrop-blur-xl shadow-xl border-b border-primary-200/30",
    default: "bg-white/95 backdrop-blur-lg shadow-lg",
  },

  // Container and layout
  container: "container mx-auto px-4",
  flexContainer: "flex items-center justify-between h-16",

  // Logo and brand
  logoContainer: "flex items-center space-x-3",
  logo: "w-10 h-10 bg-gradient-to-r from-primary-500 via-primary-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer",
  logoText: "text-white font-bold text-lg",
  title:
    "text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-indigo-700 bg-clip-text text-transparent hover:from-primary-500 hover:to-indigo-500 transition-all duration-300 cursor-pointer",

  // Navigation links
  linksContainer: "hidden md:flex items-center space-x-8",
  link: "relative text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 group",
  linkUnderline:
    "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 group-hover:w-full transition-all duration-300",

  // CTA Button
  ctaContainer: "flex items-center space-x-4",
  ctaButton:
    "hidden sm:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary-500 via-primary-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:via-primary-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5",

  // Mobile menu
  mobileButton:
    "md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200",
  mobileIcon: "w-6 h-6 text-gray-600",
};

export const cardStyles = {
  // Worker card container
  card: "group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-primary-200 cursor-pointer transform hover:-translate-y-2 hover:scale-[1.02]",

  // Image section
  imageContainer:
    "w-full h-72 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200",
  image:
    "object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110",

  // Service badge
  serviceBadge:
    "absolute top-4 right-4 transform group-hover:scale-105 transition-transform duration-300",
  serviceBadgeInner:
    "bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-gray-800 shadow-lg border border-white/30 ring-1 ring-gray-200/50",

  // Content section
  contentContainer: "p-4 relative",
  contentBackground:
    "absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent pointer-events-none",
  contentInner: "relative z-10",

  // Header
  header: "mb-4",
  name: "text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary-700 transition-colors duration-300",
  serviceContainer: "flex items-center space-x-2",
  statusDot: "w-2 h-2 bg-green-500 rounded-full animate-pulse",
  service: "text-gray-600 text-sm font-semibold uppercase tracking-wider",

  // Pricing section
  pricingContainer:
    "flex items-end justify-between mb-4 p-3 bg-gradient-to-r from-primary-50 to-indigo-50 rounded-xl border border-primary-100",
  pricingLeft: "flex flex-col",
  pricingLabel: "text-xs text-gray-500 font-medium mb-1",
  price: "text-2xl font-black text-primary-600 leading-none",
  pricingRight: "text-right",
  pricingPeriod: "text-sm text-gray-500 font-medium",

  // Contact button
  contactButton:
    "w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-black font-bold py-2 px-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] group-hover:shadow-2xl",
  contactButtonContent: "flex items-center justify-center space-x-2",
  contactButtonIcon:
    "w-4 h-4 transform group-hover:translate-x-1 transition-transform",
};

export const headerStyles = {
  // Header container
  header:
    "relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 pt-20 pb-16 overflow-hidden",

  // Background elements
  backgroundPattern: "absolute inset-0 opacity-5",
  backgroundOrb1:
    "absolute top-20 left-10 w-20 h-20 bg-primary-500 rounded-full blur-3xl animate-pulse",
  backgroundOrb2:
    "absolute top-40 right-20 w-32 h-32 bg-indigo-500 rounded-full blur-3xl animate-pulse",
  backgroundOrb3:
    "absolute bottom-20 left-1/3 w-24 h-24 bg-primary-400 rounded-full blur-3xl animate-pulse",

  // Content
  container: "container mx-auto px-4 py-12 relative z-10",
  contentWrapper: "text-center max-w-5xl mx-auto",
  title:
    "text-4xl md:text-5xl lg:text-7xl font-black bg-gradient-to-r from-primary-600 via-primary-700 to-indigo-700 bg-clip-text text-transparent mb-8 leading-tight tracking-tight",
  subtitle:
    "text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium",

  // Decorative elements
  decorativeContainer: "mt-12 flex justify-center",
  decorativeDots: "flex space-x-2",
  decorativeDot1:
    "w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full animate-bounce shadow-lg",
  decorativeDot2:
    "w-3 h-3 bg-gradient-to-r from-primary-400 to-indigo-500 rounded-full animate-bounce shadow-lg",
  decorativeDot3:
    "w-3 h-3 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full animate-bounce shadow-lg",
  decorativeLine: "mt-8 flex justify-center",
  decorativeLineInner:
    "w-24 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full opacity-50",
};

export const gridStyles = {
  // Grid container
  container: "container mx-auto px-4 py-8",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 auto-rows-fr",
};

export const filterStyles = {
  // Filter container
  container:
    "sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm",
  innerContainer: "container mx-auto px-4 py-6",

  // Form elements
  form: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-end",
  inputGroup: "space-y-2",
  label: "text-sm font-medium text-gray-700",
  input:
    "w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white/80 backdrop-blur-sm",
  select:
    "w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white/80 backdrop-blur-sm",

  // Clear button
  clearButton:
    "px-6 py-2.5 text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200 border border-gray-300 rounded-xl hover:border-primary-300 bg-white/80 backdrop-blur-sm",
};

export const buttonStyles = {
  // Primary buttons
  primary:
    "px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200 shadow-lg hover:shadow-xl transform hover:scale-105",

  // Load more button
  loadMore:
    "px-12 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-black font-bold text-lg rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200 shadow-xl hover:shadow-2xl transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-primary-500",

  // Loading state
  loading: "flex items-center space-x-3",
  spinner:
    "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",
};

export const layoutStyles = {
  // Main container
  container:
    "min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50",

  // Section spacing
  section: "py-8",

  // Loading states
  loadingContainer: "flex items-center justify-center min-h-screen",
  loadingContent: "text-center",
  loadingIcon: "text-6xl mb-4",
  loadingTitle: "text-2xl font-bold text-gray-800 mb-2",
  loadingMessage: "text-red-600 mb-4",
  loadingButton:
    "px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium",
};

// Page-specific styles
export const pageStyles = {
  // Loading states
  loadingCard: "animate-pulse bg-gray-200 rounded-2xl h-96",
  loadingText: "text-gray-600",
  loadingCenter: "text-center",
  loadingSpinner:
    "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",

  // Error states
  errorContainer: "text-center",
  errorIcon: "text-6xl mb-4",
  errorTitle: "text-2xl font-bold text-gray-800 mb-2",
  errorMessage: "text-red-600 mb-4",
  errorButton:
    "px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium",

  // Empty states
  emptyContainer: "col-span-full text-center py-16",
  emptyIcon: "text-6xl mb-4",
  emptyTitle: "text-2xl font-semibold text-gray-800 mb-2",
  emptyDescription: "text-gray-600",

  // Load more button
  loadMoreButton:
    "px-12 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-black font-bold text-lg rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200 shadow-xl hover:shadow-2xl transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-primary-500",
};

// Additional UI component styles
export const uiStyles = {
  skipLink:
    "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors hover:bg-primary-700",
  workersGridSection: "container mx-auto px-4 py-8",
  paginationContainer:
    "flex items-center justify-center bg-white px-4 py-8 sm:px-6",
};

// Pagination styles
export const paginationStyles = {
  container: "flex items-center justify-center bg-white px-4 py-8 sm:px-6",
  mobileContainer: "flex flex-1 justify-between sm:hidden",
  mobileButton:
    "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
  mobileInfo: "flex items-center space-x-2",
  mobileText: "text-sm text-gray-700",
  desktopContainer:
    "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",
  info: "text-sm text-gray-700",
  buttonsContainer: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  pageButton:
    "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
  activePageButton: "z-10 bg-primary-50 border-primary-500 text-primary-600",
  navButton:
    "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
  dots: "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700",
};

// Icon styles
export const iconStyles = {
  searchIcon: "h-5 w-5 text-gray-400",
  arrowIcon: "w-4 h-4 transform group-hover:translate-x-1 transition-transform",
  statusDot: "w-2 h-2 bg-green-500 rounded-full animate-pulse",
};

// Utility functions for combining classes
export const cn = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

// Animation delays for staggered effects
export const animationDelays = {
  short: "0.1s",
  medium: "0.2s",
  long: "0.3s",
};

// Responsive breakpoint utilities
export const breakpoints = {
  sm: "sm:",
  md: "md:",
  lg: "lg:",
  xl: "xl:",
  "2xl": "2xl:",
};

// Color scheme utilities
export const colors = {
  primary: {
    50: "primary-50",
    100: "primary-100",
    200: "primary-200",
    300: "primary-300",
    400: "primary-400",
    500: "primary-500",
    600: "primary-600",
    700: "primary-700",
    800: "primary-800",
    900: "primary-900",
  },
  indigo: {
    400: "indigo-400",
    500: "indigo-500",
    600: "indigo-600",
    700: "indigo-700",
  },
};
