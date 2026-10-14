import CatagoryCard from "./CatagoryCard"

const Catagorysection = () => {

    const data = [

        {
            id: 1,
            title: "Smart Phones",
            img: "https://i.pinimg.com/736x/24/22/32/24223258deb2711a6cfb6ffe2ba3b5e9.jpg",
            items: 34
        },
        {
            id: 2,
            title: "Laptops",
            img: "https://i.pinimg.com/1200x/bd/16/0c/bd160c8a571eecfa20b58612d424d06c.jpg",
            items: 24
        },
        {
            id: 3,
            title: "Headphones",
            img: "https://i.pinimg.com/736x/b5/3b/fd/b53bfd5edf93be1173b19b1d7b452549.jpg",
            items: 20
        },
        {
            id: 4,
            title: "Shoes",
            img: "https://i.pinimg.com/736x/58/1f/ba/581fba6a65ea6f3ddc0d876c151443b5.jpg",
            items: 31
        },
        {
            id: 5,
            title: "Smart Watches",
            img: "https://i.pinimg.com/736x/2d/c0/9d/2dc09d8599573d971ced60ebef6e59d0.jpg",
            items: 8
        },
        {
            id: 6,
            title: "Jeans",
            img: "https://i.pinimg.com/736x/74/43/1d/74431d299abfd9113113120015018562.jpg",
            items: 7
        },
        {
            id: 7,
            title: "Food",
            img: "https://i.pinimg.com/1200x/fe/65/fd/fe65fd37f7e8627b8d1f7951e7f3c8d1.jpg",
            items: 5
        }

    ]

  return (
    <div className="w-full flex items-center justify-start gap-3 md:gap-10 overflow-x-auto py-5 px-5 md:px-10">

        {data.map((props)=>{
            return <CatagoryCard title={props.title} img={props.img} items={props.items}  />
        })}
        
        
    </div>
  )
}

export default Catagorysection