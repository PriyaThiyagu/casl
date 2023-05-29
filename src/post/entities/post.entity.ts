export class Post {
    id:number;
    name:string;
    details?:string;
    userId:number;
    created_at:Date;
    updated_at:Date;
    deleted_at?:Date;
}
