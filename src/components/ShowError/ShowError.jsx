import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Card } from "@mui/material";

function ShowError(){

    return (

        <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
            <ErrorOutlineIcon sx={{ color: "red" }}/>

            <p>This repository does not exist</p>
        </Card>

    );
};

export default ShowError;