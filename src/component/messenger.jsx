import{ AppBar, Toolbar ,Box }from'@mui/material';

import Login from "./account/login";
import styled from '@emotion/styled';


const Container= styled(Box)`
height:100vh;
background-color:#F0F2F5;

`
const Header=styled(AppBar)`
height:220px;
background-color:#44A884;
box-shadow:none;
`

const Messenger= ()=>{  
    return(
      <> 
         <Container>
         <Header>
            <Toolbar>

            </Toolbar>
         </Header>
         <Login/>

        </Container>


      </>
    )
}
export default Messenger;