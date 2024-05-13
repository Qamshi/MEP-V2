import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { AcmeLogo } from "./AcmeLogo.jsx";
import { Activity, ChevronDown, Flash, Lock, Scale, Server, TagUser } from "./Icons.jsx";
import Feedback from './Feedback';
// import { FeedbackFish } from '@feedback-fish/react';
import { useTextareaContext } from './TextareaProvider'; // Use context


export default function App() {
  const navigate = useNavigate();
  const {
    resetAll,
  } = useTextareaContext();

  const handlePlanClick = () => {
    navigate("/plan");
  };
  const handleLogoutClick = () => {
    // Remove user state from local storage
    localStorage.removeItem('userEmail');
    localStorage.removeItem('isSignedIn');
    resetAll();
    navigate("/login");
  };

  const handleFeedbackClick = () => {
    navigate("/feedback");
  };

  const handleInsightsClick = () => {
    // if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.create) {
    //   chrome.tabs.create({ url: chrome.runtime.getURL('insights.html') });
    // }
    navigate("/AdPerformance");
  };
  const handlePaymentClick = () => {
    navigate("/payment");
  };
  const handleLandingClick = () => {
    navigate("/landing");
  };
  
// export default function App() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit" onClick={handleLandingClick} style={{ cursor: 'pointer' }}>MEP</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Home
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="Streamline payments with our scalable and efficient platform."
              startContent={icons.scale}
              onClick={handlePaymentClick}
            >
              Payment
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Gain valuable insights into your ads' performance."
              startContent={icons.activity}
              onClick={handleInsightsClick}
            >
              Insights
            </DropdownItem>
            {/* <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem> */}
            {/* <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem> */}
            {/* <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem> */}
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive style={{ cursor: 'pointer' }}>
          <Link aria-current="page" onClick={handlePlanClick} >
            Plan
          </Link>
        </NavbarItem>
        {/* <FeedbackFish projectId="960b2eb9ed945b"> */}
        <NavbarItem>
              <Feedback/>
          {/* <Link color="foreground" onClick={handleFeedbackClick} style={{ cursor: 'pointer' }}>
            Feedback
          </Link> */}
        </NavbarItem>
        {/* </FeedbackFish> */}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex"> 
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" onClick={handleLogoutClick}>
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
