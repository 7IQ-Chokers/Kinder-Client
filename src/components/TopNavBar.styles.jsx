// TopNavBar.styles.js
import styled from 'styled-components';

export const TopNavBarContainer = styled.div`
  background-color: #333333;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const SearchBar = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
  width: 300px; /* Adjust as needed */
`;

export const ProfileButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  margin-left: 10px;
`;

export const NotificationsButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  margin-left: 10px;
`;
