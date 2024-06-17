"use client";

import Image from "next/image";
import React from "react";
import logo from "../../../public/rune-logo.svg";
import Button from "../Button/Button";
import styled from "styled-components";
import { Roboto } from 'next/font/google';
import { FaRocket } from "react-icons/fa";  // Import FaRocket from react-icons

// Configure the Roboto font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you want to use
});



function Header() {
    return (
        <HeaderStyled>
            <nav>
                <div className="logo">
                    <Image src={logo} alt="logo" width={190} height={90} />
                </div>
                <div className="nav-container">
                    <ul className="nav-items">
                        <li>
                            <a href="#">Our Impact</a>
                        </li>
                        <li>
                            <a href="#">Leadership</a>                
                        </li>
                        <li>
                            <a href="#">Mission & Values</a>                
                        </li>    
                    </ul>
                </div>
                <Button name=" Contact us" />
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1 className={roboto.className}>
            Clean Energy X Compute
          </h1>
          <p>
            Transforming wasted clean energy into valuable computation.
          </p>

          <div className="buttons">
            <Button
             
              name="Learn how it works"
              background="#459C51"
              color="#fff"
              border="1px solid #76B982"
              icon={<FaRocket />}
            />
             {/* <Button name ="Learn More"/> */}
          </div>
        </div>
        <div className=" image-content">
            <div className="image">
                <Image
                src="/windmill.svg"
                 width={600}
                 height={600}
                 alt="windenergy"
                 />
            </div>
        </div>

      </div>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    nav {
        padding: 0 4rem;
        min-height: 10vh;
        // border-bottom: 1px solid var(--color-border);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            display: flex;
            align-items: center;
            gap: 1rem;
            cursor: pointer;
        }

        .nav-container {
            flex-grow: 1;
            display: flex;
            justify-content: center;
        }

        .nav-items {
            display: flex;
            align-items: center;
            gap: 5rem;
            font-size: 1.1rem; /* Set the font size for the nav items */
            font-family: Polysans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            li {
                transition: all 0.2s ease-in-out;
                &:hover {
                    color: white;
                    transform: scale(1.1);
                }
            }
        }
    }

.header-content {
    padding: 0 10rem 5rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);

    .text-content {
      > h1 {
        font-size: clamp(2rem, 5vw, 5rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
        margin-top: -5rem;
      }

      p {
         font-size: 20px;

      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
        transition: all 0.2s ease-in-out;
        &:hover {
        color: white;
        transform: scale(1.1);
      }
    }  

    .image-content .image {
      padding: 1rem;
      border-radius: 8px;

      img {
        border-radius: 8px;
      }
    }
  }

`;

export default Header;
