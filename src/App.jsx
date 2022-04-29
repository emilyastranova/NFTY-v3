import { useEffect, useState} from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaRegClock,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneSquareAlt,
  FaVoicemail,
  FaCalendarWeek,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Account from "components/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout} from "antd";
import SearchCollections from "components/SearchCollections";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Text from "antd/lib/typography/Text";
import NFTMarketTransactions from "components/NFTMarketTransactions";
const { Header, Footer } = Layout;

const styles = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://ipfs.thirdweb.com/ipfs/QmXeUrz3R4mvvnMY6U9iZeonPRdwMVRxKgciR13N7edhZD/0.png')] before:bg-cover before:bg-center before:opacity-20 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();



  const [inputValue, setInputValue] = useState("explore");

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <h1>NFTY</h1>
          <SearchCollections setInputValue={setInputValue}/>
          <Menu
            theme="light"
            mode="horizontal"
            style={{
              display: "flex",
              fontSize: "17px",
              fontWeight: "500",
              marginLeft: "50px",
              width: "100%",
            }}
            defaultSelectedKeys={["nftMarket"]}
          >
            <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")} >
              <NavLink to="/NFTMarketPlace">🛒 Explore Market</NavLink>
            </Menu.Item>
            <Menu.Item key="nft">
              <NavLink to="/nftBalance">🖼 Your Collection</NavLink>
            </Menu.Item>
            <Menu.Item key="transactions">
              <NavLink to="/Transactions">📑 Your Transactions</NavLink>
            </Menu.Item>
          </Menu>
          <div style={styles.headerRight}>
            <Chains />
            <NativeBalance />
            <Account />
          </div>
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/NFTMarketPlace">
              <NFTTokenIds inputValue={inputValue} setInputValue={setInputValue}/>
            </Route>
            <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route>
          </Switch>
          <Redirect to="/NFTMarketPlace" />
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <div>
          <div className="bg-gray-100 py-16 px-16" >
            <div className="container mx-auto flex flex-col space-y-24 ">
              <div className="grid lg:grid-cols-3 gap-8 width:50px height:50px">
                <div className="col-span-1 space-y-10" align="center" >
                  <img src="https://cdn.discordapp.com/attachments/280514606928232459/950483840097456218/NFTYLOGO1.png" alt="logo"  width="100" height="100" />
    
                  <p className="text-gray-500">
                    NFTY is a college student lead project who wanted to make something
                    amazing within the digital marketplace. We're focused on your digital
                    identity and ways you can express it!
                  </p>
                </div>
                <div className="col-span-1 space-y-8">
                  <div className="flex flex-col space-y-2">
                    <p className="text-gray-600 font-medium">NFTY</p>
                    <p className="border-solid border border-black  w-1/4 " ></p>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-row items-center space-x-4">
                      <FaMapMarkedAlt className="w-6 h-6 text-gray-500  font-light" />
                      <p className="text-gray-500">
                        College Station, Texas, 77845
                      </p>
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                      <FaVoicemail className="w-6 h-6 text-gray-500 " />
                      <p className="text-gray-500"> nftygallery2022@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 space-y-8">
                  <div className="flex flex-col space-y-2">
                    <p className="text-gray-600 font-medium">Join our Mailing list!</p>
                    <p className="border-solid border border-black  w-1/4 "></p>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="email@example.com"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white bg-black hover:bg-green focus:ring-4 focus:ring-blue-300 font-medium   w-full sm:w-auto px-5 py-2.5 text-center "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="py-8 container mx-auto flex flex-row justify-between">
            <p className="text-white">Copyright 2021 NFTY Community</p>
            <div className="flex flex-row space-x-3">
              <FaFacebook className="w-5 h-5 text-white" />
              <FaInstagram className="w-5 h-5 text-white" />
              <FaWhatsapp className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
    <img src="https://cdn.discordapp.com/attachments/280514606928232459/950483840097456218/NFTYLOGO1.png" alt="logo" width="95"/>

  </div>
);

export default App;
