import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material"
import {FC, ReactElement} from "react";
import {IProduct} from "../../../interfaces/products";
import {useNavigate} from "react-router-dom";
import React from "react";

const ProductCard: FC<IProduct> = (props): ReactElement => {

    const navigate = useNavigate()

     return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea onClick={() => navigate(`/products/${props.id}`)}>
                <CardContent>
                    <Typography noWrap gutterBottom variant="h6" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" bgcolor={props.color}>                        
                       color:  {props.color}
                       </Typography>
                       <Typography variant="body2" color="text.secondary">
                       year: {props.year}
                       <Typography variant="body2" color="text.secondary"></Typography>
                         pantone: {props.pantone_value}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProductCard