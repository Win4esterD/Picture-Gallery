'use client';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Box,
  Button,
} from '@mui/material';
import {GlobalContext} from '@/provider/GlobalContext/GlobalContext';
import {useContext} from 'react';
import {useRouter} from 'next/navigation';
import {accessKey} from '@/services/apiVariables';

export function DialogWindow() {
  const {isDialogOpen, setIsDialogOpen} = useContext(GlobalContext);
  const router = useRouter();
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
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                const host = `${window.location.origin}/auth`;
                router.push(
                  `https://unsplash.com/oauth/authorize/?client_id=${accessKey}&&redirect_uri=${host}/&&response_type=code&&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections`,
                );
              }}
            >
              Authorise
            </Button>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
