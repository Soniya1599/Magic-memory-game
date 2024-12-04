# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<!-- Steps to create this game -->

<!-- 

1. The very first step is to create a react app via npx create-reat-app magic-memory command.

2. Now we will create a functionality in this app which will perform three things :-
     1. Create dulicate of the cards (images array) so that we will have twelve cards.
     2. We will randomize the order of the cards in the array using sort method.
    3. And finally it will apply random id into each 12 cards and we will use that key for React when we are outputting them later.

3. Now we need to update the state of cards using setCards.

4. Lets create one more state which is for Turns and set it to 0. 
(And we are doing this because every time we click new game we will start a new game from initial where the cards will be shuffled and also the turns will be zero.)

5. Next we will create a card grid to represent cards.

6. Convert all the card template into its own component bcz that will make it easier to apply more logic into this project :-
    1. Create a component folder and inside that folder create a component named SingleCard.js.
    2. Now move the card template into its own component.

7. Now we have to store the card choices which user will choose:-
    1.We will create a bit of states to store the card choices user will make.
    2.And then we will set the states to null and according to user choices we will update it and set the new card value to states.
    3. Next we need to add click event to each card, so lets head to the SigleCard component to do that.
    4. Now the click event should be at the back of the card, so we will put onClick event and make a function handleClick into SingleCard component.
    5. Now we just wanted to update the states of choices of cards. But we can't set it from the singleCard component bcz states are in app.js and handleClick function is in SingleCard component.
    6. So handle the above situation we will create another function into App.js to handle a choice there. Then we will pass handleChoiuce function into SingleCard component as a prop.
    7. Now we will accept the handleChoice as prop and call this inside handleClick function passing card as value to set.
    8. Now how we will get to know if the choice we made is choice one or two ? -> for that we have to write the logic inside the handle choice.
    9. A very simple logic to solve that above issue is we will check if we has choice one or not if we have choice one then it is choice two otherwise it will be choice one.

8. And now when the choices are made and stored we will match them together:-
    1. Now we will have to check if we have made both the choices or not.
    2. If we have made both 2 choices then we will check if the cards match or not if they match we will perform next logic later, for now just log it to console.
    3. To compare them if they match or not, we will use src property.

    Note :- If you perform the above logic to match the cards together inside the handle choice method directly then it won't work, because that check will fire before the state updates ocatate or will actually happens so lets make this logic works when we have both the choices made and for that we will use useEffect hook.

9. But if they do not match fire a function to set choices to null again so that we can make two new choices again. 

10. And we will set Turns to + 1 all the time when we will try to match the chocies.

11. Now we will have to do something when both cards matched :-
    1. Firstly we will add a matched property to our all the cards so that we can use it later to flip or do not flip the cards.
    2. Next we will check if the cards src and anyone of the choice choiceOne or choiceTwo match then we will changed the "matched" property value to true and setCards.

12. Now we will apply the logic of flipping cards:-
    1. First we will add flipped property to our each card via applying it on singleCard component.
    2.Now there are three scenerio where the flipped will be true :- 1.when the first card will be choice one, 2. when the card will be choice two and third will be if the card matched so that it stay flipped.
    3.Now we will get flipped property as prop in SingleCard component and then we will apply flipped class to the image container of front and back of card.
    4. Apply needed css to animate and flip card via using position and transform property of css.
    5. We are resetting the choices right away thats why card flipped back directly if they doesn't match, so we will apply setTimeOut to resetTurn function into else part to delay it a little bit.
    6.Apply some more css to animate the front and back both with some delay and ease.

13. We have to disable the clicking cards for a time we have selected two cards already because right now we can just click as much as cards we want all together and this is not good so we will disbale all the other cards untill the two cards flipped back:-
    1. We will pass a disabled prop to our SingleCard component.
    2. Then to set the value of disabled prop, we will create a state called disabled using useState.
    3. We will setDisabled to true where we are making coparision of cards into useEffect after getting both the cards. If we done this before the both cards are selected then it will be disabled fro initial and no cards will be clicked.
    4. we will setDisabled back to false into resetTurn when we are reseting the choices.
    5. Pass the disabled value into disabled prop to SingleCard and then check it inside SingleCard that if its true then we won't allow the handleClick event to happen and if its not true then we will let it fire.

14. Show the number of turns and then we will reset the choices when we start a new game when the cards are shuffled. 
Because at the minute the user can select one card and then hit new game button to start new game but that card will technically be choice one which user has clicked before.
    1. Below the card-grid into the template we will output number of turns.
    2. Next initially we will start the game automatically. To do this we will again use useEffect hook.
    3. Finally we want to reset choiceOne and choiceTwo when we restart the game, we will setChoiceOne and setChoiceTwo to null into shuffleCards function.

 -->