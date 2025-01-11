
import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from '../config/config.js';

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ address, mobile, state, city, userid }) {

        try {
            return await this.databases.createDocument(
                'userData',
                'scamData',
                ID.unique(),
                {
                    address,      // Save address
                    mobile,       // Save mobile number
                    userid,// Associate with the logged-in user's ID
                    address,
                    mobile,
                    state,
                    city
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }
    async updatePost({ address, mobile, userid, state, city }) {

        try {
            // Fetch the document using the `userid` first
            const document = await this.databases.listDocuments(
                'userData',
                'scamData',
                [
                    Query.equal("userid", userid) // Adjust based on your attribute name for `userid`
                ]
            );

            if (document.total === 0) {
                throw new Error("Document not found");
            }

            // Assuming you want to update the first match
            const documentId = document.documents[0].$id;

            // Now update the document
            return await this.databases.updateDocument(
                'userData',
                'scamData',
                documentId,
                {
                    address,
                    mobile,
                    state,
                    city
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }



    async getUserDetails(userid) {
        try {
            // Fetch the document using the `userid`
            const result = await this.databases.listDocuments(
                'userData',
                'scamData',
                [
                    Query.equal("userid", userid) // Match the `userid` field
                ]
            );

            if (result.total === 0) {
                throw new Error("No document found with the given userid");
            }

            // Assuming the first matching document is the desired one
            const document = result.documents[0];
            return {
                address: document.address,
                mobile: document.mobile,
                city: document.city,
                state: document.state
            };
        } catch (error) {
            console.log("Appwrite service :: getUserDetails :: error", error);
        }
    }





}


const service = new Service()
export default service