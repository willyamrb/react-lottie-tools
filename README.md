# React Lottie Tools

This React library helps to work with lottie animations inside React.js

## Info

This library is an abstraction of the [official lottie library](https://github.com/airbnb/lottie-web). It means that if you have some previous knowledge about that library you will have facility to use React Lottie Tools, but it doesn't mean that you need to know the official library to use this library as since the intention of this library is make things simple.

This library makes available some components to help you to use lottie animations inside React.js, since simple animations to more complex animations involving some interactions.

This library also use other libraries to help with interactions, like [Framer Motion](https://www.framer.com/motion) and [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer).

Also is important to mention that React Lottie Tools is highly typed!

## Install

```shell
npm install react-lottie-tools
or
yarn add react-lottie-tools
```

Required packages
```shell
npm install lottie-web react-intersection-observer framer-motion
or
yarn add lottie-web react-intersection-observer framer-motion
```

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

### Working with scroll interactions

Inside React Lottie Tools there are 2 components to work with scroll interactions, they are LottieScrollSection and LottieScrollAnimation component. At first looking they look the same, but they have your differences, LottieScrollSection should be used if you just want an entire animation inside a section without any other content, just animation, also it helps to let the HTML more semantic helping in SEO scores. On the other hand LottieScrollAnimation can be used inside others elements like div, sections and so on to build your own section with other contents inside it!

### LottieScrollSection component

The LottieScrollSection component will sincronize the current scroll with the animation frame. It means that according you scroll the page, the animation will play.

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

| property          | required | type             | default | description                                                                                                                                                                                                    |
| :---------------- | :------- | :--------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| animation         | ✅       | any or string    | null    | This property refers to animation data, it is similar to path and animationData property from offical lottie-web lib!                                                                                          |
| height            | ✅       | number           | null    | This property refers to section height, how much higher this value, will take more time to finish the animation.                                                                                               |
| frames            | ✅       | [number, number] | null    | This property refers to animation frames, if your animation has 300 frames, you need to put [0, 300], being 0 the initial frame and 300 the last one!                                                          |
| animationPosition | ❌       | string           | center  | This property refers to animation position inside the section. It just can be "left" / "center / "right"                                                                                                       |
| debugMode         | ❌       | boolean          | false   | This property shows the section and animation container borders, only for debugging purposes.                                                                                                                  |
| startMargin       | ❌       | number           | 0       | This property refers to increase the trigger point, the default behavior is that the animation just will play when the section take all the screen view, but you can increase that value to start before that. |
| style             | ❌       | CSSProperties    | null    | This property refers to animation container styles.                                                                                                                                                            |
| className         | ❌       | string           | null    | This property refers to animation container className.                                                                                                                                                         |

### LottieScrollAnimation component

The LottieScrollAnimation component also will sincronize the current scroll with the animation frame.

```jsx
import { LottieScrollAnimation } from "react-lottie-tools";
import menu from "./assets/lottie-examples/menu.json";

export default function MyComponent() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <LottieScrollAnimation
          height={4000}
          animation={menu}
          frames={[0, 390]}
        />
      </div>
      <div style={{ flex: 1 }}>
        <h1>This is my custom content</h1>
      </div>
    </div>
  );
}
```

#### LottieScrollAnimation component props

| property                 | required | type             | default | description                                                                                                                                                  |
| :----------------------- | :------- | :--------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| animation                | ✅       | any or string    | null    | This property refers to animation data, it is similar to path and animationData property from offical lottie-web lib!                                        |
| height                   | ✅       | number           | null    | This property refers to section height, how much higher this value, will take more time to finish the animation.                                             |
| frames                   | ✅       | [number, number] | null    | This property refers to animation frames, if your animation has 300 frames, you need to put [0, 300], being 0 the initial frame and 300 the last one!        |
| verticalAnimationAlign   | ❌       | string           | center  | This property refers to vertical animation align inside parent container, it is similar to align-items from CSS. It can be "center" / "top" / "bottom".      |
| horizontalAnimationAlign | ❌       | string           | center  | This property refers to horizontal animation align inside parent container, it is similar to justify-content from CSS. It can be "left" / "center" / "right" |
| debugMode                | ❌       | boolean          | false   | This property shows the section and animation container borders, only for debugging purposes.                                                                |
| style                    | ❌       | CSSProperties    | null    | This property refers to section container styles(not the animation container).                                                                               |
| className                | ❌       | string           | null    | This property refers to section container className(not the animation container).                                                                            |

## Using with Next.js

Some components can't be rendered in server side, like LottieScrollSection, the reason of that is because this component uses the global window object to make some calcs and window is not defined in server side.

To solve this problem you can use [dynamic import](https://nextjs.org/docs/advanced-features/dynamic-import) of Next.js to ensure that this component just will be rendered in browsers.

#### LottieScrollSection with next.js dynamic import

```jsx
import { LottieScrollSection } from "react-lottie-tools";
import menu from "./assets/lottie-examples/menu.json";

import dynamic from "next/dynamic";
const LottieScrollSection = dynamic(
  import("react-lottie-tools").then((data) => data.LottieScrollSection),
  { ssr: false } // ssr is important to be false
);

export default function MyComponent() {
  return (
    <LottieScrollSection height={4000} animation={menu} frames={[0, 390]} />
  );
}
```

Using typescript

```jsx
import {
  LottieScrollSection,
  LottieScrollSectionProps,
} from "react-lottie-tools";
import menu from "./assets/lottie-examples/menu.json";

import dynamic from "next/dynamic";
const LottieScrollSection =
  dynamic <
  LottieScrollSectionProps >
  (import("react-lottie-tools").then((data) => data.LottieScrollSection),
  { ssr: false }); // ssr is important to be false

const MyComponent: React.FC = () => {
  return (
    <LottieScrollSection height={4000} animation={menu} frames={[0, 390]} />
  );
};

export default MyComponent;
```
