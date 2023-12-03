export type MemberProduce = {
    name: string;
    profile: string;
    Links?:Links[];
    contact?: string;
    discription?: string;
    imageURL?: URL;
}
type Links={
    URLname: string;
    URL: URL;
}