import ButtonComponent from "../buttons/button-component"
import TextComponent from "../text/text"
import data from "../jsx/apidata.js"
import Image from "../image/image.js"
const Profile=()=>{
const obj={
    name:"shreya",
    image :"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    color:"red"
}
const obj2={
    name:"shreya2",
    image :"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    color:"blue"
}
return(
    <div>


{
    data.map((eachobj)=>{
        return(
            <div>
        <TextComponent text={eachobj.title} textColor={"black"}/>
        {/* <TextComponent text={obj2.name} textColor={obj2.color}/> */}
        <ButtonComponent title={eachobj.price} width={100} bgColor={"white"}/>
        <Image url={eachobj.image}/>
            </div>
        )
        })
    }

</div>
)
}
export default Profile