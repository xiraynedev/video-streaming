import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <Stack direction='column' spacing={2}>
      <Typography variant='h1'>Next Streaming</Typography>
      <Box>
        <Link href='/api/video?id=62eac016f28ab57c7a32cc3b' passHref>
          <Button variant='contained' size='large'>
            Proceed to Video
          </Button>
        </Link>
      </Box>
    </Stack>
  );
}
