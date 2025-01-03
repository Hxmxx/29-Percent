export const lightTheme = {
  colors: {
    primary: {
      main: '#3182F6',     
      light: '#ECF5FF',    
      dark: '#1B64DA',     
      hover: '#1B64DA',
      background: '#F9FCFF'
    },
    secondary: {
      main: '#4E5968',     
      light: '#ECEEF1',
      dark: '#333D4B'
    },
    gray: {
      50: '#F9FAFB',
      100: '#F2F4F6',
      200: '#E5E8EB',
      300: '#D1D6DB',
      400: '#B0B8C1',
      500: '#8B95A1',
      600: '#6B7684',
      700: '#4E5968',
      800: '#333D4B',
      900: '#191F28'
    },
    text: {
      primary: '#191F28',    
      secondary: '#4E5968',  
      disabled: '#B0B8C1'
    },
    background: {
      default: '#FFFFFF',
      paper: '#F9FAFB',
      disabled: '#F2F4F6',
      hover: '#F3F4F6'
    },
    error: '#DC3545',
    warning: '#FF9800',
    success: '#18D0A5',     
    info: '#3182F6'
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    body1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.6
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6
    },
    caption: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '2.5rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    primary: {
      main: '#3182F6',
      light: '#1E2A3D',
      dark: '#4B93FF',
      hover: '#4B93FF',
      background: '#111827'
    },
    secondary: {
      main: '#B0B8C1',
      light: '#1E2A3D',
      dark: '#D1D6DB'
    },
    gray: {
      50: '#111827',
      100: '#1F2937',
      200: '#374151',
      300: '#4B5563',
      400: '#6B7280',
      500: '#9CA3AF',
      600: '#D1D5DB',
      700: '#E5E7EB',
      800: '#F3F4F6',
      900: '#F9FAFB'
    },
    text: {
      primary: '#F9FAFB',
      secondary: '#D1D5DB',
      disabled: '#6B7280'
    },
    background: {
      default: '#000000',
      paper: '#111827',
      disabled: '#1F2937',
      hover: '#374151'
    },
    error: '#EF4444',
    warning: '#F59E0B',
    success: '#10B981',
    info: '#3182F6'
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.4)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.4)'
  }
};

export type Theme = typeof lightTheme;