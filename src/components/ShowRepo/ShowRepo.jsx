import { Card, Button } from "@mui/material";

import "./showRepo.css";

function ShowRepo({dataObj}){

    return(
        <Card sx={{ display: "flex", gap: "20px", alignItems: "center", padding: "10px" }}>

           <img alt={dataObj.data.owner.login} src={dataObj.data.owner.avatar_url}/>

            <div className="repoInfos">
                <h2>{dataObj.data.name}</h2>
                <p>{dataObj.data.description}</p>
            </div>

            <Button variant="contained" href={dataObj.data.svn_url} target="_blank">
            Link
            </Button>

        </Card>
    );
};

export default ShowRepo;