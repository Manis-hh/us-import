import { Helmet } from "react-helmet";
import './App.css';
import Nav from './components/Nav'
import MainBanner from './components/MainBanner';
import Grow from './components/Grow';
import Product from './components/Product';
import Card from './components/Card';
import Footer from './components/Footer';
import Hscode from './components/Hscode';
import { name } from './components/Hscode'
import Data from './components/Data';
import SName from './components/Data'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  useLoaderData
} from "react-router-dom";

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Counter from './components/Counter';
import About2 from './components/About2';
import Products from './components/Products';
import FlatBanner from './components/FlatBanner';
import Contact from './components/Contact';
import Hsmongo from "./components/Hsmongo";
import Selectdata from "./components/Selectdata";
import Dataimport from "./components/Dataimport";
import Faq from "./components/Faq";
import ScrollToTop from "./components/Scroll";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Disclaimer from "./components/Disclaimer";
function App() {

  {
    AOS.init({
      delay: 300,
      duration: 1000
    });
  }
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/"
          element={

            <>

              <Helmet>
                <meta charSet="utf-8" />
                <title>US Import Data | USA Trade Data - US Import Export Data Provider</title>

                <meta
                  name="description"
                  content="US import export data and US Trade data. We are the Best provider of the Best Services Satisfaction is guaranteed."
                
                />
   <link rel="canonical" href="https://www.usimportdata.com" />
                
              </Helmet>
              <h1 style={{ display: "none" }}>US TRADE DATA</h1>
              <h2 style={{ display: "none" }}>US IMPORT DATA</h2>
              <Nav />
              <MainBanner title="GET READY TO FEEL THE POWER OF USA TRADE DATA"
                id="shipmentbg"
              />
              <Selectdata />
              <Grow />
              <Product />
              <Card />
              <Footer />
            </>
          }>



        </Route>

        <Route path="/about"
          element={
            <>
              <Helmet>
                <meta charSet="utf-8" />
                <title>US Import Export Data | Importer Exporter in USA </title>
                <meta
                  name="description"
                  content="
                  Complete Details of Us import data Along with 80+ Countries Export-Import Data. Get data...
                  
                  "
                />
            <link rel="canonical" href="https://www.usimportdata.com/about" />
                
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
              </Helmet>
              <Nav />

              <MainBanner title="A STRONG BUSINESS KNOWLEDGE ORGANIZATION  
                                   "
                heading="titleb"
                id="buisnessbg"
                img="
                https://cdn3d.iconscout.com/3d/premium/thumb/businessman-sitting-on-office-chair-2873063-2384315@0.png"
                btn1="Home" bgColor="lightgreen"
                content="
                Overseas trading is not as easy as it seems. Traders and marketers have to face multiple hurdles and pass all the barriers to complete one transaction. Based on the market scenario, every marketer and trader formulates his or her best strategy so as to gain more than others and generate as much margin as possible. To create these market strategies and ideologies, one has to keep in mind various factors that can be a part of the trade. If you are an inspiring trader and now going to target the massive market of the United States, then don’t worry. You have landed on the right page as we are one of the best knowledge organizations in the field of Import Export Data and Global Trade Data and have more than 4 years of experience. With regard to the United States, we deal in providing the most authentic US Import Data and US Export Data to our clients.
                "
                content2=""
              />

              <Counter />
              <About2 />
              <Footer />
            </>
          }>
        </Route>
        <Route path="/import-data"
          element={
            <>
              <Helmet>
                <meta charSet="utf-8" />
                <title>US Import Data, USA Importers US trade Data | USA Customs Data</title>
                <meta
                  name="description"
                  content="Buy US Import Data from us which is 100% accurate and based on fresh insights. Contact us now and get US Trade Data and US Import Data at affordable price."
                />
              <link rel="canonical" href="https://www.usimportdata.com/import-data" />
                
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
              </Helmet>
              <Nav />
              <FlatBanner
                title="US IMPORT DATA"
                title2="ANALYZE THE COUNTRY’S IMPORT VOLUMES"

              />
              <Products />
              <div className="  p-lg-5 my-4">
                <div className=" container text-center text-white">
                  <h3 className="display-5 my-0  bg-primary  fw-bold">BIGGEST BUSINESS PORTS OF THE UNITED STATES</h3>
                  <p className="border border-info  bg-white text-primary">It is very much evident that every shipment enters and exits the nation via ports. So here is a list of some busiest and biggest business ports that are functional in the United States.</p>
                </div>

                <div className="container">
                  <ul className="list-group list-group-flush">
                    <a href="/live-data/import/cartons/port-DETROIT">   <li className="list-group-item  text-primary" data-aos="flip-down">	Port of DETROIT</li></a>
                    <a href="/live-data/import/units/port-CORPUS CHRISTI">  <li className="list-group-item  text-primary" data-aos="flip-down"> Port of CORPUS CHRISTI</li></a>
                    <a href="/live-data/import/units/port-BEAUMONT">  <li className="list-group-item  text-primary" data-aos="flip-down">Port of BEAUMONT</li></a>
                    <a href="/live-data/import/units/port-NEW ORLEANS">  <li className="list-group-item  text-primary" data-aos="flip-down">Port of New Orleans </li></a>
                    <a href="/live-data/import/granular/port-BATON ROUGE">  <li className="list-group-item  text-primary" data-aos="flip-down">Port of Greater Baton Rouge</li></a>
                    <a href="/live-data/import/lumber/port-LAKE CHARLES">  <li className="list-group-item  text-primary" data-aos="flip-down">Port of Lake Charles</li></a>
                    <a href="/live-data/import/bleach/port-PORT ARTHUR">  <li className="list-group-item  text-primary" data-aos="flip-down">Port of Port Arthur</li></a>
                    <a href="/live-data/import/units/port-PHILADELPHIA">  <li className="list-group-item  text-primary" data-aos="flip-down">Port of Philadelphia</li>
                    </a>
                    <a href="/live-data/import/units/port-BOSTON">  <li className="list-group-item  text-primary" data-aos="flip-down">Port of Boston</li>
                    </a>
                  </ul>
                </div>
              </div>
              <Footer />
            </>
          }>
        </Route>
        <Route path="/export-data"
          element={
            <>
              <Helmet>
                <meta charSet="utf-8" />
                <title>US Export Data, USA Exporters | USA Custom Data</title>
                <meta
                  name="description"
                  content="Get the best US Export Data from Tradelmex. We provide the most authentic US Trade Data and US Export Data to all traders and marketers."

                />
            <link rel="canonical" href="https://www.usimportdata.com/export-data" />
                
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
              </Helmet>
              <Nav />
              <FlatBanner
                title="US EXPORT DATA"
                title2=" ANALYZE THE COUNTRY’S EXPORT VOLUMES"
                para="With the help of our interactive US Export Data or USA Export Data you can easily keep an eye on any ongoing export activity in the United States. Our experts who are experienced in this market research are responsible for performing changes in the database as and when any shipment leaves from the US to other countries. shipment can exit via any mode like air, water, or roadways. By doing the instant changes we make sure that data is fresh and not outdated in any aspect. After collecting and doing amendments to the database, it has to pass various rounds of scrutinizing so as to eliminate errors that might be present in the reports. In this way, we guarantee that every database regarding US Export Data reached you with only fresh and error-free content and statistics."
              />
              <Products
                download="/static/media/US_Export_Data.ffabd3014709b054af69.xlsx"
                ibtn="exportbtn"
                title1="UNITED STATES EXPORT STATISTICS"
                para1="By analyzing the past 5-year trend of total exports in the United States and the US Export Data then we come to know that the amount remains similar without too much deviation during the years 2017 to 2019 (USD 1.54 to USD 1.64 trillion), then there was a decline in the total value of exports in the year 2020 (USD 1.42 trillion) followed by a rise in the year 2021 (USD 1.75 trillion)."
                title2="MAJOR EXPORT PRODUCTS OF THE US"
                para2="As per the US Export Data for the year 2021, the United States exported uncountable items and products to different nations, but the nation mainly exported mineral fuels and oils (USD 239 billion), and mechanical products (USD 209 billion), followed by cars (USD 122 billion), precision tools (USD 91.68 billion), and spare parts of aircraft (USD 89.13 billion). These products dominated the US Export Data for the year 2021."
                title5="MAJOR EXPORT ACCOMPLICES OF THE UNITED STATES"
                para5="As far as the year 2021 is concerned, the United States has performed exports with many nations, but the major export partners of the US as listed in the US Export Data were Canada (307 billion), followed by Mexico (USD 276 billion), then China (USD 151 billion), Japan (USD 74 billion), and Korea (USD 65 billion). These nations are frequent trade partners of the United States and are in collaboration for a very long time."
                title4="WORLD EXPORT RANKING"
                para4="Being one of the most developed countries in the world, the US has topped the charts of total world exports worth USD 1.75 trillion In terms of exports also the country is at the top, securing the 2nd position in total exports across the globe. This data is released by US Export Data for the year 2021. The US has continued to be on the top for many years and this trend is going to be followed for many more years as various developments are taking place every now and then in the country."
                title3="USA IS THE LARGEST EXPORTER OF?"
                para3="Till the year 2021, the US Export Data revealed that the nation was the world’s biggest exporter of mineral fuels and oils, machinery parts, automobiles, and precision tools. The country has been ahead of all nations in total exports of these commodities by a huge margin. It is clearly observed that the demand for these products is lesser than their production in the domestic market of the United States. As a result, these goods were exported to generate revenue."
              />
              <div className="  p-lg-5 my-4">
                <div className=" container text-center text-white">
                  <h3 className="display-5 my-0  bg-primary opacity-25  fw-bold">BIGGEST BUSINESS PORTS OF THE UNITED STATES</h3>
                  <p className="border border-secondary  bg-white text-primary">It is very much evident that every shipment enters and exits the nation via ports. So here is a list of some busiest and biggest business ports that are functional in the United States.</p>
                </div>

                <div className="container">
                  <ul className="list-group list-group-flush">
                    <a href="/live-data/export/units/port-LOS ANGELES">    <li className="list-group-item  text-primary" data-aos="flip-down">	Port of Los Angeles</li>
                    </a>
                    <a href="/live-data/export/units/port-LONG BEACH">
                      <li className="list-group-item  text-primary" data-aos="flip-down">Port of Long Beach</li>
                    </a>
                    <a href="/live-data/export/units/port-NEW YORK">
                      <li className="list-group-item  text-primary" data-aos="flip-down">Port of New Jersey and New York</li>
                    </a>

                    <a href="/live-data/export/units/port-SAVANNAH">
                      <li className="list-group-item  text-primary" data-aos="flip-down">Port of Savannah</li>
                    </a>
                    <a href="/live-data/export/units/port-NORFOLK">
                      <li className="list-group-item  text-primary" data-aos="flip-down">Port of Norfolk</li>
                    </a>
                    <a href="/live-data/export/units/port-SEATTLE">

                      <li className="list-group-item  text-primary" data-aos="flip-down">Port of Seattle</li>
                    </a>
                    <a href="/live-data/export/units/port-HOUSTON">
                      <li className="list-group-item  text-primary" data-aos="flip-down">Port of Houston</li>
                    </a>
                    <a href="/live-data/export/units/port-OAKLAND">
                      <li className="list-group-item  text-primary" data-aos="flip-down">Port of Oakland</li>
                    </a>
                    <a href="/live-data/export/units/port-CHARLESTON">
                      <li className="list-group-item  text-primary" data-aos="flip-down">Port of Charleston</li>
                    </a>
                  </ul>
                </div>
              </div>
              <Footer />
            </>
          }>
        </Route>
        <Route path="/contact"
          element={
            <>
              <Helmet>
                <meta charSet="utf-8" />
                <title> Contact us for a Demo for US Import Export Data</title>
                <meta
                  name="description"
                  content="
                  Get instant resolution to any of your queries from TradeImeX. Email, call, or chat with us now and we will get in touch with you with a quick assistance.
                  "
                />
              <link rel="canonical" href="https://www.usimportdata.com/contact" />
                
              </Helmet>
              <Nav />
              <Contact />
              <Footer />
            </>
          }>
        </Route>

        <Route path="/faq"
          element={
            <>
<Helmet>
                <meta charSet="utf-8" />
                <title>
                Frequently Asked Questions | usimportdata
                </title>
                <meta
                  name="description"
                  content="Get answers to the most asked questions. Get the list of all the general questions with answers from us."
                />

                <link rel="canonical" href="https://www.usimportdata.com/faq" />
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
              </Helmet>
              <Nav />
              <Faq />
              <Footer />

            </>
          }></Route>
        <Route path="/select-live-data"
          element={
            <>
              <Helmet>
                <meta charSet="utf-8" />
                <title> Search- US Import Export Customs Data - USA Trade Data | US Importers US Exporters
                </title>
                <meta
                  name="description"
                  content="Find active importers, buyers, suppliers, manufacturers, and exporters globally Search 70+ countries Import export trade data by HS Code or Product Description.
                  "
                />

                <link rel="canonical" href="https://www.usimportdata.com/select-live-data" />
              </Helmet>
              <h1 style={{ display: "none" }}>Customs Data</h1>
              <h2 style={{ display: "none" }}>Statistical Data</h2>

              <Nav />
              <Selectdata />
              <Footer />

            </>
          }>
        </Route>
        <Route path="/terms-of-use"
          element={
            <>

              <Nav />
<Terms/>
              
              <Footer />

            </>
          }></Route>
          <Route path="/privacy-policy"
          element={
            <>

              <Nav />
<Privacy/>
              
              <Footer />

            </>
          }></Route>
          <Route path="/disclaimer"
          element={
            <>

              <Nav />
<Disclaimer/>
              
              <Footer />

            </>
          }></Route>
        <Route path="/live-data/import"
          element={
            <>

              <Nav />

              {/* <Hsmongo/> */}
              <Dataimport
              />
              <Footer />

            </>
          }>
        </Route>
        <Route path="/live-data/import/:search"
          element={
            <>

              <Nav />
              {/* <Hsmongo/> */}
              <Dataimport
              />
              <Footer />

            </>
          }>
            {/* desc and hs code */}
            <Route path="/live-data/import/:search/hscode-:hsearch"
          element={
            <>

              <Nav />
              {/* <Hsmongo/> */}
              <Dataimport
              />
              <Footer />

            </>
          }></Route>
          {/* descand hscode by port */}
          <Route path="/live-data/import/:search/hscode-:hsearch/port-:unloadingport"
          element={
            <>

              <Nav />
              {/* <Hsmongo/> */}
              <Dataimport
              />
              <Footer />

            </>
          }></Route>
          {/* desc and hscode by country */}
          <Route path="/live-data/import/:search/hscode-:hsearch/country-:origincountry"
          element={
            <>

              <Nav />
              {/* <Hsmongo/> */}
              <Dataimport
              />
              <Footer />

            </>
          }></Route>

{/* desc and hscode by country and port */}
<Route path="/live-data/import/:search/hscode-:hsearch/port-:unloadingport/country-:origincountry"
          element={
            <>

              <Nav />
              {/* <Hsmongo/> */}
              <Dataimport
              />
              <Footer />

            </>
          }></Route>


          <Route path="/live-data/import/:search/port-:unloadingport"
            element={
              <>

                <Nav />
                {/* <Hsmongo/> */}
                <Dataimport
                />
                <Footer />

              </>
            }></Route>
          <Route path="/live-data/import/:search/country-:origincountry"
            element={
              <>

                <Nav />
                {/* <Hsmongo/> */}
                <Dataimport
                />
                <Footer />

              </>
            }></Route>
          <Route path="/live-data/import/:search/country-:origincountry/port-:unloadingport"
            element={
              <>

                <Nav />
                {/* <Hsmongo/> */}
                <Dataimport
                />
                <Footer />

              </>
            }></Route>

        </Route>
        <Route path="/live-data/import/hscode/:hsearch"
          element={
            <>

              <Nav />
              {/* <Hsmongo/> */}
              <Dataimport
              />
              <Footer />

            </>
          }>
        </Route>

        <Route path="/live-data/import/hscode/:hsearch/port-:unloadingport"
          element={
            <>

              <Nav />
              {/* <Hsmongo/> */}
              <Dataimport
              />
              <Footer />

            </>
          }>
        </Route>
        <Route path="/live-data/import/hscode/:hsearch/country-:origincountry"
          element={
            <>

              <Nav />
              {/* <Hsmongo/> */}
              <Dataimport
              />
              <Footer />

            </>
          }>
        </Route>
        <Route path="/live-data/import/hscode/:hsearch/country-:origincountry/port-:unloadingport"
          element={
            <>

              <Nav />
              {/* <Hsmongo/> */}
              <Dataimport
              />
              <Footer />

            </>
          }></Route>

        <Route path="/live-data/export"
          element={
            <>

              <Nav />
              {/* <Hsmongo/> */}
              <Data />
              <Footer />

            </>
          }>
        </Route>
        <Route path="/live-data/export/:search"
          element={
            <>

              <Nav />
              {/* <Hsmongo/> */}
              <Data />
              <Footer />

            </>
          }>
          <Route path="/live-data/export/:search/port-:departport"
            element={
              <>

                <Nav />
                <Data />
                <Footer />

              </>
            }></Route>
          <Route path="/live-data/export/:search/country-:dcountry"
            element={
              <>

                <Nav />
                <Data />
                <Footer />

              </>
            }></Route>
          <Route path="/live-data/export/:search/country-:dcountry/port-:departport"
            element={
              <>

                <Nav />
                <Data />
                <Footer />

              </>
            }></Route>
        </Route>
        <Route path="/live-data/export/hscode/:hsearch"
          element={
            <>

              <Nav />
              {/* <Hsmongo/> */}
              <Data />
              <Footer />

            </>
          }>
        </Route>

        <Route path="/thank-you/"
          element={
            <>

              <Nav />
              <div className="container " id="thankyou" style={{ minHeight: "70vh" }} >
                <div className="row justify-content-centers">
                  <div className="col-lg-6 ">
                    <h1 id="linear">THANK YOU FOR CONTACTING US <br />WE WILL GET BACK TO YOU SOON </h1>
                  </div>
                  <div className="col-lg-6" >
                    <img src="https://www.izenbridge.com/wp-content/uploads/2021/09/thankYou-graphic-1.png" width="100%" alt="" />
                  </div>
                </div>
              </div>
              <Footer />

            </>
          }>
        </Route>


      </Routes>


    </BrowserRouter>
    // <div className="App">

    //   <Nav/>
    //   <MainBanner/>
    //   <Grow/>
    //   <Product/>
    //   <Card/>
    //   <Footer/>
    // </div>
  );
}

export default App;
