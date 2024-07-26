export interface Posts {
    user: string;
    postImage: string;
    likes: number;
    timestamp: string;
}

export interface suggestion {
    username: string;
    relation: string;
}

export interface suggestion {
    username: string;
    relation: string;
}

export interface SuggestionsProps {
    suggest: suggestion[];
}

export interface recommend {
    idx: number;
    username: string;
    relation: string;
}
// up is interface
// down is ingredients

export const posts: Posts[] = [
    {
        user: "redian_",
        postImage:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        likes: 54,
        timestamp: "2d",
    },
    {
        user: "johndoe",
        postImage:
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
        likes: 432,
        timestamp: "2d",
    },
    {
        user: "mariussss",
        postImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        likes: 140,
        timestamp: "2d",
    },
    {
        user: "kobee_18",
        postImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
        likes: 14,
        timestamp: "2d",
    },
];

export const suggest: suggestion[] = [
    { username: "a", relation: "New to instageam" },
    { username: "b", relation: "In your phone book" },
    { username: "c", relation: "maybe you know" },
    { username: "d", relation: "New to instagram" },
    { username: "e", relation: "New to instageam" },
];