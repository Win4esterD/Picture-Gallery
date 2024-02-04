"use client";
import {Dialog, DialogContent, DialogTitle, DialogContentText, Box, Button} from '@mui/material';
import {GlobalContext} from '@/provider/GlobalContext/GlobalContext';
import { useContext } from "react";



export function DialogWindow() {
  const {isDialogOpen, setIsDialogOpen} = useContext(GlobalContext);
  return (
    <Dialog open={isDialogOpen} onClick={() => setIsDialogOpen(false)}>
      <Box onClick={e => e.stopPropagation()}>
        <DialogTitle>Not Authorised</DialogTitle>
        <DialogContent onClick={e => e.stopPropagation()}>
          <DialogContentText id="alert-dialog-description">
            You are not authorised to do that. Would you like to authorise?
          </DialogContentText>
          <Box sx={{textAlign: 'right', marginTop: '1rem'}}>
            <Button
              sx={{marginRight: '1.5rem'}}
              onClick={() => setIsDialogOpen(false)}
            >
              Later
            </Button>
            <Button variant="outlined" color="secondary">
              Authorise
            </Button>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
}