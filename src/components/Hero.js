import React from 'react'
import Client1 from '../assets/images/client-audiophile.svg'
import Client2 from '../assets/images/client-databiz.svg'
import Client3 from '../assets/images/client-maker.svg'
import Client4 from '../assets/images/client-meet.svg'
import HeroDesktop from '../assets/images/image-hero-desktop.png'
import HeroMobile from '../assets/images/image-hero-mobile.png'
import { Box, Button, Typography } from '@mui/material'


const Hero = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center', flexDirection:{md:'row',xs:'column'}}}>
                    {/* left */}
                    <Box sx={{textAlign:{md:'left',xs:'center'},order:{md:1,xs:2},display:'flex',flexDirection:'column',gap:4, marginTop:{md:'50px',xs:'10px'}, padding:'0 20px'}}>
                        <Typography sx={{fontSize:{md:'70px', xs:'30px'},fontWeight:'700', lineHeight:'1',letterSpacing:'-1px',marginTop:'50px'}} variant='h2'>Make<Box component='br' sx={{display:{md:'inline-block',xs:'none'}}}></Box> remote work</Typography>
                        <Typography sx={{paddingRight:{md:'150px',xs:'0'},lineHeight:'1.5',fontWeight:'400',marginTop:{md:'10px', xs:'-15px'}, color:'hsl(0, 0%, 41%)'}} variant='subtitle1'> Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar. </Typography>
                        <Box >
                            <Button sx={{border:'2px solid #000',width:'130px', textTransform:'none',padding:'10px 10px',borderRadius:'10px' , color:'white', bgcolor:'hsl(0, 0%, 8%)', ':hover':{bgcolor:'#fff',color:'#000', border:'2px solid #000'}}}>Learn more</Button>
                        </Box>
                        <Box sx={{marginTop:'40px',display:'flex', alignItems:'center',flexWrap:'wrap', justifyContent:{md:'flex-start',xs:'center'}}}>
                                <Box component='img' src={Client2} sx={{width:{md:'100px',xs:'60px'}}}></Box>
                                <Box component='img' src={Client1} sx={{width:{md:'100px',xs:'60px'},marginLeft:{md:'20px',xs:'20px'}}}></Box>
                                <Box component='img' src={Client4} sx={{width:{md:'100px',xs:'60px'},marginLeft:{md:'20px',xs:'20px'}}}></Box>
                                <Box component='img' src={Client3} sx={{width:{md:'100px',xs:'60px'},marginLeft:{md:'20px',xs:'20px'}}}></Box>
                        </Box>
                    </Box>
                    {/* right */}
                    <Box sx={{order:{md:2,xs:1}}}>
                        <Box sx={{maxWidth:'400px', display:{md:'block', xs:'none'}}} component='img' src={HeroDesktop}></Box>
                        <Box sx={{maxWidth:'350px', display:{md:'none', xs:'block'}}} component='img' src={HeroMobile}></Box>
                    </Box>
                </Box>
  )
}

export default Hero
