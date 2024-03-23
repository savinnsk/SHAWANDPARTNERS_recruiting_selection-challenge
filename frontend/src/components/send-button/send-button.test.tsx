import {render , screen,fireEvent , waitFor } from "../../utils/test-utils"
import { SendButton } from "./send-button"

describe("Send Button",()=>{
    it("should be able clean file input when  click send", async ()=>{
        const eventInputMock = {
            target: {
                files: [new File(['test contents'], 'test.csv', { type: 'text/csv' })],
            }
        } as unknown as React.ChangeEvent<HTMLInputElement> | undefined


         let fileName = '';
        
         const setFileNameMock = (value: string) => {
            fileName = value;
        };

        setFileNameMock("test.csv")

        console.log("FILE NAME AFTER CLICK =>: ",fileName)

        render(<SendButton setFileName={setFileNameMock} eventInput={eventInputMock} />);
        

        const sendButton = screen.getByText('SEND');

        fireEvent.click(sendButton);
        
        console.log("FILE NAME BEFORE CLICK =>: ",fileName)
        
        await waitFor(() => {
        expect(fileName).toBe("");
        });
    })
 
})