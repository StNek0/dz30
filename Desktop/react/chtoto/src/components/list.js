import './list.css'

const List = ({ img, id, firstName, secondName, gender, email }) => {

  const myStyle = {
    backgroundImage: `url(${img})`
  }

  return (
    <li>
      <div className="img" style={myStyle}></div>
      <div>
         <p>{id}</p>
         <p>{firstName}{secondName}</p>
         <p>{gender}</p>
         <p>{email}</p>
      </div>
    </li>
  )
}
export default List
