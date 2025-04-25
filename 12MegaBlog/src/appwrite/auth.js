import conf from "../conf/conf";  //
import {Client , Account ,ID} from "appwrite"

export class AuthService{
    client =  new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.account = new Account(this.client)
    }  
    async createAccount({email, password ,name}){   //promise ka use karao ya phir async await ka async is used because jab tak account nahi bana jata tab tak hum aage nahi badhenge
    //ek object se values pass hongi aur usko arguments me hum ne destructure kar liya hai
    //account creation cn fail here so we use try catch
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)   //first field must be uniqueID
            if(userAccount){
                return this.login({email,password})
            }else{

            }
        } catch (error) {
            throw error;
        }
    }
    async login({email, password}){
        try {
             return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            await this.account.get();
        }catch(error){
            console.log("Appwrite service ::getCurrentUser:: error",error)
        }

        return null;
    }

    async logout(){

        try {
            await this.account.deleteSessions('current')
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }
}

const authService =new AuthService();   //object bana liy authService type ka

// export default AuthService  //agar isko export karnege toh user ko object banana hoga isliye upar object bana diya hai aur usko export karege takoi dot laga ke mthods ka acces le sake

export default authService