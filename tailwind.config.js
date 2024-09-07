module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#3B5987', 
        customGray: '#64748b', 
        customOrange: '#fb923c', 
      },
      screens: {
        sm: '640px',   
        md: '768px',   
        lg: '1024px',  
        xl: '1280px',  
      },
      width: {
        'custom-small': '100%',    
        'custom-medium': '50%',    
        'custom-large': '30%',     
      },
    },
  },
  plugins: [],
}
