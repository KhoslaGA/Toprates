import Link from "next/link"

export default function Footer4() {
    return (
        <footer style={{ background: '#1a1a2e', color: '#ccc', paddingTop: '60px' }}>
            {/* 4-column links section */}
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div className="row" style={{ paddingBottom: '40px', borderBottom: '1px solid #333' }}>
                    {/* Col 1: Our Company */}
                    <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
                        <h6 style={{ color: '#fff', fontWeight: '600', fontSize: '15px', marginBottom: '16px', paddingBottom: '8px', borderBottom: '2px solid #fff', display: 'inline-block' }}>
                            Our Company
                        </h6>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {[
                                { label: 'About Us', href: '/about-us' },
                                { label: 'Careers', href: '/careers' },
                                { label: 'Contact Us', href: '/contact' },
                                { label: 'Media', href: '/media' },
                            ].map(({ label, href }) => (
                                <li key={label} style={{ marginBottom: '10px' }}>
                                    <Link href={href} style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 2: Resources */}
                    <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
                        <h6 style={{ color: '#fff', fontWeight: '600', fontSize: '15px', marginBottom: '16px', paddingBottom: '8px', borderBottom: '2px solid #fff', display: 'inline-block' }}>
                            Resources
                        </h6>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {[
                                { label: 'News & Resources', href: '/news-and-resources' },
                                { label: 'Insurance Guides', href: '/guides' },
                                { label: 'Blog', href: '/blog' },
                                { label: 'FAQs', href: '/faqs' },
                            ].map(({ label, href }) => (
                                <li key={label} style={{ marginBottom: '10px' }}>
                                    <Link href={href} style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Social */}
                    <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
                        <h6 style={{ color: '#fff', fontWeight: '600', fontSize: '15px', marginBottom: '16px', paddingBottom: '8px', borderBottom: '2px solid #fff', display: 'inline-block' }}>
                            Social
                        </h6>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {[
                                { label: 'Instagram', href: '#', icon: 'fab fa-instagram' },
                                { label: 'Facebook', href: '#', icon: 'fab fa-facebook-f' },
                                { label: 'X (Twitter)', href: '#', icon: 'fab fa-x-twitter' },
                                { label: 'YouTube', href: '#', icon: 'fab fa-youtube' },
                                { label: 'LinkedIn', href: '#', icon: 'fab fa-linkedin-in' },
                            ].map(({ label, href, icon }) => (
                                <li key={label} style={{ marginBottom: '10px' }}>
                                    <Link href={href} style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className={icon} style={{ width: '16px' }} />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Contact Info */}
                    <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
                        <h6 style={{ color: '#fff', fontWeight: '600', fontSize: '15px', marginBottom: '16px', paddingBottom: '8px', borderBottom: '2px solid #fff', display: 'inline-block' }}>
                            Insurimple
                        </h6>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
                                <i className="fi-rs-marker" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <Link href="https://maps.google.com/?q=6725+Millcreek+Dr+Unit+1+Mississauga+ON+L5N+5V3" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', textDecoration: 'none' }}>
                                    6725 Millcreek Dr, Unit 1, Mississauga, ON L5N 5V3
                                </Link>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '8px', fontSize: '14px', alignItems: 'center' }}>
                                <i className="fi-rs-phone-call" style={{ flexShrink: 0 }} />
                                <Link href="tel:+16478708623" style={{ color: '#ccc', textDecoration: 'none' }}>647-870-8623</Link>
                            </li>
                            <li style={{ display: 'flex', gap: '8px', fontSize: '14px', alignItems: 'center' }}>
                                <i className="fi-rs-envelope" style={{ flexShrink: 0 }} />
                                <Link href="mailto:support@insurimple.ca" style={{ color: '#ccc', textDecoration: 'none' }}>support@insurimple.ca</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar: Logo + Copyright */}
                <div className="d-flex align-items-center justify-content-between flex-wrap" style={{ padding: '24px 0', gap: '12px' }}>
                    <Link href="/">
                        <img src="/assets/images/logo-white.png" alt="Insurimple" style={{ height: '32px', width: 'auto' }} />
                    </Link>
                    <p style={{ margin: 0, fontSize: '13px', color: '#999' }}>
                        Copyright 2018-26. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
