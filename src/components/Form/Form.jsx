import axios from "axios";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextField, Button, Paper, ThemeProvider, createTheme } from "@mui/material";

import ShowRepo from "../ShowRepo/ShowRepo";
import { useState } from "react";
import ShowError from "../ShowError/ShowError";

import "./form.css";

function Form(){

    const [dataRepo, setDataRepo] = useState({});
    const [validateResponse, setValidateResponse] = useState(null);

    const schema = yup.object().shape({
        userName: yup.string().required("Campo obrigatório"),
        repoName: yup.string().required("Campo obrigatório")
    });

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitFunction = (data) => {
        axios.get(`https://api.github.com/repos/${data.userName}/${data.repoName}`)
        .then((res) =>  {
            setDataRepo(res)
            setValidateResponse(true)
        })
        .catch((err) => {
            setDataRepo(err)
            setValidateResponse(false)
        })
    };

    const darkTheme = createTheme({
        palette: {
          mode: 'dark'
        }
      });
  

    return (
        <ThemeProvider theme={darkTheme}>
            <main>
                <Paper elevation={3} sx={{padding: 6.25, display: "flex", flexDirection: "column", gap: "20px"}}>
                <h1>Search a GitHub repository</h1>

                    <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>

                    <TextField
                        required
                        error={!!errors.userName}
                        helperText={errors?.userName?.message}
                        label="Username"
                        {...register("userName")}
                    />

                    <TextField
                        required
                        error={!!errors.repoName}
                        helperText={errors?.repoName?.message}
                        label="Repository name"
                        {...register("repoName")}
                    />

                    <Button 
                    variant="outlined" 
                    type="submit"
                    >
                    Search
                    </Button>

                    </form>
                </Paper>
            </main>

            { validateResponse ? 
            <ShowRepo dataObj={dataRepo}/> 
            : 
            validateResponse === false ? 
            <ShowError/> 
            : 
            null }

        </ThemeProvider>
        
    );

};

export default Form;