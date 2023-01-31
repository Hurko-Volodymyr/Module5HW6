import React, {ReactElement, FC, useEffect} from "react";
import {Box, CircularProgress, Container, Grid, Pagination} from '@mui/material'
import ProductCard from "./components";
import ProductStore from "./ProductsStore";
import {observer} from "mobx-react-lite";

const store = new ProductStore();

const Products: FC<any> = (): ReactElement => {
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
      <Container>
          <Grid container spacing={4} justifyContent="center" my={4}>
              {store.isLoading ? (
                  <CircularProgress />
              ) : (
                  <>
                      {store.products?.map((item) => (
                          <Grid key={item.id} item lg={2} md={3} xs={6}>
                              <ProductCard {...item}/>
                          </Grid>
                      ))}
                  </>
              )}
          </Grid>
          <Box
              sx={{
                  display: 'flex',
                  justifyContent: 'center'
              }}
          >
              <Pagination count={store.totalPages}
                          page={store.currentPage}
                          onChange={ async (event, page)=> await store.changePage(page)} />
          </Box>          
      </Container>
      </Box>
  );
};

export default observer(Products);