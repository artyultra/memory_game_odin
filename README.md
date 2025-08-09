# 🎮 Pokémon Memory Game

A fun and challenging memory card game featuring Pokémon characters, built with React and Vite. Test your memory by clicking on different Pokémon cards without clicking the same one twice!

## 🌟 Features

- **Dynamic Pokémon Cards**: Fetches random Pokémon from the PokéAPI
- **Score Tracking**: Keep track of your current score and high score
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Engaging card shuffle animations after each move
- **Win Screen**: Celebrate when you successfully remember all Pokémon!

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/memory_game.git
cd memory_game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 How to Play

1. The game displays a grid of Pokémon cards
2. Click on any Pokémon card to select it
3. The cards will shuffle after each selection
4. Try to click on each Pokémon only once
5. Your score increases with each unique selection
6. If you click the same Pokémon twice, the game resets
7. Try to beat your high score!

## 🛠️ Built With

- **React** - UI library for building the interface
- **Vite** - Lightning-fast build tool and development server
- **PokéAPI** - RESTful API for Pokémon data
- **CSS3** - Custom styling and animations

## 📁 Project Structure

```
memory_game/
├── src/
│   ├── api/           # API calls and Pokémon data fetching
│   ├── assets/        # Fonts and images
│   ├── classes/       # Game logic and state management
│   ├── components/    # React components
│   │   └── layouts/   # Layout components (Navbar, Content, Cards)
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── public/            # Static assets
└── package.json       # Project dependencies
```

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

You can customize the game by:
- Modifying the number of Pokémon displayed in `src/api/pokemonPool.js`
- Adjusting the styling in component CSS files
- Adding new game modes or difficulty levels

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [PokéAPI](https://pokeapi.co/) for providing the Pokémon data
- [The Odin Project](https://www.theodinproject.com/) for the project inspiration
- Pokémon and all related names are trademarks of Nintendo/Game Freak/The Pokémon Company
