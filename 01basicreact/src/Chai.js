
// function chai(){
//     return (
//         <h1>chai in react</h1>       //ye chai in react print nahi ho rha hai because we have not used capital letters again
//     )
// }
// export default chai



function Chai(){                     //capital letters me kar diya
    return (
        <h1>chai in react</h1>       
    )
}
export default Chai


///ye chai component hai toh inka naam ka phela letter hamaesh capital hona chaiye
//aur chai file ka name bhi capital me rakho this is a best practise  
//file ko rename karne ke baad  naame bhi import karnege ko sabkuch sahi hon ke baad bhi error aayegi toh project ko reload kar lo >re likh ke upar jaha reactjs likha hai
//hum is file ko bhi chai.jsx likh skate hai because isme html ka code return ho rha hai ja code retutn hota haoi wahai extension jsx likhte hai vite ke andar jsx hi likhte hai aur capital letters me likhte hai

//iski index.js file me jo react dom hai wo parallel dom banata ahi browser ke dom ke jo ki page updation ke bare me batata hai