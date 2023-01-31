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
import UpdteUserStore from "./UpdateUserStore";
import UpdateUserCard from "./components/UpdateUserCard";

const store = new UpdteUserStore;

const UpdateUserPage: FC<any> = (props): ReactElement => {
    return (
        <>
 
            {!!!store.user.updatedAt && (
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
                Update user?
            </Typography>
            <Box component="form"
                 onSubmit={async (event) =>
                 {
                     event.preventDefault()
                     await store.update()
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
                       {!!store.user.updatedAt && (
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
                            <UpdateUserCard id={""} name={store.user.name} job={store.user.job} updatedAt={store.user.updatedAt }/>
                        </Grid>
                        </Box>
                </>
                
            )}
        </>        
   )
}

export default observer(UpdateUserPage)