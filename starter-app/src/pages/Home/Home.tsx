import React, {ReactElement, FC, useEffect} from "react";
import {Box, CircularProgress, Container, Grid, Pagination} from '@mui/material'
import UserCard from "./components";
import HomeStore from "./HomeStore";
import {observer} from "mobx-react-lite";

const store = new HomeStore();

const Home: FC<any> = (): ReactElement => {
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
                      {store.users?.map((item) => (
                          <Grid key={item.id} item lg={2} md={3} xs={6}>
                              <UserCard {...item} />
                          </Grid>
                      ))}
                  </>
              )}
          </Grid>
          <Box
            sx={{
                flexGrow: 1,
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
              <Pagination count={store.totalPages}
                          page={store.currentPage}
                          onChange={ async (event, page)=> await store.changePage(page)} />
          </Box>
      </Container>
      </Box>
  );
};

export default observer(Home);