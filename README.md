
<p align="center">
 

  <h3 align="center">Friender</h3>




<!-- ABOUT THE PROJECT -->
## About The Project
  A simple React/Redux application simulate a friend-gettting application.  Instead of allowing the user to fill in the data, it uses 'pre-built' friends from RandomMe ([https://randomuser.me]). Redux and Redux-Thunk are used for state management, SASS for styling, Parcel for bundling, Jest for testing, and friend data is persisted to LocalStorage.

### Built With

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
* [Sass](https://sass-lang.com/)
* [Axios](https://github.com/axios/axios)
* [Parcel](https://parceljs.org/)
* [Bulma](https://bulma.io)
* [Babel](https://babeljs.io/)
* [Jest](https://jestjs.io/)



<!-- GETTING STARTED -->
## Prerequisites

This application was built and tested with Node version 11.  If you do not have that installed you may use Node Version Manager ([https://github.com/nvm-sh/nvm]), or Docker ([https://www.docker.com/]) or simply install the correct version ([https://nodejs.org/en/])


### Installation


1. Clone the repo
```sh
git clone https://github.com/robert-barcelona/simple-react-redux-thunk-jest.git
```

2. Install NPM packages
```sh
cd simple-react-redux-thunk-jest
yarn
```

3. Start the development server
```sh
yarn dev
```

4. The application will be served on localhost:1234



## How it works

<p>The application offers the user the opportunity to click a button to "get a new friend".  The application then makes a call to Random Me for "pre-built" friend data, which it offers to the user.  The user may accept or cancel this new friend.  If the user accepts, the new friend is added to the Redux state management system, as well as saved to LocalStorage in the user's browser.  The user may subsequently delete the friend, and also sort the friends by their last names.</p>


## Environment

The application runs under Node v11.  


## Testing


<p>Jest was used for testing.  At present there is only testing of the underlying logic that connects the application either to the Random Me API or to LocalStorage.  Mocks were used for both 'axios' and LocalStorage to make the testing more robust.
</p>

```sh
yarn test
```

## License

Distributed under the MIT License.




