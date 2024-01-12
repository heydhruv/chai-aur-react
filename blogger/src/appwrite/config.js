import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
                userId,
            })
        } catch (error) {
            console.error('error creating the post', error);
        }
    }

    async updatePost(slug, {title, content, status, featuredImage,}) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
            })
        } catch (error) {
            console.error('Error updating post', error)
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug,)
            return true
        } catch (error) {
            console.error('Error deleting post:', error);
    }
    }

    async getDocument(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        } catch (error) {
            console.error('unable to get document', error)
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,


            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }


    async listDocuments(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
        } catch (error) {
            console.error('unable to list documents', error)
        }
    }

    // File Upload services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.appwriteBucketid, ID.unique(), file)
        } catch (error) {
            console.error('unable to upload file', error)
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketid, fileId)
        } catch (error) {
            console.error('unable to delete file', error)
        }
    }

    async getFilePreview(fileId) {
        try {
            return await this.bucket.getFilePreview(conf.appwriteBucketid, fileId)
        } catch (error) {
            console.error('unable to get file preview', error)
        }
    }
}


const service = new Service();

export default service