import { StyledTextInput } from './StyleComponents/TextInput.style';
import { BiSearchAlt2 } from 'react-icons/bi';
import { ChangeEvent } from "react";

interface TextInputProps {
    onChange:(event: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput(props: TextInputProps) {
    return(
        <StyledTextInput>
            <BiSearchAlt2 />
            <input 
                type="text" 
                placeholder="What hero are you looking for?" 
                name="name"
                id="name"
                onChange={props.onChange}
            />
        </StyledTextInput>
    )
}