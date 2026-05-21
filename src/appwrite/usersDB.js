import { Client, ID, TablesDB } from "appwrite"
import config from "../config/config"

class Users{
    client = new Client()
    tablesDB

    constructor(){
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectID)
        this.tablesDB = new TablesDB(this.client)
    }

    async addUser(userId, username, email, phone){
        return this.tablesDB.createRow(
            config.appwriteDatabaseID, 
            config.appwriteUsersTableID, 
            userId, 
            {
                username, 
                email, 
                phone: Number(phone), 
                "followers": [], 
                "following": [] 
            }
        )
    }

    async getUser(userId){
        return this.tablesDB.getRow(
            config.appwriteDatabaseID, 
            config.appwriteUsersTableID, 
            userId
        )
    }

    async followUser(currentUserId, userToFollowId){
        try{
            const currentUser = await this.getUser(currentUserId)

            let newFollowing = currentUser.following
            newFollowing.push(userToFollowId)

            await this.tablesDB.updateRow(
                config.appwriteDatabaseID, 
                config.appwriteUsersTableID, 
                currentUserId, 
                {
                    "following": newFollowing
                }
            )
        }
        catch(error){
            throw error
        }
    }

    async unfollowUser(currentUserId, userToUnfollowId){
        try{
            const currentUser = await this.getUser(currentUserId)

            let newFollowing = currentUser.following
            newFollowing = newFollowing.filter((followingUserId) => followingUserId !== userToUnfollowId)

            await this.tablesDB.updateRow(
                config.appwriteDatabaseID, 
                config.appwriteUsersTableID, 
                currentUserId, 
                {
                    "following": newFollowing
                }
            )
        }
        catch(error){
            throw error
        }
    }
}

const usersDB = new Users()
export default usersDB