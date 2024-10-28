
# Delivery Estimator Clinikally

A React Native app for delivery estimation based on product selection and pincode input. The app calculates same-day, next-day, and general delivery dates using logistics provider rules and stock availability.

## Setup Instructions

1. **Prerequisites**: Install [Node.js and npm](https://nodejs.org/), [Expo CLI](https://docs.expo.dev/get-started/installation/).
2. **Installation**:
   ```bash
   https://github.com/vortex-m/delivery-estimator-app.git
   cd delivery-estimator-app
   npm install
   ```
3. **Run the App**:
   ```bash
   npx expo start
   ```
4. **Web Deployment** : For web, install `react-native-web` and run `npm start`.

## Assumptions

- **Stock Simulation**: 80% of products in stock.
- **Pincode Mapping**: Predefined provider mapping.
- **Delivery Rules**:
  - **Provider A**: Same-day before 5 PM.
  - **Provider B**: Same-day before 9 AM; next-day otherwise.
  - **General Partners**: 2-5 day delivery based on region.
- **Countdown Timer**: Shows cutoff time for Providers A and B.

## Key Design Decisions

1. **Component-Based UI**: Divides UI into reusable components like `ProductList`, `ProductCard`, `ProductCardDetials`, and `DeliveryEstimator`.
2. **Data-Driven Logic**: Caching and simulated data for 5000 products and 25,000 pincodes.
3. **Delivery Logic with `date-fns`**: Handles same-day/next-day rules using date functions.
4. **Responsive UI**: Designed for both mobile and web use.

## Features

- **Product Selection**: Choose a product to check stock.
- **Pincode Validation**: Validate pincodes for logistics mapping.
- **Delivery Estimation**: Calculate delivery dates based on rules.
- **Countdown Timer**: For same-day cutoff visibility.
  
## Project Structure

```
/DeliveryAppChainkinsDemo
├── /components          # UI Components
├── /screens             # Main Screens
├── App.js               # Entry point
└── README.md            # Documentation
```
## Screenshots

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.githubusercontent.com/vortex-m/delivery-estimator-app/main/assets/appUi/1First.jpg" alt="First Screen" width="400" height="800">
  <img src="https://raw.githubusercontent.com/vortex-m/delivery-estimator-app/main/assets/appUi/2Second.jpg" alt="Second Screen" width="400" height="800">
</div>

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.githubusercontent.com/vortex-m/delivery-estimator-app/main/assets/appUi/3Third.jpg" alt="Third Screen" width="400" height="800">
  <img src="https://raw.githubusercontent.com/vortex-m/delivery-estimator-app/main/assets/appUi/4Fourth.jpg" alt="Fourth Screen" width="400" height="800">
</div>
