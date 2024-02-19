import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './index.css'
import bannerImage from '../../Assets/banner-image2.png'
import { BannerSectionImageContainer, BannerSectionTextContainer, CTAButton, Container, Description2, Form, FormField, H1, Header, Section, ServiceCard, ServiceCardContainer, SubmitButton } from '../Styles/StyledComponents';
import Footer from '../Footer';





const LandingPage = () => {

    const navigate = useNavigate();

    const [refWhyChooseUs, inViewWhyChooseUs] = useInView({
        triggerOnce: true,
        rootMargin: '-1px 0px',
    });
    const [refOurServices, inViewOurServices] = useInView({
        triggerOnce: true,
        rootMargin: '-1px 0px',
    });
    const [refAboutUs, inViewAboutUs] = useInView({
        triggerOnce: true,
        rootMargin: '-1px 0px',
    });
    const [refContactUs, inViewContactUs] = useInView({
        triggerOnce: true,
        rootMargin: '-1px 0px',
    });




    const whyChooseUsFeatures = [
        {
            id: 1,
            title: 'Expert Support',
            description:
                'Get expert support and guidance from our dedicated team to address your concerns. Our knowledgeable professionals are here to assist you at every step of the way.',
        },
        {
            id: 2,
            title: 'Comprehensive Reporting',
            description:
                'Access detailed tax reports and analysis to make informed financial decisions. Our comprehensive reporting tools provide you with a clear understanding of your financial data.',
        },
        {
            id: 3,
            title: 'Time-saving Solutions',
            description:
                'Save time with our efficient solutions. We understand the value of your time, and our tools are designed to streamline your financial processes, giving you more time for what matters.',
        },
        {
            id: 4,
            title: 'Secure Transactions',
            description:
                'Ensure the security of your transactions. We prioritize the safety of your financial data and implement robust security measures to protect your information from unauthorized access.',
        },
        {
            id: 5,
            title: 'Collaborative Environment',
            description:
                'Experience a collaborative environment. Our platform allows seamless collaboration between different users, making it easy for teams to work together on financial tasks.',
        },
        {
            id: 6,
            title: 'Audit Preparedness',
            description:
                'Stay prepared for audits with our thorough documentation and support. We assist you in organizing and presenting your financial information with confidence during audits.',
        },
        {
            id: 7,
            title: 'Efficient Tax Planning',
            description:
                'Optimize your tax liabilities with our efficient tax planning services. We tailor our solutions to your unique financial situation, maximizing your benefits.',
        },
        {
            id: 8,
            title: 'Personalized Consultations',
            description:
                'Receive personalized consultations from our experts. We take the time to understand your specific needs and provide tailored advice to help you achieve your financial goals.',
        },
        {
            id: 9,
            title: 'Cutting-edge Technology',
            description:
                'Benefit from cutting-edge technology in tax management. Our platform leverages the latest advancements to deliver efficient and innovative solutions to our clients.',
        },
        {
            id: 10,
            title: 'Dedicated Client Support',
            description:
                'Enjoy dedicated support from our client service team. We are committed to addressing your inquiries and ensuring a smooth experience with our tax management services.',
        },
    ];

    const ourServicesFeatures = [
        {
            id: 1,
            title: 'Personal Tax Planning',
            description:
                'We offer personalized tax planning services to optimize your tax liabilities and maximize your financial benefits.',
        },
        {
            id: 2,
            title: 'Business Tax Advisory',
            description:
                'Our experts provide strategic tax advisory services to businesses, helping them navigate complex tax structures and regulations.',
        },
        {
            id: 3,
            title: 'Tax Compliance Services',
            description:
                'Ensure compliance with the latest tax regulations with our comprehensive tax compliance services. We keep you informed and up-to-date.',
        },
        {
            id: 4,
            title: 'Estate Tax Planning',
            description:
                'Plan for estate and inheritance taxes with our specialized services. We help you develop strategies to minimize tax liabilities in estate planning.',
        },
        {
            id: 5,
            title: 'Nonprofit Tax Services',
            description:
                'Access tax services tailored for nonprofit organizations. We understand the unique tax considerations for nonprofits and provide specialized support.',
        },
        {
            id: 6,
            title: 'Financial Analysis',
            description:
                'Benefit from detailed financial analysis services. Our team provides insights into your financial data to support informed decision-making.',
        },
        {
            id: 7,
            title: 'Strategic Business Planning',
            description:
                'Develop strategic business plans with our expert guidance. We assist businesses in creating plans that align with their financial goals and objectives.',
        },
        {
            id: 8,
            title: 'IRS Issue Resolution',
            description:
                'Get support and representation during IRS audits and appeals. We stand by you to address challenges related to the IRS.',
        },
        {
            id: 9,
            title: 'Effortless Taxpayer Registration',
            description:
                'Experience effortless taxpayer registration with our user-friendly processes. We make it simple for individuals to register and access our tax services.',
        },
        {
            id: 10,
            title: 'Integrated Electronic Filing',
            description:
                'Streamline your tax filing with our integrated electronic filing services. We leverage technology to make the filing process efficient and convenient for our clients.',
        },
    ];

    const aboutUsFeatures = [
        {
            id: 1,
            title: 'Experienced Team',
            description: 'Our team consists of experienced professionals dedicated to providing top-notch financial services.',
        },
        {
            id: 2,
            title: 'Client-Centric Approach',
            description: 'We prioritize our clients and tailor our services to meet their unique needs and requirements.',
        },
        {
            id: 3,
            title: 'Innovative Solutions',
            description: 'Stay ahead with our innovative solutions that leverage the latest advancements in financial technology.',
        },
        {
            id: 4,
            title: 'Transparent Communication',
            description: 'Experience transparent communication throughout our partnership, ensuring clarity and trust.',
        },
        {
            id: 5,
            title: 'Customized Financial Plans',
            description: 'Receive personalized financial plans crafted to help you achieve your specific financial goals.',
        },
        {
            id: 6,
            title: 'Ethical Practices',
            description: 'We adhere to the highest ethical standards, ensuring integrity and honesty in our financial services.',
        },
        {
            id: 7,
            title: 'Continuous Learning',
            description: 'Our team is committed to continuous learning, staying updated on industry trends and regulations.',
        },
        {
            id: 8,
            title: 'Flexible Consultation Options',
            description: 'Choose from a variety of consultation options that suit your schedule and preferences.',
        },
        {
            id: 9,
            title: 'Community Engagement',
            description: 'We actively engage with and contribute to the community, fostering a sense of social responsibility.',
        },
        {
            id: 10,
            title: 'Global Perspective',
            description: 'Benefit from our global perspective, providing insights into international financial landscapes.',
        },
    ];



    return (
        <Container>
            <Header>
                <BannerSectionTextContainer>
                    <H1 className="infinite-animation-left">Welcome to Ahead</H1>
                    <Description2 className="infinite-animation-top">
                        Unlock the power of financial freedom with Ahead. Our expert services guide you towards informed decisions for a secure financial future.
                    </Description2>
                    <CTAButton onClick={() => navigate('/')} className="infinite-animation-button">Get Started</CTAButton>
                </BannerSectionTextContainer>
                <BannerSectionImageContainer>
                    <img
                        src={bannerImage}
                        alt='img'
                        className="slider-image infinite-animation-right"
                    />
                </BannerSectionImageContainer>
            </Header>

            <Section id="whyChooseUs" ref={refWhyChooseUs} inView={inViewWhyChooseUs}>
                <h2>Why Choose Us</h2>
                <ServiceCardContainer>
                    {whyChooseUsFeatures.map((feature) => (
                        <ServiceCard key={feature.id} className="infinite-animation-text">
                            <h3 className="infinite-animation-text">{feature.title}</h3>
                            <p className="infinite-animation-description">{feature.description}</p>
                        </ServiceCard>
                    ))}
                </ServiceCardContainer>
            </Section>

            <Section id="ourServices" ref={refOurServices} inView={inViewOurServices} style={{ backgroundColor: '#e9eaf0' }}>
                <h2>Our Services</h2>
                <ServiceCardContainer>
                    {ourServicesFeatures.map((feature) => (
                        <ServiceCard key={feature.id} className="infinite-animation-text">
                            <h3 className="infinite-animation-text">{feature.title}</h3>
                            <p className="infinite-animation-description">{feature.description}</p>
                        </ServiceCard>
                    ))}
                </ServiceCardContainer>
            </Section>

            <Section id="aboutUs" ref={refAboutUs} inView={inViewAboutUs}>
                <h2>About Us</h2>
                <p>
                    Ahead is a leading financial services provider with a dedicated
                    focus on efficient and transparent tax management solutions.
                </p>
                <p>
                    Our mission is to empower individuals and businesses with the
                    knowledge and tools needed to thrive in a dynamic financial landscape.
                </p>
                <ServiceCardContainer>
                    {aboutUsFeatures.map((feature) => (
                        <ServiceCard key={feature.id} className="infinite-animation-text">
                            <h3 className="infinite-animation-text">{feature.title}</h3>
                            <p className="infinite-animation-description">{feature.description}</p>
                        </ServiceCard>
                    ))}
                </ServiceCardContainer>
            </Section>


            <Section id="contactUs" ref={refContactUs} inView={inViewContactUs} style={{ backgroundColor: '#e9eaf0' }}>
                <h2>Contact Us</h2>
                <p>
                    For inquiries or to schedule a consultation, contact our team today.
                    We are here to assist you with all your tax management needs.
                </p>
                <Form>
                    <FormField className="infinite-animation-text">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </FormField>
                    <FormField>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </FormField>
                    <FormField className="infinite-animation-text">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required />
                    </FormField>
                    <FormField>
                        <SubmitButton type="submit">Submit</SubmitButton>
                    </FormField>
                </Form>
            </Section>


            {/* {showPopup && <Popup onClose={closePopup} />} */}
            <Footer />
        </Container>
    );
};

export default LandingPage;
