import React from "react";
import './ReportLostItem.css';
import Top from "./Top"
const ReportLostItem = () => {
    return(
      <div className= 'Wrapper' >
            <div className='Content'>
                <div className="first">
                <label htmlFor="file">Please Upload Image Of Missing Item:
                </label>



                <input id="file" type="file" name="" placeholder="please upload picture of lost item" className="upload"/>
            </div>
              <br/>
                <img type="image" src="src/components/ReportLostItem" alt="image"/>

                  <br/>
                <div>
                    <textarea type="text" placeholder="Item description.........."/>
                </div>
                <div>
                    <br/>


                    <input className="userinput" type="tel" placeholder="enter your pone number" name="" id="enterName"/><br/>


                </div>
                <br/>
                <div>
                    <a href="##"> <button>
                        Found Item
                    </button></a>


                   <a href="#"> <button>
Lost Item
                   </button></a>
                </div>
            </div>
        </div>)
}

export default ReportLostItem
