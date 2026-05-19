const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL), 
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID), 
    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID), 
    appwriteUsersTableID: String(import.meta.env.VITE_APPWRITE_USERS_TABLE_ID), 
    appwritePostsTableID: String(import.meta.env.VITE_APPWRITE_POSTS_TABLE_ID)
}

export default config