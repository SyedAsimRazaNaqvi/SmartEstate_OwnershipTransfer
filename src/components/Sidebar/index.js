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

const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen= { isOpen } onClick={ toggle }>
            
            <Icon onClick= { toggle }>

                <CloseIcon />
            
            </Icon>
            
            <SidebarWrapper>
                <SidebarMenu>

                    
                <SidebarLink to='buy' onClick= { toggle }> Buy </SidebarLink>
                
                
                    
                <SidebarLink to='commercial' onClick= { toggle }> Commercial </SidebarLink>
                
                
                    
                <SidebarLink to='noncommercial' onClick= { toggle }> Non-Commercial </SidebarLink>
                
                
                    
                <SidebarLink to='about'onClick= { toggle }> About </SidebarLink>
                
                
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/listproperty"> List Property </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
