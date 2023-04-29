import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';


const App = (props) => {
 
   const [text1, setText1] = React.useState(props.text1)
   const [text2, setText2] = React.useState(props.text2)
   const [text3, setText3] = React.useState(props.text3)
   const [classUl, setClass] = React.useState(props.class)
   const [a1, setA1] = React.useState(props.a1)
   const [a2, setA2] = React.useState(props.a2)
   const [a3, setA3] = React.useState(props.a3)
   const [img1, setImg1] = React.useState(props.img1)
   const [img2, setImg2] = React.useState(props.img2)
   const [img3, setImg3] = React.useState(props.img3)

   return (
     // className, onClick являются свойствами
   <div className="app">
      <div className={classUl}>
         <a className={a1}>{text1}</a>
         <a className={a2}>{text2}</a>
         <a className={a3}>{text3}</a>
      </div>
      <div className="block">
         <img className={img1}></img>
         <img className={img2}></img>
         <img className={img3}></img>
      </div >
   </div >
   )
}
   /* <button className={classList} onClick={onButtonClick}>
      {buttonText}
   </button> */
const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App 
   class="ul" 
   text1="text?" text2="-text-" text3="text!"
   a1="a1" a2="a2" a3="a3"
   img1="img1" img2="img2" img3="img3"
/>)
