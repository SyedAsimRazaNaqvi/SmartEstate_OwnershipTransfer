import React from 'react'
import { SidebarContainer,
Icon,
CloseIcon,
SidebarWrapper,
SidebarMenu,
SidebarLink,
SideBtnWrap,
SidebarRoute
 } from "./SidebarElements";
import { Link } from 'react-router-dom';

const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen= { isOpen } onClick={ toggle }>
            
            <Icon onClick= { toggle }>

                <CloseIcon />
            
            </Icon>
            
            <SidebarWrapper>
                <SidebarMenu>

                    
                <SidebarLink to='Home'  onClick= { toggle }>  
                <Link to="/">Home</Link>
                </SidebarLink>
                
                <SidebarLink to='about'  onClick= { toggle }>
                <Link to="about">About</Link>    
                </SidebarLink>
                
                
                <SidebarLink to='propertyList'  onClick= { toggle }>
                <Link to="propertyList">Property List</Link> 
                     </SidebarLink>
                
                
                    
                <SidebarLink to='commercial'  onClick= { toggle }> 
                <Link to="commercial">Commercial</Link>
                </SidebarLink>
                
                <SidebarLink to='noncommercial'  onClick= { toggle }> 
                <Link to="noncommercial">Non-Commercial</Link>
                </SidebarLink>

                <SidebarLink to='RegisterProperty '  onClick= { toggle }> 
                <Link to='/RegisterProperty'> Register Property </Link>
                </SidebarLink>


                </SidebarMenu>
                </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
