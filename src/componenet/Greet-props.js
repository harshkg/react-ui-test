import React from "react";

// const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }

// Also can be used as
// const Greet = ({name, heroName,children}) => {
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//             {children}
//         </div>
//     )
// }

// Also can be used as
const Greet = (props) => {
    const {name, heroName,children} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {children}
        </div>
    )
}
export default Greet