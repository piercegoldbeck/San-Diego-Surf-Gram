import { Link } from "react-router-dom"

export default function PageNotFound(){

    return (
        <div>
            <h1>Sorry, page was not found</h1>
            <h1>404 Error</h1>
            <Link to="/">go back to website</Link>
        </div>
    );
}