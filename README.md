# React Lottie Tools

This React library helps to work with lottie animations inside React.js

## Info

This library is an abstraction of the [oficial lottie library](https://github.com/airbnb/lottie-web). It means that if you have some knowladge about that library you will have facility to use React Lottie Tools, but it doesn't mean that you need to know the oficial library to use this library.

This library makes available some components to help you to use lottie animations inside React.js, since simple animations to more complex animations involving some interactions.

Also is important to mention that React Lottie Tools is highly typed!

## Usage

Example of the most simple component of this library, LottieAnimation:

```jsx
import React from "react";
import { LottieAnimation } from "react-lottie-tools";
import menu from "./assets/lottie-examples/menu.json";

export default function MyComponent() {
  return (
    <LottieAnimation
      animationData={menu}
      style={{ width: "60px", height: "60px" }}
    />
  );
}
```
