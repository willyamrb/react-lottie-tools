# React Lottie Tools

This React library helps to work with lottie animations inside React.js

## Info

This library is an abstraction of the [official lottie library](https://github.com/airbnb/lottie-web). It means that if you have some previous knowledge about that library you will have facility to use React Lottie Tools, but it doesn't mean that you need to know the official library to use this library as since the intention of this library is make things simple.

This library makes available some components to help you to use lottie animations inside React.js, since simple animations to more complex animations involving some interactions.

This library also use other libraries to help with interactions, like [Framer Motion](https://www.framer.com/motion) and [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer).

Also is important to mention that React Lottie Tools is highly typed!

## Getting started

### LottieAnimation component

This is the most simple component of this library, it just load a lottie animation without any interactions!

```jsx
import React from "react";
import { LottieAnimation } from "react-lottie-tools";
import menu from "./assets/lottie-examples/menu.json";

export default function MyComponent() {
  return (
    <LottieAnimation
      animation={menu}
      style={{ width: "60px", height: "60px" }}
    />
  );
}
```

#### LottieAnimation component props

| property        | required | type                | default                           | description                                                                                                                                           |
| :-------------- | :------- | :------------------ | :-------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| animation       | ✅       | any or string       | null                              | This property refers to animation data, it is similar to path and animationData property from offical lottie-web lib!                                 |
| autoplay        | ❌       | boolean             | true                              | Play animation automatically.                                                                                                                         |
| loop            | ❌       | boolean or number   | false                             | Play the animation in loop, can be infinity(true) or by times(2/6/8)                                                                                  |
| frames          | ❌       | [number, number]    | null                              | This property refers to animation frames, if your animation has 300 frames, you need to put [0, 300], being 0 the initial frame and 300 the last one! |
| currentTimeline | ❌       | string(from/to)     | "from"                            | This property refers to the current animation state, "from" means initial and "to" the end! You can use this property to control the animation.       |
| speed           | ❌       | number              | 1                                 | This property refers to the animation speed, higher values will play the animation faster.                                                            |
| style           | ❌       | CSSProperties       | { width: "100%", height: "100%" } | This property refers to animation container styles.                                                                                                   |
| onClick         | ❌       | MouseEventHandler   | null                              | This property can be used to trigger click events.                                                                                                    |
| justPlayInView  | ❌       | boolean             | false                             | This property can be used like a trigger to play the animation just when it is in view.                                                               |
| inViewSettings  | ❌       | IntersectionOptions | null                              | This property can be used to configure inView interaction. This configs just will be applied if property justPlayInView is true.                      |

#### LottieAnimation component with inView interaction

How does it work?
It just play the animation when it is in view.

```jsx
export default function MyComponent() {
  return (
    <LottieAnimation
      animation={menu}
      style={{ width: "60px", height: "60px" }}
      justPlayInView
    />
  );
}
```

You also can change the normal behavior of inView interaction using inViewSettings property:
this example is using threshold property, that means that this animation just will start if the animation container is 100% inside the view.

```jsx
export default function MyComponent() {
  return (
    <LottieAnimation
      animation={menu}
      style={{ width: "60px", height: "60px" }}
      justPlayInView
      inViewSettings={{ threshold: 1 }}
    />
  );
}
```

### LottieScrollSection component

Now one complex animation, the LottieScrollSection component will sincronize the current scroll with the animation frame. It means that according you scroll the page, the animation will play.

```jsx
import { LottieScrollSection } from "react-lottie-tools";
import menu from "./assets/lottie-examples/menu.json";

export default function MyComponent() {
  return (
    <LottieScrollSection height={4000} animation={menu} frames={[0, 390]} />
  );
}
```

#### LottieScrollSection component props

| property          | required | type             | default | description                                                                                                                                           |
| :---------------- | :------- | :--------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| animation         | ✅       | any or string    | null    | This property refers to animation data, it is similar to path and animationData property from offical lottie-web lib!                                 |
| height            | ✅       | number           | null    | This property refers to section height, how much higher this value, will take more time to finish the animation.                                      |
| frames            | ✅       | [number, number] | null    | This property refers to animation frames, if your animation has 300 frames, you need to put [0, 300], being 0 the initial frame and 300 the last one! |
| animationPosition | ❌       | string           | center  | This property refers to animation position inside the section. It just can be "left" / "center / "right"                                              |
| debugMode         | ❌       | boolean          | false   | This property shows the section and animation container borders, only for debugging purposes.                                                         |
