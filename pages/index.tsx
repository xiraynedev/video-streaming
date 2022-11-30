import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { VideoImage } from '../components/VideoImage/VideoImage';

export default function Home() {
  return (
    <Box>
      <Typography
        variant='h1'
        fontSize={{ xs: '3rem', sm: '4rem' }}
        gutterBottom
        color='primary'
        align='center'
      >
        Next Streaming
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent='center'
        alignItems='center'
        gap={4}
        flexShrink={1}
        flexWrap='wrap'
        position='relative'
      >
        {/* cheetah */}
        <VideoImage
          href='/api/video?id=636bd72a98b98d3d44183405'
          src='/images/cheetah.webp'
          alt='cheetah video image'
          priority
        />
        {/* waves */}
        <VideoImage
          href='/api/video?id=636bb3c2ca67ba3033da8614'
          src='/images/waves.webp'
          alt='waves video image'
        />
        {/* sunflowers */}
        <VideoImage
          href='/api/video?id=636bb43bca67ba3033da8615'
          src='/images/sunflowers.webp'
          alt='sunflowers video image'
        />
        {/* coast */}
        <VideoImage
          href='/api/video?id=636bb46cca67ba3033da8616'
          src='/images/coast.webp'
          alt='coast video image'
        />
        {/* city */}
        <VideoImage
          href='/api/video?id=636bb4d8ca67ba3033da8617'
          src='/images/city.webp'
          alt='city video image'
        />
        {/* sunlight */}
        <VideoImage
          href='/api/video?id=636bb4e3ca67ba3033da8618'
          src='/images/sunlight.webp'
          alt='sunlight video image'
        />
        {/* beach */}
        <VideoImage
          href='/api/video?id=636bb4efca67ba3033da8619'
          src='/images/beach.webp'
          alt='beach video image'
        />
        {/* ocean */}
        <VideoImage
          href='/api/video?id=636bb509ca67ba3033da861a'
          src='/images/ocean.webp'
          alt='ocean video image'
        />
        {/* blooms */}
        <VideoImage
          href='/api/video?id=636bb514ca67ba3033da861b'
          src='/images/blooms.webp'
          alt='blooms video image'
        />
        {/* underwater */}
        <VideoImage
          href='/api/video?id=636bb51eca67ba3033da861c'
          src='/images/underwater.webp'
          alt='underwater video image'
        />
        {/* grass */}
        <VideoImage
          href='/api/video?id=636bb530ca67ba3033da861d'
          src='/images/grass.webp'
          alt='grass video image'
        />
        {/* sky */}
        <VideoImage
          href='/api/video?id=636bb539ca67ba3033da861e'
          src='/images/sky.webp'
          alt='sky video image'
        />
      </Stack>
    </Box>
  );
}
