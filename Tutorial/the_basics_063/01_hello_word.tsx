import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    Button,
} from 'react-native';

// const YourApp = () => {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Try editing me! 🎉</Text>
//     </View>
//   );
// };

// export default YourApp;
//========================

// const HelloWorldApp = () => {
//     return(
//         <View
//             style={{
//                 flex: 1,
//                 justifyContent: 'center',
//                 alignItems: 'center'
//             }}
//         >
//             <Text>Hello, world!</Text>
//         </View>
//     );
// }

// export default HelloWorldApp;
//========================

// const getFullName = (firstName, secondName, thirdName) => {
//     return "\n\n\n\n" + firstName + " " + secondName + " " + thirdName;
// }

// const Cat = () => {
//     const name = "Maru";
//     return(
//         <Text>Hello, I am {getFullName(name, name, name)}</Text>
//     );
// }

// export default Cat;
//========================

// const Cat = () => {
//   return (
//     <View
//         style={{
//             paddingTop: 40
//         }}
//     >
//       <Text>Hello, I am ...</Text>
//       <TextInput
//         style={{
//           height: 40,
//           color: 'gray',
//           borderWidth: 1,
//         }}
//         defaultValue="Name me!"
//       />
//     </View>
//   );
// };
// export default Cat;
//========================

// const Cat = () => {
//     return(
//         <View>
//             <Text>Hello Cat!</Text>
//         </View>
//     );
// }

// const Cafe = () => {
//     return(
//         <View>
//             <Text>Welcome!</Text>
//             <Cat></Cat>
//             <Cat></Cat>
//             <Cat></Cat>
//         </View>
//     );
// }

// export default Cafe;
//========================

// const Cat = (props) => {
//   return <Text>Hello, I am {props.name}!</Text>;
// };

// const Cafe = () => {
//   return (
//     <View>
//       <Text>Welcome</Text>
//       <Cat name="Long" />
//       <Cat name="Nam" />
//       <Cat name="John" />
//     </View>
//   );
// };

// export default Cafe;
//========================

// const CatApp = () => {
//     return(
//         <View>
//             <Image
//                 source={{url:"https://reactnative.dev/docs/assets/p_cat1.png"}}
//                 style={{height:200, width: 200}}
//             ></Image>
//             <Text>Hello, I am your cat!</Text>
//         </View>
//     );
// }

// export default CatApp;
//========================

const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true);
    return(
        <View>
            <Text>I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}</Text>
            <Button
                title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
                // disabled={!isHungry}
                onPress={() => {
                    setIsHungry(!isHungry);
                }}
            />
        </View>
    );
}

const Cafe = () => {
    return(
        <View style={{paddingTop: 60}}>
            <Cat name='Long'/>
            <Cat name='Hoang'/>
        </View>
    );
}

export default Cafe;