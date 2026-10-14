import CatagoryCard from "./CatagoryCard"
import { Store } from "lucide-react"

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
            title: "Men",
            img: "https://i.pinimg.com/736x/74/43/1d/74431d299abfd9113113120015018562.jpg",
            items: 7
        }, 
        {
            id: 7,
            title: "Women",
            img: "https://i.pinimg.com/736x/2d/a9/9a/2da99aa01bb969a5c8c20b54e8470748.jpg",
            items: 21
        },
         {
            id: 8,
            title: "Beauty",
            img: "https://i.pinimg.com/736x/68/fc/01/68fc011259b211b88692d634adf1551f.jpg",
            items: 10
        },
         {
            id: 9,
            title: "Gaming",
            img: "https://i.pinimg.com/736x/44/ba/07/44ba070e3ce7f45a73634342bf57191f.jpg",
            items: 30
        },
         {
            id: 10,
            title: "Kids",
            img: "https://i.pinimg.com/736x/32/79/c4/3279c45ba3c758f604b9f050c9dc88c1.jpg",
            items: 12
        },
         {
            id: 11,
            title: "Home",
            img: "https://i.pinimg.com/736x/28/8a/74/288a74ca157de712c14b0ed6ad22e56b.jpg",
            items: 10
        },
         {
            id: 12,
            title: "Sports",
            img: "https://i.pinimg.com/736x/80/ca/f1/80caf18b5b98cea04b8743e0da27de6c.jpg",
            items: 20
        },
        {
            id: 7,
            title: "Food",
            img: "https://i.pinimg.com/1200x/fe/65/fd/fe65fd37f7e8627b8d1f7951e7f3c8d1.jpg",
            items: 5
        }

    ]

  return (
    <div className="px-5 md:px-10 py-5 ">
        <div>
        <h1 className="flex gap-1 md:gap-2 md:pb-2 pb-1 font-bold text-[10px] md:text-xs text-[#5B35D5]"><Store size={13} md:size={16} />Shop by Category</h1>
         <p className="font-bold text-xl md:text-3xl">Browse by Category</p>
        </div>
        
       <div className="w-full flex justify-start gap-3 md:gap-10 overflow-x-auto md:py-3 py-2 scroll-smooth scrollbar-none">

        


        {data.map((props)=>{
            return <CatagoryCard title={props.title} img={props.img} items={props.items}  />
        })}
        
        
    </div>
    </div>
 
  )
}

export default Catagorysection