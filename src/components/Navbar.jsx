import React from 'react';
import { useNavigate } from "react-router-dom";
import { TopNavBarContainer, Logo, SearchBar, ProfileButton, NotificationsButton } from './TopNavBar.styles';
import logo from "../assets/logo-png/logo-no-background-right.png"

const TopNavBar = () => {
    const navigate = useNavigate(); 
  return (
    <TopNavBarContainer>
      <Logo src={logo} alt="Logo" onClick={()=>navigate('/')}/>
      <SearchBar type="text" placeholder="Search..." />
      <div>
        <ProfileButton onClick={()=>navigate('/profile')}>Profile</ProfileButton>
        <NotificationsButton>Notifications</NotificationsButton>
      </div>
    </TopNavBarContainer>
  );
};

export default TopNavBar;