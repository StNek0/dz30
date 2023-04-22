const App = () => { // функциональный компонент
   let [buttonText, setButtonText] = React.useState('text1') // хук, позволяющий работать с состояниями
   let [but, setBut] = React.useState('text2')
   let [ulText, setUl] = React.useState('list')
   // buttonText - переменная, которая содержит строку с начальным значением
   // setButtonText - функция, с помощью которой мы можем указать новое значение для buttonText
   let [classBtn1, setClassBtn] = React.useState('')
   let [classBtn2, setClass] = React.useState('')
   let [classBtn3, setClassb] = React.useState('')
   
   const btnClick = () => {
     setButtonText('another text1')
     setClassBtn('blue')
   }
   const mainClick = () => {
      setBut('another text2')
      setClass('green')
   }
   const ulClick = () => {
      setClassb('white')
   }
 
   return (
      <div className="app">
         <button className={classBtn1} onClick={btnClick}>{buttonText}</button>
         <div className="main">
            <ul className={classBtn3} onClick={ulClick}>{ulText}
               <li>text a</li>
               <li>text b</li>
               <li>text c</li>
            </ul>
            <button className={classBtn2} onClick={mainClick}>{but}</button>
         </div>
      </div>
   )
 }
 
 const container = document.getElementById("app")
 const root = ReactDOM.createRoot(container)
 root.render(<App />)