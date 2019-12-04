# Bootstrap

Created with [Create React App](https://github.com/facebook/create-react-app):

```sh
npx create-react-app converter
cd converter
yarn start
```

App is now running at [http://localhost:3000](http://localhost:3000).

# Goal

We're going to extend our Euro-to-\$BTC functionality to support more cryptocurrencies.

# Steps (Week 4)

You can start from your own App from last week, or simply `git checkout start` to have an app ready to work with.

9. Our Product Owner foresees a demand in conversion for other cryptocurrencies: extract the convertion logic into a `<Converter />` component that takes a `cryptoName` and a `exchangeRate`. We can drop the crash to zero after 5 seconds functionality.
10. Add a second converter to our app, one for Ethereum \$ETH with a `1.2` `exchangeRate`. Add as many as you want.
11. Our design team finds the lack of a title per `<Converter />` a usuabillity problem. Allow the `<Converter />` component to render some custom markup to render it at the top of the component.
12. Monetization is key. Add an alert to warn the user about our freemium conversion model after 5 convertions are performed in any of the <Converter /> components in our app.
13. We need a way to let our users become Premium Members. Implement a _Become Premium_ button that removes the just implemented alert and adds a `💎 Premium conversion` message.

# Steps

1. Add a number input with a label, "Euros".
2. Extract the input into a separate component called `<Amount />` that takes a `name` (eg. "Euros") prop.
3. (Optional) If it is not already, convert `<Amount />` into a class-based component.
4. Teach `<Amount />` input to show a red outline for negative amounts.
5. Make `<Amount />` a controlled component (ie. pass it its `value` as a prop).
6. Add a second, read-only `<Amount />` component that shows \$BTC instead of Euros; use this function to get the exchange rate:

   ```javascript
   function exchangeRate() {
     return Math.random() * 10000;
   }
   ```

7. Use `setTimeout` to make the \$BTC price crash to zero after 5 seconds of inactivity.
8. Use `React.createContext()` to provide a dark/light theme toggle.
