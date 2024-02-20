"use client"


import Slider from "@/app/components/Slider";

const Service = () => {
    return (
        <section id="services" className="service" aria-labelledby="service-label">
            <div className="container">

                <div className="title-wrapper">

                    <div>
                        <p className="section-subtitle">
                            Services That I Provide
                        </p>

                        <h2 className="h2 section-title" id="service-label">Services</h2>
                    </div>

                    <p className="section-text">
                        I offer a wide range of digital services that will help you grow your business. I can help you with website design, SEO marketing, eCommerce, graphic design, digital marketing, social media, app development, and custom solutions. I am passionate about what I do and I am committed to delivering the best results for my clients. I am always looking for new challenges and I am excited to work with you on your next project. Let’s work together and take your business to the next level.
                    </p>

                </div>

                <Slider slides={[
                    { icon: 'IoDesktopOutline', title: 'Website Design', text: 'We provide modern and responsive website design services.', number: '01', link: '#' },
                    { icon: 'IoPodiumOutline', title: 'SEO Marketing', text: 'Improve your website\'s visibility with our SEO marketing strategies.', number: '02', link: '#' },
                    { icon: 'IoBasketOutline', title: 'eCommerce', text: 'We build efficient and user-friendly eCommerce platforms.', number: '03', link: '#' },
                    { icon: 'IoColorFilterOutline', title: 'Graphic Design', text: 'Our graphic design services will help your brand stand out.', number: '04', link: '#' },
                    { icon: 'IoMegaphoneOutline', title: 'Digital Marketing', text: 'Expand your reach with our comprehensive digital marketing services.', number: '05', link: '#' },
                    { icon: 'IoChatbubbleOutline', title: 'Social Media', text: 'We can help you engage your audience through social media.', number: '06', link: '#' },
                    { icon: 'IoPhonePortraitOutline', title: 'App Development', text: 'We develop mobile apps that are intuitive and user-friendly.', number: '07', link: '#'},
                    { icon: 'IoCodeSlashOutline', title: 'Custom Solutions', text: 'We provide custom solutions for your unique business needs.', number: '08', link: '#' },
                ]} />

            </div>
        </section>
    )
}

export default Service