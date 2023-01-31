import { ReactElement, FC, useState, useEffect } from 'react';
import {
    Box,
    Container,
    CircularProgress,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea
} from '@mui/material';

import { Navigate, useParams } from 'react-router-dom';
import { IProduct } from '../../interfaces/products';
import { useNavigate } from 'react-router-dom';
import * as productsApi from '../../api/modules/products';
import React from 'react';
import { observer } from 'mobx-react-lite';

const Product: FC<any> = (): ReactElement => {
    const [product, setProduct] = useState<IProduct | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const getResult = async () => {
                try {
                    setIsLoading(true);
                    const res = await productsApi.getById(id);
                    setProduct(res?.data)
                }
                catch (e) {
                    if (e instanceof Error) {
                        console.log(e.message);
                    }
                };
                setIsLoading(false);
            };
            getResult();
        }
    }, [id])

    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: 'whitesmoke',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
        <Container>
            <Grid container spacing={4} justifyContent="center" m={4}>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <>
                        <Card sx={{ maxWidth: 300 }}>
                <CardContent>
                    <Typography noWrap gutterBottom variant="h6" component="div">
                        {product?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" bgcolor={product?.color}>                        
                       color:  {product?.color}
                       </Typography>
                       <Typography variant="body2" color="text.secondary">
                       year: {product?.year}
                       <Typography variant="body2" color="text.secondary"></Typography>
                         pantone: {product?.pantone_value}
                    </Typography>
                </CardContent>
        </Card>
                    </>
                )}
            </Grid>
        </Container>
        </Box>
    );
};

export default observer(Product);