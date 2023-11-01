import Header from '@/components/Header'
import Section1 from '@/components/section-1/Section1'
import Slider from '@/components/slider/Slider'
import Page from '@/components/section-3/Page'
import Page1 from '@/components/section-4/Page1'
import Scroll from '@/components/scroll/Scroll'
import Footer from '@/components/footer/Footer'
import Section5 from '@/components/sacrion-5/Section5'
import End from '@/components/end/End'


export default function Home() {
  return (
    <div>
    
    <Header/>
    <Slider/>
    <Section1/>
    <Section5/>
    <Page/>
    <Page1/>
    <Scroll/>
    <Footer/>
    <End/>
    </div>
    
  )
}
