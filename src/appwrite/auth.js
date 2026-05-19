import { Account, Client, ID } from "appwrite"
import config from "../config/config"

class AuthService{
    client = new Client()
    account

    constructor(){
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectID)
        this.account = new Account(this.client)
    }

    async createUser(name, email, password){
        try{
            const user = await this.account.create(
                ID.unique(), 
                email, 
                password, 
                name
            )
            if(user)    this.loginUser(email, password) 
        }
        catch(error){
            throw error
        }
    }

    async loginUser(email, password){
        return this.account.createEmailPasswordSession(email, password)
    }

    async logoutUser(){
        return this.account.deleteSession('current')
    }

    async getCurrentUser(){
        return this.account.get()
    }
}

const auth = new AuthService()
export default auth