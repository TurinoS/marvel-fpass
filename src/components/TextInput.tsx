import styled from "styled-components";

const StyledTextInput = styled.input`
    width: 40vw;
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

export default function TextInput() {
    return(
        <StyledTextInput 
            type="text" 
            placeholder="What hero do you search?" 
            name="name"
            id="name"
        />
    )
}