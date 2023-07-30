<h1 align="center">
  ImHere
</h1>

<h4 align="center">
    <p align="center">
      <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-how-to-run-the-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">License</a>
  </p>
</h4>

<!-- <h1 align="center">
    <img width="200" style="border-radius: 10px" height="auto" alt="Screenshot" title="Screenshot" src="docs/images/screenshot_1.svg" />

  <div style="display: flex; flex-direction: row; align: center;" align="center">
    <img width="200" style="border-radius: 10px" height="auto" alt="Screenshot" title="Level Up" src="docs/images/screenshot_2.svg" />
    <img width="200" style="border-radius: 10px" height="auto" alt="Screenshot" title="Screenshot" src="docs/images/screenshot_3.svg" />
  <div>
</h1> -->

## 🔖 About

IamHere is an application developed in React Native using the Expo library. It has been designed to provide a simple and intuitive solution to list the attendees of an event. The app allows users to add participants, view the full list, and remove participants.

The application provides a text input field where users can enter the name of the participant to be added to the list. By tapping the "+" button, the participant is included in the list displayed on the main screen.

Participants are displayed in a FlatList, providing an organized and efficient view. Each list item displays the name of the added participant. The list is updated in real-time as users add or remove participants.

Users can remove participants from the list by tapping the removal button associated with each item in the FlatList. This allows for flexible management of the list, enabling users to eliminate participants who are no longer relevant.

## 🚀 Technologies

- [ReactNative](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/)

## 🏁 How to run the project

```sh
# Clone the repository
git clone https://github.com/MiguelMachado-dev/imhere.git
cd imhere

# Install the dependencies
npm install

# Start the Android application
npm run android

# Start the iOS application
npm run ios
```

## 📝 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.