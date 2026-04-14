import Link from "next/link"
import NavbarNav from "./NavbarNav"

export default function StickyHeader({ scroll, handleSearch, handleMobileMenu }) {
    return (
        <div className={`sticky_header_area sticky_header_content ${scroll ? "fixed-header" : ""}`}>
            <header className="header-area header-style-4" style={{ background: '#fff', borderBottom: '1px solid #e8e8e8' }}>
                {/* Row 1: Logo + Get Quotes + Search */}
                <div className="large-container">
                    <div className="d-flex align-items-center justify-content-between" style={{ padding: '14px 20px' }}>
                        <div className="logobox">
                            <Link href="/" className="logo navbar-brand">
                                <img src="/assets/images/logo.png" alt="Logo" className="logo_default" style={{ height: '36px' }} />
                            </Link>
                        </div>
                        <div className="d-flex align-items-center" style={{ gap: '14px' }}>
                            <Link href="/get-quotes" className="theme_btn" style={{ borderRadius: '50px', padding: '10px 24px', fontSize: '15px' }}>
                                Get Quotes
                            </Link>
                            <div className="search search-toggler" onClick={handleSearch} style={{ cursor: 'pointer', lineHeight: 1 }}>
                                <i className="fi-rs-search" style={{ fontSize: '18px' }} />
                            </div>
                            <div className="navbar_togglers hamburger_menu d-xl-none" onClick={handleMobileMenu}>
                                <span className="line" />
                                <span className="line" />
                                <span className="line" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row 2: Nav links full width, left-aligned, no box */}
                <div className="d-none d-xl-block" style={{ borderTop: '1px solid #e8e8e8' }}>
                    <div className="large-container">
                        <div className="navbar_content d-flex align-items-center justify-content-between" style={{ padding: '0 20px' }}>
                            <NavbarNav />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
