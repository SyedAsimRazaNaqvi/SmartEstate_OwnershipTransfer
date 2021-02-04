import React from 'react'
import { FooterContainer,
FooterWrap,
FooterLinksContainer,
FooterLinksWrapper,
FooterLinksItems,
FooterLinkTitle,
FooterLink 
} from "./FooterElements";
const Footer = () => {
    return (
        <>
           <FooterContainer>
               <FooterWrap>
                   <FooterLinksContainer>
                       <FooterLinksWrapper>
                           <FooterLinksItems>
                               <FooterLinkTitle> About Us </FooterLinkTitle>
                                  <FooterLink to="/signin"> How it works </FooterLink>
                                   <FooterLink to="/signin"> Testimonial </FooterLink>
                                   <FooterLink to="/signin"> Careers </FooterLink>
                                   <FooterLink to="/signin"> Investors </FooterLink>
                                   <FooterLink to="/signin"> Terms of Service </FooterLink>
                               </FooterLinksItems>

                           <FooterLinksItems>
                           <FooterLinkTitle> About Us </FooterLinkTitle>
                                  <FooterLink to="/signin"> How it works </FooterLink>
                                   <FooterLink to="/signin"> Testimonial </FooterLink>
                                   <FooterLink to="/signin"> Careers </FooterLink>
                                   <FooterLink to="/signin"> Investors </FooterLink>
                                   <FooterLink to="/signin"> Terms of Service </FooterLink>
                           </FooterLinksItems>

                       </FooterLinksWrapper>
                       
                       <FooterLinksWrapper>
                       <FooterLinksItems>
                           <FooterLinkTitle> About Us </FooterLinkTitle>
                                   <FooterLink to="/signin"> How it works </FooterLink>
                                   <FooterLink to="/signin"> Testimonial </FooterLink>
                                   <FooterLink to="/signin"> Careers </FooterLink>
                                   <FooterLink to="/signin"> Investors </FooterLink>
                                   <FooterLink to="/signin"> Terms of Service </FooterLink>
                           </FooterLinksItems>

                           <FooterLinksItems>
                           <FooterLinkTitle> About Us </FooterLinkTitle>
                                  <FooterLink to="/signin"> How it works </FooterLink>
                                   <FooterLink to="/signin"> Testimonial </FooterLink>
                                   <FooterLink to="/signin"> Careers </FooterLink>
                                   <FooterLink to="/signin"> Investors </FooterLink>
                                   <FooterLink to="/signin"> Terms of Service </FooterLink>
                           </FooterLinksItems>
                           </FooterLinksWrapper>

                   </FooterLinksContainer>
               </FooterWrap>
               </FooterContainer> 
        </>
    )
}

export default Footer
