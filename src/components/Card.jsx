
const Card = ({name,title}) => {
  return (
    <div className="flex flex-col h-72 w-60 gap-2 p-2 rounded-md bg-white">
        <img src="https://scontent-lga3-1.xx.fbcdn.net/o1/v/t0/f1/m258/upload_img_683780_09_09_2024_07_34_08_497418_6799251227241172891.jpeg?_nc_ht=scontent-lga3-1.xx.fbcdn.net&_nc_cat=111&ccb=9-4&oh=00_AYCNZJe-GROuoK3epDcVb4a2Y_NzAg21BvhPU-_l8IDA-A&oe=66E0EF19&_nc_sid=5b3566" alt="placeholder" className="h-52 w-56 rounded"/>
        <h2 className="text-base font-medium">{name}</h2>
        <p className="text-sm">{title}</p>
        
    </div>
  )
}

export default Card