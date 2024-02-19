import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #0F4C81;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #e9eaf0;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;

  p {
    margin: 5px 15px;
  }
`;

const CopyrightNotice = styled.div`
  font-size: 14px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLinks>
                    <a href="#whyChooseUs">Why Choose Us</a>
                    <a href="#ourServices">Our Services</a>
                    <a href="#aboutUs">About Us</a>
                    <a href="#contactUs">Contact Us</a>
                </FooterLinks>

                <ContactInfo>
                    <p>Email: info@uniprofin.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Main St, Cityville</p>
                </ContactInfo>
            </FooterContent>

            <CopyrightNotice>
                &copy; 2024 UniProFin. All rights reserved.
            </CopyrightNotice>
        </FooterContainer>
    );
};

export default Footer;
