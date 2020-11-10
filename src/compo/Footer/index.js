import React from 'react'
import {FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube} from 'react-icons/fa'
import {
    FooterContainer,
    FooterLink,
    FooterLinkItem,
    FooterLinkTitle,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
      }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/signin'>
                                    How it works
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Test imonials
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    career
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Inverstors
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Terms of service
                                </FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/signin'>
                                    How it works
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Test imonials
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    career
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Inverstors
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Terms of service
                                </FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/signin'>
                                    How it works
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Test imonials
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    career
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Inverstors
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Terms of service
                                </FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/signin'>
                                    How it works
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Test imonials
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    career
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Inverstors
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Terms of service
                                </FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            logo here
                        </SocialLogo>
                        <WebsiteRights>Hello all rights reserverd {new Date().getFullYear()} </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='//www.facebook.com' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
