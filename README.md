# Bootstrap

Created with [Create React App](https://github.com/facebook/create-react-app):

```sh
npx create-react-app converter
cd converter
yarn start
```

App is now running at [http://localhost:3000](http://localhost:3000).

# Goal

We're going to make a Euro-to-$BTC converter application.

# Steps

1. Add a number input with a label, "Euros".
2. Extract the input into a separate component called `<Amount />` that takes a `name` (eg. "Euros") prop.
3. (Optional) If it is not already, convert `<Amount />` into a class-based component.
4. Teach `<Amount />` input to show a red outline for negative amounts.
5. Make `<Amount />` a controlled component (ie. pass it its `value` as a prop).
6. Add a second, read-only `<Amount />` component that shows $BTC instead of Euros; use this function to get the exchange rate:

    ```javascript
    function exchangeRate() {
      return Math.random() * 10000;
    }
    ```

7. Use `setTimeout` to make the $BTC price crash to zero after 5 seconds of inactivity.
8. Use `React.createContext()` to provide a dark/light theme toggle.
