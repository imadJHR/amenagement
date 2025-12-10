import Navigation from "../app/components/navigation"
import Hero from "../app//components/hero"
import Portfolio from "../app//components/portfolio"
import Stats from "../app//components/stats"
import HomeServices from "../app//components/home-services"
import Partners from "../app//components/partners"
import WhyChooseUs from "../app//components/why-choose-us"
import Certifications from "../app//components/certifications"
import WorkProcess from "../app//components/work-process"
import FeaturedBlog from "../app//components/featured-blog"
import Testimonials from "../app//components/testimonials"
import CTA from "../app//components/cta"
import Footer from "../app//components/footer"
import SocialButtons from "../app//components/social-buttons"

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Portfolio />
      <Stats />
      <HomeServices />
      <Partners />
      <WhyChooseUs />
      <Certifications />
      <WorkProcess />
      <FeaturedBlog />
      <Testimonials />
      <CTA />
      <Footer />
      <SocialButtons />
    </>
  )
}
