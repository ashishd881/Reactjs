const conf = {
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritecollectionId:String(import.meta.env.VITE_APPWRITE_COLLECCTION_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_Bucket_ID)

}
//this is a productuion  level work
export default conf