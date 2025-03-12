# GeeksterPok

GeeksterPok is a web application that displays a list of Pokémon fetched from the PokéAPI. The application allows users to filter Pokémon by type, search for specific Pokémon, and interact with Pokémon cards by flipping them to reveal additional details.

## Features
- Display a list of Pokémon with names, images, and types.
- Filter Pokémon by their type (e.g., Grass, Fire, Water).
- Search Pokémon by name.
- Click on a Pokémon card to flip and view abilities.
- Reset button to clear filters and display all Pokémon.

## Technologies Used
- HTML
- CSS
- JavaScript
- PokéAPI (https://pokeapi.co/api/v2/pokemon?limit=50)

## Installation and Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/geeksterpok.git
   ```
2. Navigate to the project directory:
   ```sh
   cd geeksterpok
   ```
3. Open `index.html` in a web browser.

## API Usage
This project fetches Pokémon data from the PokéAPI:
- Pokémon list: `https://pokeapi.co/api/v2/pokemon?limit=50`
- Pokémon details: Each Pokémon URL from the list is used to fetch detailed information.

## How It Works
1. On page load, Pokémon data is fetched and displayed in card format.
2. Users can:
   - Filter Pokémon by selecting a type and clicking the "Filter by Type" button.
   - Search for a Pokémon by typing in the search bar.
   - Click on a Pokémon card to flip and reveal abilities.
   - Reset filters using the "Reset" button.

## Contributing
Feel free to fork this project, improve it, and submit a pull request!

## Live Demo
You can check out the live version of this project here: https://mkg668777.github.io/GeeksterPok/
## License
This project is open-source and available under the [MIT License](LICENSE).

