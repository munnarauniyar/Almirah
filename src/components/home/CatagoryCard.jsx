
const CatagoryCard = (props) => {
  return (
    <div className="flex flex-col h-50 w-30 shadow rounded-2xl overflow-hidden">
        <div className="h-2/3 w-30  overflow-hidden border-b border-gray-100" >
          <img className="h-full w-full object-cover" src={props.img} alt="" />
        </div>
        <div className="h-1/3 flex gap-2 items-center flex-col justify-center">
          <h1 className="font-bold">{props.title}</h1>
          <p>{props.items} Items</p>
        </div>

    </div>
  )
}

export default CatagoryCard