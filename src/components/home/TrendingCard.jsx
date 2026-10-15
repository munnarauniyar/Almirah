
const TrendingCard = (props) => {
  return (
     <div className="flex flex-col h-50 w-30 shadow rounded-2xl overflow-hidden shrink-0 hover:scale-105">
        <div>
          <h1>{props.title}</h1>
        </div>
        <div>
            <img src={props.img} alt="" />
        </div>
    </div>
  )
}

export default TrendingCard