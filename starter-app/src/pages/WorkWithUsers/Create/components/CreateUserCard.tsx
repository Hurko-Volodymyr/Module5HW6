import { Card, CardActionArea, CardContent, Typography, Container, Grid, Box } from "@mui/material";
import { FC, ReactElement } from "react";
import { useNavigate} from "react-router-dom";
import { IUserCreate } from "../../../../interfaces/WebUsersOperations/userCreate";
import { observer } from "mobx-react-lite";

const CreateUserCard: FC<IUserCreate> = (props): ReactElement => {


        const navigate = useNavigate()
    
         return (
            <Box
            sx={{
                flexGrow: 1,
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
                
            }}>
            <Grid container  justifyContent="center" alignItems="center">                
            <Card sx={{ maxWidth: 250 }}>
                <CardActionArea onClick={() => navigate(`/user/create`)}>
                    <CardContent>
                        <Typography noWrap gutterBottom variant="h6" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.job}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"> 
                        {props.createdAt}
                        </Typography>
                    </CardContent>
                </CardActionArea>       
                </Card>         
            </Grid>
            </Box>
        )
    }

export default CreateUserCard;