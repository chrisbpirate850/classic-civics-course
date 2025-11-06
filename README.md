# U.S. Civics Education - Classic Civics Course

A comprehensive React-based educational platform presenting a complete civics curriculum covering American government and citizenship. Features 7 chapters with 65 lessons covering 90+ key concepts about U.S. government, constitutional rights, political processes, and civic engagement.

## Brand Identity

This project uses the Liberty's Principles Media brand style:

### Brand Colors
- **ink-blue** (220 69% 20%): Primary brand color for headings and navigation
- **liberty-gold** (46 87% 65%): Secondary accent color
- **patriot-red** (2 74% 58%): Accent color for emphasis
- **garden-green** (140 65% 42%): Branding elements
- **parchment** (45 23% 97%): Background color

### Custom Button Variants
- `hero`: Gradient patriot style with shadow effects
- `patriot`: Red with warm shadow
- `liberty`: Gold with ink-blue text
- `garden`: Green with warm shadow

## Features

- **7 Comprehensive Chapters** covering foundational to contemporary civics topics
- **65 Detailed Lessons** with learning objectives, key terms, and real-world applications
- **Full-Text Search** across all curriculum content
- **Dark Mode Support** for comfortable reading
- **Responsive Design** optimized for all devices
- **Client-Side Routing** with React Router

## Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom brand theme
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Routing:** React Router v6

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deploying to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from the project directory:
```bash
vercel
```

4. Follow the prompts to link your project

5. For production deployment:
```bash
vercel --prod
```

### Option 2: Using Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New..." → "Project"

4. Import your Git repository

5. Configure the project:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

6. Click "Deploy"

### Vercel Configuration

The project includes a `vercel.json` file that handles client-side routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

This ensures that all routes are properly handled by the React Router.

## Project Structure

```
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components (Button, Card, Badge)
│   │   ├── Header.jsx     # Top navigation
│   │   ├── Sidebar.jsx    # Chapter/lesson navigation
│   │   ├── HomePage.jsx   # Landing page
│   │   ├── ChapterPage.jsx # Chapter overview
│   │   ├── LessonPage.jsx # Individual lesson display
│   │   └── SearchPage.jsx # Search functionality
│   ├── lib/
│   │   └── utils.js       # Utility functions (cn)
│   ├── data/
│   │   └── curriculum.json # Complete curriculum data
│   ├── App.jsx            # Main application component
│   ├── App.css            # Global styles with brand theme
│   └── main.jsx           # Application entry point
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind with brand colors
├── postcss.config.js      # PostCSS configuration
├── vercel.json            # Vercel deployment config
└── package.json           # Dependencies and scripts
```

## Curriculum Content

The curriculum is stored in `src/data/curriculum.json` and includes:

1. **Founding Documents and Principles** (9 lessons)
2. **Government Structure and Powers** (10 lessons)
3. **Constitutional Rights and Amendments** (12 lessons)
4. **Political Processes and Elections** (11 lessons)
5. **Landmark Supreme Court Cases** (6 lessons)
6. **Federalism and Levels of Government** (7 lessons)
7. **Civil Rights and Contemporary Issues** (10 lessons)

Each lesson includes:
- Learning Objectives
- Key Terms
- Historical Context
- Core Concepts
- Real-World Applications
- Examples and Case Studies
- Discussion Questions
- Assessment Ideas
- Additional Resources

## Customization

### Updating Colors

Edit the CSS variables in `src/App.css` or Tailwind theme in `tailwind.config.js`

### Adding Content

To modify curriculum content:
1. Edit `civics_curriculum.md`
2. Run `node parse_curriculum.js` to regenerate `curriculum.json`
3. Move the updated JSON to `src/data/`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is proprietary to Liberty's Principles Media.

## Support

For issues or questions, please contact the development team.
