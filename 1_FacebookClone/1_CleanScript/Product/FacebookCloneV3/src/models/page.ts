export interface Page {
    uid?: string,
    pageName: string,
    description: string,
    OwnerEmail: string,
    photoURL: string,
    coverPhotoURL: string,
    following?: Array<Object>,
    followers?: Array<Object>,
    ownerName: String,
    ownerId: String,
    posts?: Array<object>,
    likes?: Array<Object>
    website?: String

}
