import { Wrapper, Content, userInput, Image } from "./ReportItemStyle";

const ReportLostItem = () => {
    return(
        <Wrapper >
            <Content>
                <h1>Please Upload Image Of Missing Item</h1>
                <img src="src/components/ReportLostItem" alt="Missing Item"/>
                <input type="file" name="" id=""/>
                <h2>Please Enter your phone number</h2>
                <userInput>
                <input type="text" name="" id="enterName"/><br/>
                <input type="image" src="src/components/ReportLostItem" alt="image"/>
                </userInput>
            </Content>
        </Wrapper>
        )
}

export default ReportLostItem
