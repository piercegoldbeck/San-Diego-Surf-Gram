import { Link } from "react-router-dom"
import { Container, Typography, Button, } from "@mui/material";

//styles for home
import "./styles.css";

export default function PageNotFound(){

    return (
        <div class="error">
            <div class="error2">
             <Typography variant="h2">Sorry, page was not found</Typography>
             <Typography variant="h3">404 Error</Typography>
             <img scr="https://i.imgur.com/6p9HoFT.jpg"/>
             <br/>
         
            </div>
            <br/>
            <div class="error3">
            <Button
             variant="outlined"
             
             >
            <Link to="/">go back to website</Link></Button>
            </div>
        </div>
    );
}