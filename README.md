# Nighty's Developer Portfolio

## Overview
This is a personal portfolio website for Nighty — a Fullstack/ML developer and freelancer. The site showcases projects, skills, and contact information, built in a modern style with smooth animations and responsive design.

## Features
- **Modern Animations**: Smooth and responsive animations in all key sections using `framer-motion` (headings, cards, buttons, sections, reviews).
- **Reviews Grid**: Reviews are displayed in two flex columns (or one on mobile), each column is a vertical flex block.
- **Detailed About Section**: Biography, facts, skills, animated blocks.
- **Project Showcase**: Project cards with animation, links, and GitHub statistics.
- **Contacts and Socials**: Quick access to social networks and contacts, animated icons.
- **Theme Switching**: Light and dark theme support.
- **Responsive Design**: Looks great on all devices.
- **Modern Styles and Fonts**: Uses modern fonts (Rubik, Work Sans, Roboto Condensed), new color variables, and improved responsiveness.

## Technologies Used
- React.js
- HTML5 / CSS3
- JavaScript (ES6+)
- Framer Motion (animations)
- React Router DOM (navigation)
- FontAwesome (icons)
- Google Fonts (Rubik, Work Sans, Roboto Condensed)
- i18next (multilanguage)

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

3. **(Optional) GitHub API Token for statistics:**
   If you want to use GitHub statistics (stars, commits, etc.), get a Personal Access Token and specify it in the corresponding hook or use environment variables.

## Running the Project

To start the project in development mode:

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

## Project Structure
```
PROFILE/
├── public/                # Статические публичные файлы (index.html, manifest, robots.txt, sitemap.xml, favicon, og:image)
│   ├── me.png             # Аватар для секции Bio (если нужен публично)
│   └── ...                # Только необходимые публичные ресурсы
├── src/
│   ├── assets/            # Все ассеты (изображения, иконки, svg, подпапки other, styleshop, owl_website, coffee)
│   │   ├── other/
│   │   ├── styleshop/
│   │   ├── owl_website/
│   │   └── coffee/
│   ├── App.js             # Main component and routing
│   ├── index.js           # React entry point
│   ├── index.css          # Global styles, variables, responsive
│   ├── components/        # UI components
│   │   ├── bio.jsx        # About section
│   │   ├── contacts.jsx   # Contacts and socials
│   │   ├── header.jsx     # Navigation and theme switch
│   │   ├── info.jsx       # Info widgets
│   │   ├── skills.jsx     # Skills
│   │   ├── SocialIcon.jsx # Animated social icons
│   │   ├── DiscordButton.jsx # Discord button
│   │   ├── ReviewsSlider.jsx # Reviews grid (flex columns)
│   │   ├── ContactCard.jsx   # Contact card
│   │   ├── welcome.jsx       # Animated welcome block
│   │   ├── LanguageSelector.jsx # Language switcher
│   │   ├── data/           # Data for components (skills_list.jsx, info_list.jsx)
│   │   └── projects/       # Project components
│   │       ├── projects_list.jsx   # Project list (cards)
│   │       └── project_header.jsx  # Projects page header
│   ├── hooks/              # Custom hooks (theme.js, useGithubStats.js)
│   ├── pages/              # Pages (Projects.jsx)
├── package.json            # Dependencies and scripts
├── README.md               # Documentation (this file)
```

## Contributing
Fork, improve, and send pull requests — any suggestions are welcome!

## Contact
- **GitHub**: [Nighty3098](https://github.com/Nighty3098)
- **Telegram**: [Night3098](https://t.me/Night3098)

---
Made with ❤️ by Nighty3098
