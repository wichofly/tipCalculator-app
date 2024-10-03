# Tip Calculator App 🧮💸

Welcome to the Tip and Consumption Calculator project! This app allows users to browse a menu, add items to an order, and calculate the total cost including a gratuity tip. It's built with **React** and styled using **Tailwind CSS** for a clean and responsive design.

## Features

**💡 Menu Interaction**

- Users can browse a menu of items, each displaying its name and price.
- By clicking on a menu item, it is added to the order, dynamically updating the cart with the selected items and their quantities.

**🛒 Order Management**

- The order is displayed on the right side of the interface, showing each item, its price, and quantity.
- Users can remove items from the order by clicking the "X" button next to each item.
- If no items are in the order, a message displays: "Empty order."

**💰 Tip Calculation**

- Once an order exists, users can select a tip percentage (10%, 15%, or 20%) to be applied to the subtotal.
  T- he tip amount is automatically calculated and displayed alongside the subtotal and total.

**📑 Order Summary**

- The **Order Totals** section displays a detailed summary:

  - **Subtotal:** The total cost of the items in the order.
  - **Tip:** The calculated tip based on the selected percentage.
  - **Total:** The sum of the subtotal and tip.

- Users can finalize their order by clicking the Save order button, which resets the state of the order and tip, preparing the app for a new session.

## Key Technologies and Tools

- **React and TypeScript:** Leveraged for building scalable and type-safe components.
- **Tailwind CSS:** It is employed for responsive, utility-first styling. The app has a minimalist, clean design with responsive elements that adjust to various screen sizes.
- **State Management with Hooks:** useOrder (Custom Hook): Manages the entire order process, including adding/removing items, calculating the subtotal and tip, and resetting the order when completed.
- **Netlify:** The app is deployed on Netlify, ensuring a smooth and reliable user experience.

## How to Use

1- Clone the repository:
```
git clone https://github.com/wichofly/tipCalculator-app.git
```

2- Install dependencies:
```
npm install
```

3- start the application:
```
npm run dev
```

4- Navigate to the app:
- Choose menu items and add them to the order.
- Select a tip percentage and review the total.
- Save the order when ready, and the app resets for the next session.

## Deploy in Netlify

- [Tip Calculator App](https://github-app-wheat.vercel.app/)

This project is a practical demonstration of how to build a simple but effective Tip and Consumption Calculator using React, TypeScript, and Tailwind CSS. Feel free to clone, experiment, and suggest improvements!

Enjoy exploring and don't hesitate to get in touch if you have any questions or suggestions!

