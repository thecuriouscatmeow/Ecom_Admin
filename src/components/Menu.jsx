import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//ICONS
import dashboard from '../../public/assets/menu/icons/dashboard.svg'; 
import feedback from '../../public/assets/menu/icons/feedback.svg'; 
import invoice from '../../public/assets/menu/icons/invoice.svg'; 
import logout from '../../public/assets/menu/icons/logout.svg'; 
import notifications from '../../public/assets/menu/icons/notifications.svg'; 
import payments from '../../public/assets/menu/icons/payments.svg'; 
import products from '../../public/assets/menu/icons/products.svg'; 
import refunds from '../../public/assets/menu/icons/refunds.svg'; 
import returns from '../../public/assets/menu/icons/returns.svg'; 
import sales from '../../public/assets/menu/icons/sales.svg'; 
import settings from '../../public/assets/menu/icons/settings.svg'; 
import avatar from '../../public/assets/menu/avatar/placeholder.svg';


const Container = styled.div`
  flex: 1;
  background-color: #ffffff;
  height: 100vh;
  width: 253px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 5000;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = () => {
    return (
      <Container>
        <Wrapper>

        <Item>
          <img src={avatar} />
            Moni Roy
          </Item>

            Menu

          <Item>
            <img src={dashboard} />
            Dashboard
          </Item>
          
          {/* PRODUCTS */}
          <Link to="" style={{textDecoration:"none", color: "inherit"}}>
          <Item>
          <img src={products} />
            Products
          </Item>
          </Link>

          {/* SALES */}
            <Link to="" style={{textDecoration:"none", color: "inherit"}}>
            <Item>
            <img src={sales} />
                Sales
            </Item>
            </Link>

          <Link to="" style={{textDecoration:"none", color: "inherit"}}></Link>
            Transactions
          <Item>
          <img src={payments} />
            Payments
          </Item>

          <Item>
          <img src={refunds} />
            Refunds
          </Item>

          <Item>
          <img src={returns} />
            Returns
          </Item>

          <Item>
          <img src={invoice} />
            Invoice
          </Item>

          General

          <Item>
          <img src={notifications} />
            Notifications
          </Item>

          <Item>
          <img src={feedback} />
            Feedbacks
          </Item>

          <Item>
          <img src={settings} />
            Settings
          </Item>

          {/* LOGOUT */}
          {/* <Item onClick{()=> }> */}
          <Item >
          <img src={logout} />
            Logout
          </Item>

        </Wrapper>
      </Container>
    );
  };
  
  export default Menu;