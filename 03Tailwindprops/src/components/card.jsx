   
    // react snippet extension download kar ke rfc likha toh ye sab apne app aa jayega
    //card ka C capital hon achiyea
    import React from "react";
    function Card({username,btnText="clickme"}) { //btntext me default value dal di hai agar user ne koi value nahi di hai toh
        // console.log('props',props);
        // console.log(username)
      return (
        
        <div>
            <div className="relative h-[400px] w-[300px] rounded-md ">
                <img
                    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-md object-cover"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
              </div>
              <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">
                      {username}
                  </h1>
                  <p className="mt-2 text-sm text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                        debitis?
                  </p>
                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                        {btnText || "click me"}
                  </button>
              </div>
            </div>
            
        </div>
    


//  dala gaya hai btntext me taki jab koi user btnText pass na kare toh ye print ho jaye
)}
export default Card
    
  