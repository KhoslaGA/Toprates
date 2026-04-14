import Link from "next/link"

export default function NavbarNav() {
    return (
        <>
            <ul className="navbar_nav" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <li className="menu-item menu-item-has-children dropdown nav-item">
                    <Link href="/car-insurance" className="nav_link">
                        <span className="text-link">Car Insurance</span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/car-insurance" className="nav_link">
                                <span className="text-link">Compare Car Insurance</span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/car-insurance/quotes" className="nav_link">
                                <span className="text-link">Get a Quote</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item menu-item-has-children dropdown nav-item">
                    <Link href="/home-insurance" className="nav_link">
                        <span className="text-link">Home Insurance</span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/home-insurance" className="nav_link">
                                <span className="text-link">Compare Home Insurance</span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/home-insurance/quotes" className="nav_link">
                                <span className="text-link">Get a Quote</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item menu-item-has-children dropdown nav-item">
                    <Link href="/business-insurance" className="nav_link">
                        <span className="text-link">Business Insurance</span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/business-insurance" className="nav_link">
                                <span className="text-link">Compare Business Insurance</span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/business-insurance/quotes" className="nav_link">
                                <span className="text-link">Get a Quote</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item menu-item-has-children dropdown nav-item">
                    <Link href="/mortgage-rates" className="nav_link">
                        <span className="text-link">Mortgage Rates</span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/mortgage-rates" className="nav_link">
                                <span className="text-link">Compare Mortgage Rates</span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/mortgage-rates/calculator" className="nav_link">
                                <span className="text-link">Mortgage Calculator</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item menu-item-has-children dropdown nav-item">
                    <Link href="/credit-cards" className="nav_link">
                        <span className="text-link">Credit Cards</span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/credit-cards" className="nav_link">
                                <span className="text-link">Compare Credit Cards</span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/credit-cards/best" className="nav_link">
                                <span className="text-link">Best Credit Cards</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item menu-item-has-children dropdown nav-item">
                    <Link href="/more-options" className="nav_link">
                        <span className="text-link">More Options</span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/life-insurance" className="nav_link">
                                <span className="text-link">Life Insurance</span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/travel-insurance" className="nav_link">
                                <span className="text-link">Travel Insurance</span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/health-insurance" className="nav_link">
                                <span className="text-link">Health Insurance</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item menu-item-has-children dropdown nav-item">
                    <Link href="/news-and-resources" className="nav_link">
                        <span className="text-link">News and Resources</span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/blog" className="nav_link">
                                <span className="text-link">Blog</span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/guides" className="nav_link">
                                <span className="text-link">Guides</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
            </ul>
        </>
    )
}
