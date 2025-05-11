import conf from "../conf/conf";
import { Client ,ID, Databases,Storage,Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){//constructor banayenge because hum chate hai variable ke andar values tabhi aayengi jab constructor call hoga
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, usedId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwritecollectionId,
                slug,  //slug ko documentid man liya
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    usedId
                }
            )
        } catch (error) {   //ye error appwriteservice ke create post aa rahi hia
            
        }
    }

    async updatePost(slug,{title,content,featuredImage,status,userId}){   //slug ko hata diya taki uniqueId mil jaye slug se
        try{
             return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
             )
        }catch(error){
            console.log("Appwrite service ::getCurrentUser:: error",error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwritecollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service ::getCurrentUser:: error",error)
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwritecollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service ::getCurrentUser:: error",error)
        }
    }

    async  getposts(queries = [Query.equal("status",active)]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwritecollectionId,
                // [
                //     Query.equal("status",active)
                // ] this has been already written above so just use queries
                queries
            )
        }catch(error){
            console.log("Appwrite service ::getCurrentUser:: error",error)
            return false
        }
    }

    //file upload services

    async UploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
            return true;
        }catch(error){
            console.log("Appwrite service ::getCurrentUser:: error",error)
            return false;
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("Appwrite service ::getCurrentUser:: error",error)
            return true;
        }
    }

    getFilePreview(fileId){  //async await isnot used here because it is already fast
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service()

export default service
