import preset from './vendor/filament/support/tailwind.config.preset'

export default {
    presets: [preset],
    content: [
        './app/Filament/**/*.php',
        './resources/views/filament/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
        './resources/js/**/*.jsx', // Jika menggunakan React untuk Inertia
    ],
    theme: {
        extend: {
            colors: {
                green: '#129235',
                HoverGreen : '#0C7128',
            },
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
              },
        },
    },
    plugins: [],
}
