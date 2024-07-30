import React from 'react';

const DownloadSection = () => {
    // Initialize data directly within the component
    const data = {
        title: "Download Newzin App",
        description: "Easy to update latest news, daily podcast and everything in your hand",
        links: [
            {
                href: "#",
                image: "assets/img/apple1.png",
                alt: "Apple Store"
            },
            {
                href: "#",
                image: "assets/img/android1.png",
                alt: "Google Play"
            }
        ]
    };

    return (
        <section className="tc-download-style1 pb-50">
            <div className="container">
                <div className="content">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="info">
                                <strong className="title">{data.title}</strong>
                                <div className="text">
                                    {data.description}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="img">
                                {data.links.map((link, index) => (
                                    <a key={index} href={link.href}>
                                        <img src={link.image} alt={link.alt} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;
