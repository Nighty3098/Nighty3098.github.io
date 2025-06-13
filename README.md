# Nighty's Developer Portfolio

## Overview
This is a personal portfolio website for Nighty, a Fullstack / ML developer and freelancer. The site showcases projects, skills, and contact information, built with a modern and interactive design.

## Features
- **Dynamic Welcome Section**: Engaging introduction with animated text.
- **Detailed About Section**: Comprehensive bio with facts, a timeline of experience, and skills.
- **Projects Showcase**: Displays various projects with details and links.
- **Contact Information**: Easy access to social media and contact options.
- **Theme Toggling**: Switch between dark and light themes.
- **Responsive Design**: Optimized for various screen sizes, including mobile.
- **Smooth Animations**: Utilizes `framer-motion` for fluid UI/UX.

## Technologies Used
- React.js
- HTML5 / CSS3
- JavaScript
- Framer Motion (for animations)
- React Router DOM (for navigation)
- FontAwesome (for icons)
- Google Fonts

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nighty3098/PROFILE.git
   cd PROFILE
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **(Optional) GitHub API Token for `git_stats.jsx`:**
   If you plan to use the GitHub statistics feature (which fetches public repo stars, followers, commits, and pull requests), you'll need a GitHub Personal Access Token.
   - Go to GitHub -> Settings -> Developer settings -> Personal access tokens.
   - Generate a new token with `public_repo` scope (or `repo` for private repos, if needed).
   - In `src/components/git_stats.jsx`, replace `YOUR_GITHUB_TOKEN` with your actual token. **Be careful not to commit your token directly to public repositories.** Consider using environment variables for production.

## Running the Project

To start the development server:

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000` (or another port if 3000 is occupied).

## Project Structure
```
PROFILE/
├── public/                # Static assets (images, favicon, index.html)
├── src/
│   ├── App.js             # Main application component and routing
│   ├── index.js           # Entry point of the React application
│   ├── index.css          # Global styles
│   ├── components/        # Reusable UI components
│   │   ├── bio.jsx        # About Me section
│   │   ├── contacts.jsx   # Contact information
│   │   ├── header.jsx     # Navigation bar
│   │   ├── info.jsx       # General info widgets
│   │   ├── skills.jsx     # Skills display
│   │   ├── text_area.jsx  # Animated text component
│   │   └── data/          # Data files for components (e.g., skills_list.jsx)
│   ├── hooks/             # Custom React hooks (e.g., useTheme.js)
│   ├── pages/             # Page-level components
│   │   └── Projects.jsx   # Projects display page
└── README.md              # Project documentation (this file)
```

## Contributing
Feel free to fork the repository, make improvements, and submit pull requests.

## Contact
- **GitHub**: [Nighty3098](https://github.com/Nighty3098)
- **Telegram**: [Night3098](https://t.me/Night3098)

---
Made with ❤️ by Nighty3098
