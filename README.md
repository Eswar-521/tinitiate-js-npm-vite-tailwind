## JS NPM Vite Tailwind Project (`js-npm-vite-tailwind`)

### Project Creation

```sh
# Create a new Vite project with React template
npm create vite@latest js-npm-vite-tailwind 
```
# Navigate to the project directory
```sh
cd js-npm-vite-tailwind
```

### Installing Dependencies

```sh
# Install necessary dependencies
npm install

# Install Tailwind CSS
```sh
npm install tailwindcss @tailwindcss/vite
```

### Configuring Tailwind CSS

- Update `vite,config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
```

### Add an `@import` to your CSS file that imports Tailwind CSS

```css
@import "tailwindcss"
```

### Run your build process with npm run dev or whatever command is configured in your package.json file.

```sh
npm run dev
```