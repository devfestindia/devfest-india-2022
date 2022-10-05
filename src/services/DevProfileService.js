import firebase from '@/Config/firebase';
const CollectionName = "edata"

let DevProfilerServices = {
    /**
     * @description Get User Profile
     * @param userId
     * @returns Promise
     * @author Vrijraj Singh
    **/
    getUserProfileInfo: (uid) => new Promise((resolve, reject) => {
        try {
            firebase.firestore.collection(CollectionName).doc(uid).get().then(doc => {
                if (doc.exists) {
                    resolve({
                        success: true,
                        docid: doc.id,
                        data: doc.data()
                    })
                } else {
                    resolve({
                        success: false
                    })
                }
            })
        } catch (e) {
            reject(e)
        }
    }),

    /**
     * @description Update User Profile
     * @param userId
     * @param updatedData
     * @returns Promise
     * @author Vrijraj Singh
    **/
    updateUserProfileInfo: (uid, updatedData) => new Promise((resolve, reject) => {
        try {
            firebase.firestore.collection(CollectionName).doc(uid).set(updatedData)
            resolve({
                success: true
            })
        } catch (e) {
            reject(e)
        }
    }),

    /**
     * @description Create Public Profile
     * @param userId
     * @returns Promise
     * @author Vrijraj Singh
    **/
    createUserPublicProfile: (uid) => new Promise(async (resolve, reject) => {
        // console.log(uid)
        try {
            let res = firebase.firestore.collection(CollectionName).doc(uid);
            let publicUserData = await res.get();
            publicUserData = publicUserData.data();
            let projects = await res.collection("projects").get();
            let badges = await res.collection("badges").get();

            // Logic for Public Profile Obj
            delete publicUserData.email
            delete publicUserData.experience
            delete publicUserData.knowAbout
            delete publicUserData.share
            delete publicUserData.theme

            publicUserData.projects = projects.docs.map(doc => doc.data());
            publicUserData.badges = badges.docs.map(doc => doc.data());

            // console.log(publicUserData);
            // Remove previous user Data
            await firebase.firestore.collection('publicProfile').doc(uid).delete()
            // Adding new User Data
            await firebase.firestore.collection('publicProfile').doc(uid).set(publicUserData)

            resolve({
                success: true
            })
        } catch (e) {
            reject(e)
        }
    }),

    /**
     * @description Remove Public Profile
     * @param userId
     * @returns Promise
     * @author Vrijraj Singh
    **/
    removeUserPublicProfile: (uid) => new Promise(async (resolve, reject) => {
        // console.log(uid)
        try {
            // Remove user Data
            await firebase.firestore.collection('publicProfile').doc(uid).delete()
            resolve({
                success: true
            })
        } catch (e) {
            reject(e)
        }
    }),

    /**
     * @description Find Badge in Database
     * @param codeId
     * @returns Promise
     * @author Bharat Agarwal
    **/

    findBadgeExists: (badgeCode) => new Promise(async (resolve, reject) => {
        try {
            let result = await firebase.firestore.collection('badges').where('code', '==', badgeCode).limit(1).get();
            resolve({
                isExist: !result.empty,
                data: !result.empty ? {
                    codeDocId: result.docs[0].id,
                    ...result.docs[0].data()
                } : {},
                success: true
            });
        } catch (e) {
            reject(e);
        }
    }),

    /**
     * @description Check Badge for Already in Profile
     * @param userId
     * @param codeId
     * @returns Promise
     * @author Bharat Agarwal
    **/
    checkAlreadyExist: (uid, codeId) => new Promise(async (resolve, reject) => {
        try {
            const result = await firebase.firestore.collection("edata").doc(uid).collection("badges").doc(codeId).get();
            resolve({
                success: true,
                isExist: result.exists
            });
        } catch (e) {
            reject(e);
        }
    }),
    
    /**
     * @description Redeem Badges
     * @param userId
     * @param badgeId
     * @param ProfileStatus
     * @returns Promise
     * @author Bharat Agarwal
    **/
    redeemBadge: (uid, codeId, isPublic) => new Promise(async (resolve, reject) => {
        try {
            const isAlradyExist = await DevProfilerServices.checkAlreadyExist(uid, codeId);
            // console.log(isAlradyExist);
            if (isAlradyExist.isExist) {
                resolve({
                    success: true,
                    message: "Badge Already Redeemed"
                });
            }
            const result = await firebase.firestore.collection("edata").doc(uid).collection("badges").doc(codeId).set({
                time: Date.now(),
                codeId: codeId
            });

            if (isPublic)
                await DevProfilerServices.createUserPublicProfile(uid);

            resolve({
                success: true,
                message: "Badge Redeem Success",
                result
            });
        } catch (e) {
            reject(e);
        }
    }),

    /**
     * @description Get All Badges
     * @param userId
     * @returns Promise
     * @author Vrijraj Singh
    **/
    getAllUserBadges: (uid) => new Promise(async (resolve, reject) => {
        try {
            // Get All Badges
            let AllBadgesData = await firebase.firestore.collection('badges').get()
            AllBadgesData = await AllBadgesData.docs.map(doc=> {
               return {...doc.data(), ...{docid: doc.id}}
            })

            // Get Badges Code from User Profile
            let UserBadgesData = await firebase.firestore.collection(CollectionName).doc(uid).collection('badges').get()
            UserBadgesData = await UserBadgesData.docs.map(doc=> {
                return {...doc.data(), ...{docid: doc.id}}
            })

            let x = await AllBadgesData.filter(obj=> UserBadgesData.find(x=> x.docid === obj.docid))

            let xc = await x.map(res=> {
                if (res.visible){
                    return {
                        des: res.desc,
                        docid: res.docid,
                        image: res.image,
                        name: res.name,
                        visible: res.name
                    }
                }
            })

            resolve({
                success: true,
                data: xc
            })
        } catch (e) {
            reject(e);
        }
    }),

    /**
     * @description Get All Badges
     * @param userId
     * @returns Promise
     * @author Vrijraj Singh
    **/
     getAllUserPublicProfileBadges: (badges) => new Promise(async (resolve, reject) => {
        try {
            // Get All Badges
            let AllBadgesData = await firebase.firestore.collection('badges').get()
            AllBadgesData = await AllBadgesData.docs.map(doc=> {
               return {...doc.data(), ...{docid: doc.id}}
            })

            let x = await AllBadgesData.filter(obj=> badges.find(x=> x.codeId === obj.docid))
            // console.log(badges);
            let xc = await x.map(res=> {
                if (res.visible){
                    return {
                        des: res.desc,
                        docid: res.docid,
                        image: res.image,
                        name: res.name,
                        visible: res.name
                    }
                }
            })

            // console.log(xc);

            resolve({
                success: true,
                data: xc
            })
        } catch (e) {
            reject(e);
        }
    }),

    /**
     * @description Get User Public Profile
     * @param user_id
     * @returns Promise
     * @author Vrijraj Singh
    **/
     getAllUserProfileInfo: (uid) => new Promise(async (resolve, reject) => {
        try {
            let userProfileData = await firebase.firestore.collection('publicProfile').doc(uid).get()

            if(userProfileData.exists){
                resolve({
                    success: true,
                    data: {...userProfileData.data(),...{docid:userProfileData.id }}
                })
            }else{
                resolve({
                    success: false,
                    data: []
                })
            }
            
        } catch (e) {
            reject(e);
        }
    }),
}

export default DevProfilerServices;