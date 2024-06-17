"use client";

import React from "react";
import styled from "styled-components";

interface ButtonProps {
    name: string;
    icon?: string;
    background: string;
    color?: string;
    border?: string;
}

function Button({ name, icon, background, color, border }: ButtonProps) {
    return (
        <ButtonStyled style={{
            background: background,
            color: color,
            border: border
        }}>
            {icon && <span>{icon}</span>}
            {name}
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button`
   padding: 0.3rem 1rem;
   border-radius: 30px;
   border: 2px solid var(--color-border);
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   display: flex;
   align-items: center;
   gap: 1rem;
   background: #BEEAC5; /* Set the default background color here */
   color: #76B982; /* Set the default text color here */
   font-size: 1.1rem; /* Set the font size for the text inside the button */
   font-family: font-family: Polysans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
   &:hover {
    color: white;
   }
`;

export default Button;
