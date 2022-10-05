import firebase from "@/Config/firebase";
import DevProfileService from "../services/DevProfileService";
const CollectionName = "edata";

let DevProfileProjectServices = {
  // Add New Project in user sub collection
  // @Param User_UID & Project_Data
  // Return Promise
  // @Author Vrij
  AddNewProject: (uid, projectdata, userProfileStatus) =>
    new Promise(async (resolve, reject) => {
      try {
        let doc = await firebase.firestore
          .collection(CollectionName)
          .doc(uid)
          .collection("projects")
          .add(projectdata);

        if (userProfileStatus) {
          let res = await DevProfileService.createUserPublicProfile(uid);
          if (res.success) {
            resolve({
              success: true,
              docid: doc.id,
            });
            return;
          }
        }
        resolve({
          success: true,
          docid: doc.id,
        });
      } catch (e) {
        reject(e);
      }
    }),

  // Get All Projects in user sub collection
  // @Param User_UID
  // Return Promise
  // @Author Vrij
  GetAllProjects: (uid) =>
    new Promise((resolve, reject) => {
      let projects = [];
      try {
        firebase.firestore
          .collection(CollectionName)
          .doc(uid)
          .collection("projects")
          .get()
          .then((docs) => {
            docs.forEach((doc) => {
              projects.push({ ...doc.data(), ...{ docid: doc.id } });
            });
            resolve({
              success: true,
              data: projects,
            });
          });
      } catch (e) {
        reject(e);
      }
    }),

  // Remove Projects in user sub collection
  // @Param User_UID and Project Doc
  // Return Promise
  // @Author Vrij
  RemoveProjectByDocId: (uid, docid, userProfileStatus) =>
    new Promise(async (resolve, reject) => {
      try {
        await firebase.firestore
          .collection(CollectionName)
          .doc(uid)
          .collection("projects")
          .doc(docid)
          .delete();

        if (userProfileStatus) {
          let res = await DevProfileService.createUserPublicProfile(uid);
          if (res.success) {
            resolve({
              success: true
            });
            return;
          }
        }
        resolve({
          success: true
        });
      } catch (e) {
        reject(e);
      }
    }),

  // Update Project in user sub collection
  // @Param User_UID, Project Doc id and Project Updated Data
  // Return Promise
  // @Author Vrij
  UpdateProjectByDocId: (uid, docid, updatedData, userProfileStatus) =>
    new Promise(async (resolve, reject) => {
      try {
        let doc = await firebase.firestore
          .collection(CollectionName)
          .doc(uid)
          .collection("projects")
          .doc(docid)
          .update(updatedData);

        if (userProfileStatus) {
          let res = await DevProfileService.createUserPublicProfile(uid);
          if (res.success) {
            resolve({
              success: true
            });
            return;
          }
        }
        resolve({
          success: true
        });
      } catch (e) {
        reject(e);
      }
    }),
};

export default DevProfileProjectServices;
