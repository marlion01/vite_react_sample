import { Helmet } from "react-helmet";

export default function Home(){
    return (
        <>
        <Helmet>
            <title>ホーム</title>
            <meta charSet="utf-8"/>
            <meta name="description" content="ホーム"/>
            <meta name="keywords" content="ホーム"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Helmet>
        <div>
            <h1>Home</h1>
        </div>
        </>
        
    );
}
