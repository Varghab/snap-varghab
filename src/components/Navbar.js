import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuIcon from '../assets/images/icon-menu.svg';
import CalendarIcon from '../assets/images/icon-calendar.svg';
import ReminderIcon from '../assets/images/icon-reminders.svg';
import PlanningIcon from '../assets/images/icon-planning.svg';
import TodoIcon from '../assets/images/icon-todo.svg';
import Drawer from './Drawer';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleDropdown1, setToggleDropdown1] = useState(false);
    const [toggleDropdown2, setToggleDropdown2] = useState(false);

    const toggleMenuHandler = () =>{
        setToggleMenu((prev)=>!prev)
    }
    const toggleDropdownHandler1 = () =>{
        setToggleDropdown1((prev)=>!prev)
    } 
    const toggleDropdownHandler2 = () =>{
        setToggleDropdown2((prev)=>!prev)

    }
    return (
    <Box sx={{display:'flex', width:'95%',alignItems:'center'}}>
        <Box sx={{flexGrow:{md:0, xs:1}}}>
            <Box sx={{marginTop:'10px'}} component='img' src={Logo}></Box> 
        </Box>   
        <Box sx={{marginLeft:'3rem', flexGrow:1,display:{md:'block',xs:'none'}}}>
            <Button onClick={toggleDropdownHandler1} endIcon={!toggleDropdown1?<ExpandMoreIcon sx={{marginLeft:'-5px'}} />:<ExpandLessIcon sx={{marginLeft:'-5px'}} />} disableRipple disableTouchRipple disableElevation sx={{textTransform:'none', fontSize:'16px', color:'hsl(0, 0%, 41%)', ':hover':{color:'hsl(0, 0%, 8%)', background:'white'}}}>Features</Button>
            <Button onClick={toggleDropdownHandler2} endIcon={!toggleDropdown2?<ExpandMoreIcon sx={{marginLeft:'-5px'}} />:<ExpandLessIcon sx={{marginLeft:'-5px'}} />} disableRipple disableTouchRipple disableElevation sx={{textTransform:'none', marginLeft:'1rem', fontSize:'16px', color:'hsl(0, 0%, 41%)', ':hover':{color:'hsl(0, 0%, 8%)', background:'white'}}}>Company</Button>
            <Button disableRipple disableTouchRipple disableElevation sx={{textTransform:'none', marginLeft:'1rem', fontSize:'16px', color:'hsl(0, 0%, 41%)', ':hover':{color:'hsl(0, 0%, 8%)', background:'white'}}}>Careers</Button>
            <Button disableRipple disableTouchRipple disableElevation sx={{textTransform:'none', marginLeft:'1rem', fontSize:'16px', color:'hsl(0, 0%, 41%)', ':hover':{color:'hsl(0, 0%, 8%)', background:'white'}}}>About</Button>
        </Box>
        {toggleDropdown1&&<Box sx={{display:{md:'block', xs:'none'},zIndex:4,bgcolor:'#fff',position:'absolute',width:'150px',  borderRadius:'10px',top:60,left:110, boxShadow:'-2px 4px 10px 2px hsl(0, 0%, 85%)' }}>
            <Box sx={{margin:'15px auto',paddingInline:'10px', width:'70%'}}> 
                <Button disableElevation disableRipple disableTouchRipple startIcon={<Box component='img' src={TodoIcon}/>} sx={{textTransform:'none', color:'hsl(0, 0%, 8%)', ':hover':{bgcolor:'#fff'}}}>Todo List</Button>
                <Button disableElevation disableRipple disableTouchRipple startIcon={<Box component='img' src={CalendarIcon}/>} sx={{textTransform:'none', color:'hsl(0, 0%, 8%)', ':hover':{bgcolor:'#fff'}}}>Calendar</Button>
                <Button disableElevation disableRipple disableTouchRipple startIcon={<Box component='img' src={ReminderIcon}/>} sx={{textTransform:'none', color:'hsl(0, 0%, 8%)', ':hover':{bgcolor:'#fff'}}}>Reminders</Button>
                <Button disableElevation disableRipple disableTouchRipple startIcon={<Box component='img' src={PlanningIcon}/>} sx={{textTransform:'none', color:'hsl(0, 0%, 8%)', ':hover':{bgcolor:'#fff'}}}>Plannings</Button>
            </Box>
        </Box>}
        {toggleDropdown2&&<Box sx={{display:{md:'block', xs:'none'},zIndex:4,bgcolor:'#fff',position:'absolute',width:'120px',borderRadius:'10px',top:60,left:290, boxShadow:'2px -2px 10px 2px hsl(0, 0%, 85%)' }}>
        <Box sx={{margin:'15px auto',paddingInline:'10px', width:'70%'}}> 
                <Button disableElevation disableRipple disableTouchRipple sx={{textTransform:'none', color:'hsl(0, 0%, 8%)',textAlign:'left',display:'block',':hover':{bgcolor:'#fff'}}}>History</Button>
                <Button disableElevation disableRipple disableTouchRipple sx={{textTransform:'none', color:'hsl(0, 0%, 8%)',textAlign:'left',display:'block',':hover':{bgcolor:'#fff'}}}>Our Team</Button>
                <Button disableElevation disableRipple disableTouchRipple sx={{textTransform:'none', color:'hsl(0, 0%, 8%)',textAlign:'left',display:'block',':hover':{bgcolor:'#fff'}}}>Blog</Button>
            </Box>
        </Box>}
        <Box sx={{display:{md:'block',xs:'none'}}}>
            <Button disableRipple disableTouchRipple disableElevation sx={{textTransform:'none', marginLeft:'1rem', fontSize:'16px', color:'hsl(0, 0%, 41%)', ':hover':{color:'hsl(0, 0%, 8%)', background:'white'}}}>Login</Button>
            <Button variant='outlined' disableRipple disableTouchRipple disableElevation sx={{border:'1px solid hsl(0, 0%, 41%) ',borderRadius:'10px',textTransform:'none', marginLeft:'1rem', fontSize:'16px', color:'hsl(0, 0%, 41%)', ':hover':{color:'hsl(0, 0%, 8%)',border:'1px solid hsl(0, 0%, 8%)', background:'white'}}}>Register</Button>
        </Box>
        {!toggleMenu&&<Box sx={{display:{md:'none',xs:'block'}}} component='img' src={MenuIcon} onClick={toggleMenuHandler}></Box>}
        {/* Right Side Drawer */} 
        {toggleMenu&&<Drawer toggleMenuHandler={toggleMenuHandler} toggleMenu={toggleMenu} toggleDropdown1={toggleDropdown1} toggleDropdown2={toggleDropdown2} toggleDropdownHandler1={toggleDropdownHandler1} toggleDropdownHandler2={toggleDropdownHandler2}/>}   
    </Box>
    )
}

export default Navbar
