import { ChangeEvent } from "react";
import styled from "styled-components";

interface TextInputProps {
    onChange:(event: ChangeEvent<HTMLInputElement>) => void;
}

const StyledTextInput = styled.input`
    width: 40vw;
    min-width: 355px;
    padding:.5em 2em;
    background-color: var(--bg-secondary);
    border: none;
    border-radius: var(--border-radius);
    box-shadow: 0 0 6px 2px var(--shadow);
    font-size: 20px;
    
    &::placeholder {
        color: var(--font-color);
        font-size: 20px;
    }
`

export default function TextInput(props: TextInputProps) {
    return(
        <StyledTextInput 
            type="text" 
            placeholder="What hero are you looking for?" 
            name="name"
            id="name"
            onChange={props.onChange}
        />
    )
}