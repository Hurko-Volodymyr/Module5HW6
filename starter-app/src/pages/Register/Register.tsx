import { ReactElement, FC, useContext, useState } from 'react';
import { Box, TextField, Typography, Button, CircularProgress } from '@mui/material'
import { AppStoreContext } from '../../App';
import RegisterStore from './RegisterStore';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const Registration: FC<any> = (): ReactElement => {
    const app = useContext(AppStoreContext);
    const store = new RegisterStore(app.authStore);
    const navigate = useNavigate();

    const [user, setUser] = useState({ email: '', password: '', confirm: '' })

    const checkConfirm = () => {
        return user.confirm != user.password;
    }

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
            <Typography component='h1' variant='h5'>
                Sign Up
            </Typography>
            <Box component='form'
                onSubmit={async (event) => {
                    event.preventDefault();
                    store.changeData({ email: user.email, password: user.password });
                    alert(await store.register());
                    navigate('/login');
                }}
                sx={{ mt: 1 }}>
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    onChange={(event) => setUser({ ...user, email: event.target.value })}
                    autoFocus
                />
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='password'
                    label='Password'
                    name='password'
                    onChange={(event) => setUser({ ...user, password: event.target.value })}
                    autoFocus
                />
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                >
                    {store.isLoading ?
                        (<CircularProgress />) :
                        ('Submit')}
                </Button>
            </Box>
        </Box >
    );
};

export default observer(Registration);