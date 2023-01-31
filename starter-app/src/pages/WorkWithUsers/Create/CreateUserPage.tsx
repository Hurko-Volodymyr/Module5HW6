import React, {ReactElement, FC, useContext} from "react";
import {
    CircularProgress,
    Grid,
    TextField,
    Typography,
} from '@mui/material'
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { observer } from "mobx-react-lite";
import CreateUserStore from "./CreateUserStore";
import CreateUserCard from "./components/CreateUserCard";

const store = new CreateUserStore;

const CreateUserPage: FC<any> = (props): ReactElement => {
    return (
        <>
 
            {!!!store.user.createdAt && (
                <Box
            sx={{
                flexGrow: 1,
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Typography component="h1" variant="h5">
                Create new user?
            </Typography>
            <Box component="form"
                 onSubmit={async (event) =>
                 {
                     event.preventDefault()
                     await store.create()
                 }}
                 noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    onChange={(event) => store.changeName(event.target.value)}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="job"
                    label="Job"
                    type="job"
                    id="job"
                    onChange={(event) => store.changeJob(event.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                        Submit
                        </Button>               
            </Box>
        </Box>    
            )}
                       {!!store.user.createdAt && (
                <>
                 <Box
            sx={{
                flexGrow: 1,
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                        <Grid item xs={12}>
                            <CreateUserCard id={""} name={store.user.name} job={store.user.job} createdAt={store.user.createdAt }/>
                        </Grid>
                        </Box>
                </>
                
            )}
        </>        
   )
}

export default observer(CreateUserPage)