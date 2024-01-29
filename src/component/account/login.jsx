import{Dialog , Box,Typography,List,ListItem,styled} from '@mui/material'
import { qrCodeImage } from '../../assect/data'


const Component = styled(Box)`
    display: flex; 
`;

 
const dialogStyle={
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none'
}

 
const Login =()=>{
    return(
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle}}
            >
            <Component>
                <Box>
                    <Typography>Use WhatsApp on your computer</Typography>
                    <List>
                        <ListItem>1.Open WhatsApp on your phone</ListItem>
                        <ListItem>2.Go to settings by tapping on your profile photo, </ListItem>
                        <ListItem>3.Linked devices  and then </ListItem>
                        <ListItem>4.Point your phone to this screen to capture the QR code</ListItem>
    
                    </List>
                </Box>
                <Box> <img src={qrCodeImage} alt="qrcode" /></Box>
            </Component>
        </Dialog>
    )
}
export default Login;