# Vacation Home Rents

Vacation Home Rents is a semester-long project for CS422 at UIC, which aims to create a vacation rental aggregator that pulls listings from popular websites like Airbnb and VRBO. This project is focused on UI/UX implementation and does not have any backend functionality. We were asked to find a startup and design an interface for their website/application. We chose Vacation Home Rents.

## Features

- Search and filter vacation rental listings from popular websites like Airbnb and VRBO.
- View detailed information about each listing, including property details, pricing, and amenities.
- Designed for seamless user experience on desktop devices.
- User-friendly interface with easy navigation and intuitive controls.

## Technologies Used

- React
- HTML5
- CSS3
- JavaScript
- React Router (for routing)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Install the dependencies using the following command:
   `npm install`
4. Start the development server with the following command:
   `npm start`
5. Open your web browser and go to http://localhost:3000 to access the Vacation Home Rents application.
6. Test application on DESKTOP. Our application is not currently responsive.

## Usage

- Search for vacation rentals by entering location, dates, and other filters.
- Browse the listings and view detailed information about each listing.
- Save listings to favorites for future reference.
- Use the responsive design to access the application on desktop and mobile devices.

## Project Structure

Components are in `src/Components`

Styling is done in scss which is compiled to css. All the scss and css is in `src/CSS`. `_variables.scss` contains variables for other scss files such as common colors and mixins for common style components.

Pages are in `src/Pages`

The assets used such as images are in `Assets/images` however in production these images would be pulled from a database rather than stored statically in an assets foler. The icons come from the font awesome library.

## Credits

- [Vacation Home Rents](https://vacationhomerents.com)
- [Dalle2](https://openai.com/product/dall-e-2)
- [Bing Image Creator](https://www.bing.com/images/create?FORM=GDPGLP)
