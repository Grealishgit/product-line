# Product Line Dashboard

This project is a React-based dashboard for managing products, customers, orders, payments, employees, and offices. It uses Vite for fast development and Tailwind CSS for styling.

## Features
- Dashboard overview with quick stats
- Customers, Products, Orders, Payments, Employees, and Offices pages
- Responsive layout with sidebar navigation
- Search and add functionality (UI only)
- Styled with Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd product-line
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Project Structure
```
src/
  App.jsx           # Main app and routing
  main.jsx          # Entry point
  index.css         # Tailwind CSS import
  components/       # Reusable UI components
  Layout/           # Layout and sidebar
  pages/            # Page components (Dashboard, Customers, etc.)
```

## Customization
- Update the data in each page component to connect to your backend or API.
- Modify Tailwind classes for your preferred look and feel.

## License
This project is for educational/demo purposes. Add your license as needed.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
