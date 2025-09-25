# SOP Document Generator

A React application that allows lending managers to create Standard Operating Procedure (SOP) documents by filling out a form and uploading necessary photos. The application generates a professional PDF document based on the Guilford visual design template.

## Features

- **User-friendly Form Interface**: Easily input answers to template questions with an intuitive multi-step form
- **Photo Upload**: Upload property photos, market analysis images, and other visual documentation
- **PDF Export**: Generate professional PDF documents with your information and uploaded photos
- **Professional Design**: Documents follow the Guilford visual style with clean, professional formatting
- **Alternative HTML Template**: A fillable HTML template is also available for users who prefer not to use the web app

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/sop-generator.git
   cd sop-generator
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To build the application for production:

```
npm run build
```

The built files will be in the `dist` directory and can be deployed to any static hosting service.

## Project Structure

- `src/`: Source code
  - `components/`: React components
    - `forms/`: Form components for each section of the SOP document
  - `pages/`: Page components
  - `types/`: TypeScript type definitions
  - `utils/`: Utility functions
  - `assets/`: Static assets like images
- `public/`: Public assets

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Hook Form
- PDF-lib / React-PDF
- HTML2Canvas / jsPDF

## License

This project is licensed under the MIT License - see the LICENSE file for details.