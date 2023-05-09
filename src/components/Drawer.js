import { Box, Button } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuCloseIcon from '../assets/images/icon-close-menu.svg';
import CalendarIcon from '../assets/images/icon-calendar.svg';
import ReminderIcon from '../assets/images/icon-reminders.svg';
import PlanningIcon from '../assets/images/icon-planning.svg';
import TodoIcon from '../assets/images/icon-todo.svg';

const Drawer = ({toggleMenuHandler,toggleMenu,toggleDropdown1,toggleDropdown2,toggleDropdownHandler1,toggleDropdownHandler2}) => {
    return (
            <Box sx={{display:{md:'none', xs:'block'},position:'fixed', right:0,top:0, width:'240px', height:'100%', bgcolor:'#fff',zIndex:2}}>          
                <Box sx={{mt:'1.2rem', display:'flex', justifyContent:'flex-end', mr:'3px'}}>
                    {toggleMenu&&<Box sx={{display:{md:'none',xs:'block'},mr:'10px', zIndex:4}} component='img' src={MenuCloseIcon} onClick={toggleMenuHandler}></Box>}
                </Box>    
                <Box sx={{display:'flex', flexDirection:'column', maxWidth:'200px', marginInline:'auto', textAlign:'left', alignItems:'flex-start', mt:'1.5rem'}}>
                    <Button onClick={toggleDropdownHandler1} endIcon={!toggleDropdown1?<ExpandMoreIcon sx={{marginLeft:'-5px'}} />:<ExpandLessIcon sx={{marginLeft:'-5px'}} />} disableRipple disableTouchRipple disableElevation sx={{textTransform:'none', fontSize:'16px', color:'hsl(0, 0%, 41%)', ':hover':{color:'hsl(0, 0%, 8%)', background:'white'}}}>Features</Button>
                    {toggleDropdown1&&<Box sx={{width:'100%'}}>
                        <Box sx={{display:'flex', flexDirection:'column',maxWidth:'140px', marginInline:'auto', alignItems:'flex-start', padding:'5px 0'}}>
                            <Button disableElevation disableRipple disableTouchRipple startIcon={<Box component='img' src={TodoIcon}/>} sx={{textTransform:'none', textAlign:'left',color:'hsl(0, 0%, 8%)', ':hover':{bgcolor:'#fff'}}}>Todo List</Button>
                            <Button disableElevation disableRipple disableTouchRipple startIcon={<Box component='img' src={CalendarIcon}/>} sx={{textTransform:'none', textAlign:'left',color:'hsl(0, 0%, 8%)', ':hover':{bgcolor:'#fff'}}}>Calendar</Button>
                            <Button disableElevation disableRipple disableTouchRipple startIcon={<Box component='img' src={ReminderIcon}/>} sx={{textTransform:'none', textAlign:'left',color:'hsl(0, 0%, 8%)', ':hover':{bgcolor:'#fff'}}}>Reminders</Button>
                            <Button disableElevation disableRipple disableTouchRipple startIcon={<Box component='img' src={PlanningIcon}/>} sx={{textTransform:'none', textAlign:'left',color:'hsl(0, 0%, 8%)', ':hover':{bgcolor:'#fff'}}}>Plannings</Button>
                        </Box>
                    </Box>}
                    <Button onClick={toggleDropdownHandler2} endIcon={!toggleDropdown2?<ExpandMoreIcon sx={{marginLeft:'-5px'}} />:<ExpandLessIcon sx={{marginLeft:'-5px'}} />} disableRipple disableTouchRipple disableElevation sx={{textTransform:'none', fontSize:'16px', color:'hsl(0, 0%, 41%)', ':hover':{color:'hsl(0, 0%, 8%)', background:'white'}}}>Company</Button>
                    {toggleDropdown2&&<Box sx={{width:'100%'}}>
                        <Box sx={{display:'flex', flexDirection:'column',maxWidth:'140px', marginInline:'auto',padding:'5px 0'}}>
                            <Button disableElevation disableRipple disableTouchRipple sx={{textTransform:'none',textAlign:'left', color:'hsl(0, 0%, 8%)',display:'block', ':hover':{bgcolor:'#fff'}}}>History</Button>
                            <Button disableElevation disableRipple disableTouchRipple sx={{textTransform:'none',textAlign:'left', color:'hsl(0, 0%, 8%)',display:'block', ':hover':{bgcolor:'#fff'}}}>Our Team</Button>
                            <Button disableElevation disableRipple disableTouchRipple sx={{textTransform:'none',textAlign:'left' ,color:'hsl(0, 0%, 8%)',display:'block', ':hover':{bgcolor:'#fff'}}}>Blog</Button>
                        </Box>
                    </Box>}
                    <Button disableRipple disableTouchRipple disableElevation sx={{textTransform:'none',fontSize:'16px', color:'hsl(0, 0%, 41%)', ':hover':{color:'hsl(0, 0%, 8%)', background:'white'}}}>Careers</Button>
                    <Button disableRipple disableTouchRipple disableElevation sx={{textTransform:'none',fontSize:'16px', color:'hsl(0, 0%, 41%)', ':hover':{color:'hsl(0, 0%, 8%)', background:'white'}}}>About</Button>
                    <Box sx={{mt:'10px'}}>
                        <Button fullWidth={true} variant='outlined' disableRipple disableTouchRipple disableElevation sx={{border:'1px solid #fff ',borderRadius:'10px',textTransform:'none', fontSize:'16px', color:'hsl(0, 0%, 41%)', ':hover':{color:'hsl(0, 0%, 8%)',border:'1px solid #fff', background:'white'}}}>Login</Button>
                        <Button fullWidth={true} variant='outlined' disableRipple disableTouchRipple disableElevation sx={{border:'2px solid hsl(0, 0%, 41%) ',borderRadius:'10px',mt:'5px',textTransform:'none',fontSize:'16px', color:'hsl(0, 0%, 41%)', ':hover':{color:'hsl(0, 0%, 8%)',border:'2px solid hsl(0, 0%, 8%)', background:'white'}}}>Register</Button>
                    </Box>
                </Box>
                
            </Box>
    )
}

export default Drawer
