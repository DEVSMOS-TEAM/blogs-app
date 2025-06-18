import { LucideIcon } from 'lucide-react';

export interface NavItemType {
    label: string;
    path: string;
    sub_items?: NavItemType[];
    isJustAdded?: boolean;
    icon?: LucideIcon;
}

// please ignore above definitions

type ObjectId = { "$oid": string }
type Date = { "$date": string }


// User Collection
interface User {
    _id: ObjectId, // $oid in mongo
    name: string,
    email: string,
    auth: {
        type: string, // like local or oauth
        password: string, // hashed password
        providers: string[], // google , facebook .. or []---empty
    }
    created_at: Date, // Date
    friends: ObjectId[], // we can use two options one embbed, reference using $oid
}

// post collection

interface Post {
    _id: ObjectId,
    author_id: ObjectId, // user id
    post_detail: PostDetails | PodcastDetails,
    tags?: string[], // tags or category like health, Technology, or mores
    engagement: {
        reactions?: number, // query total reaction from Reaction Collection
        comment?: Comment[], // total views 
        share?: number, // total shares
        views?: number // total views
    },
    content_type: ContentTypes, // blog or podcast 
    created_at: Date,
    updated_at: Date,
}

declare enum ContentTypes {
    Podcast = "podcast",
    Blog = "blog"
}

interface PostDetails {
    _id: ObjectId,
    title: string,
    content: string, // content store in md (markdown) format as string
    read_time: number,
    cover_image_url?: string,
    excerpt: string, // short desc
    table_of_content: string[]
}


interface PodcastDetails {
    _id: ObjectId,
    title: string,
    duration: number, // in seconds or minutes
    audio_id: string, // we can change to video_url data store in google drives
    cover_image_url?: string,
    excerpt: string, // short desc
    transcription?: string,
    table_of_content: string[]
}

// reaction collections

declare enum EngagedOn {
    Post = "post",
    Comment = "comment"
}

interface Reactions {
    _id: ObjectId,
    _post_id: ObjectId,
    target_on: EngagedOn // comment or post 
    created_at: Date,
    updated_at: Date,
}

// comment collection
interface Comment {
    _id: ObjectId,
    _user: User,
    _post_id: ObjectId, // Post _id
    _parent_comment?: ObjectId,
    content: string,
    engagement: {
        reactions: number, // query from Reaction collection to count total reactions
        replies: ObjectId[] // user replies
    }
}


// user has many posts 
// one post engaged by many users { like, share , comment, views }
// 