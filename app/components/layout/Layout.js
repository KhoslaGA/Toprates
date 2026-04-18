import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import MobileMenu from "./MobileMenu"
import SearchPopup from "./SearchPopup"
import StickyHeader from "./StickyHeader"
import Header4 from './header/Header4'
import Footer4 from './footer/Footer4'

export default function Layout({ pageCls, breadcrumbTitle, children }) {
    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => setSearch(!isSearch)

    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    return (
        <>
            <div id="page" className={`page_wapper hfeed site ${pageCls ? pageCls : ""}`}>
                <Header4 handleSearch={handleSearch} handleMobileMenu={handleMobileMenu} />
                <StickyHeader scroll={scroll} handleSearch={handleSearch} handleMobileMenu={handleMobileMenu} />
                <div id="wrapper_full" className="content_all_warpper">
                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                    <div id="content" className="site-content">
                        {children}
                    </div>
                    <Footer4 />
                </div>
                <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
                <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
                <BackToTop />
            </div>
        </>
    )
}
