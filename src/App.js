import './App.css';
import a1 from './a1.jpg';
import a2 from './a2.jpg';
import a3 from './a3.jpg';
import a4 from './a4.jpg';
import a5 from './a5.jpg';
import a6 from './a6.jpg';
import 'antd/dist/antd.css';
import Chat from './Chat/Chat';
import {MessageOutlined} from '@ant-design/icons';
import {SearchOutlined} from '@ant-design/icons';
import {EllipsisOutlined} from '@ant-design/icons';
import {CheckOutlined} from '@ant-design/icons';
import {CameraFilled} from '@ant-design/icons';
function App() {
  return (
    <div class="main-block">
      <div class="background"></div>
      <div class="Main">
      <div class="first-block">
        <div class="my-profile">
          <br/>
          <img src={a1} class="my-image"/>
          <div class="profile-icon">
            <MessageOutlined  style={{fontSize: "30px"}} />
            <EllipsisOutlined style={{transform: "rotate(90deg)",fontSize: "30px"}}/>
          </div>
          <br/> 
        </div>
        <div class="search">
        <div class="search-content">
        <SearchOutlined  style={{fontSize:"20px",paddingLeft:"10px",position:"relative",top:"5px"}}/>
        <p class="text">Search or start new chat</p>
        </div>
        </div>
        
        
        <div class="contacts-list">
          <ul>
            <li>
           <div class="block">
            <img src={a2} class="img"/>
            <div class="contacts">
            <h3>Person1</h3>
            <p class="typing">typing...</p>
            </div>
            <div class="last-seen">
              <p class="date">02:01 pm</p>
            </div>
          </div>
          </li>
          <hr/>
          <li>
            <div class="block">
              <img src={a3} class="img"/>
              <div class="contacts">
                <h3>Person2</h3>
                <div class="received-msg">In box top n center</div>
              </div>
              <div class="last-seen">
                <p class="date">10.00 am</p>
              </div>
            </div>
            </li>
            <hr/>
            <li>
            <div class="block">
              <img src={a4} class="img"/>
              <div class="contacts">
                <h3>Person3</h3>
                <div class="received-msg">kk</div>
              </div>
              <div class="last-seen">
                <p class="date">Yesterday</p>
              </div>
            </div>
            </li>
            <hr/>
            <li>
            <div class="block">
              <img src={a5} class="img"/>
              <div class="contacts">
                <h3>Person4</h3>
                <div class="received-msg">Hello</div>
              </div>
              <div class="last-seen">
                <p class="date">Yesterday</p>
              </div>
            </div>
            </li>
            <hr/>
            <li>
            <div class="block">
              <img src={a6} class="img"/>
              <div class="contacts">
                <h3>Person5</h3>
                <div class="sent-msg">
                <CheckOutlined  style={{color:"#6ac8e6", position:"relative", left:"10px"}} />
              <CheckOutlined   style={{color:"#6ac8e6", position:"relative",}} />
              Checked
                </div>
              </div>
              <div class="last-seen">
                <p class="date">Wednesday</p>
              </div>
            </div>
            </li>
            <hr/>
            <li>
            <div class="block">
              <img src={a3} class="img"/>
              <div class="contacts">
                <h3>Person6</h3>
                <div class="received-msg"> Have a nice day</div>
              </div>
              <div class="last-seen">
                <p class="date">Wednesday</p>
              </div>
            </div>
            </li>
            <hr/>
            <li>
            <div class="block">
              <img src={a4} class="img"/>
              <div class="contacts">
                <h3>Person7</h3>
                <div class="sent-msg">
                <CheckOutlined  style={{color:"#6ac8e6", position:"relative", left:"10px"}} />
                <CheckOutlined   style={{color:"#6ac8e6", position:"relative"}} />
                </div>
              </div>
              <div class="last-seen">
                <p class="date">Tuesday</p>
              </div>
            </div>
            </li>
            <hr/>
            <li>
            <div class="block">
              <img src={a5} class="img"/>
              <div class="contacts">
                <h3>Person8</h3>
                <div class="photo-received">
                <CameraFilled  style={{fontSize:"20px",position:"relative",left:"-1px"}}/>
                Photo
              </div>
              </div>
              <div class="last-seen">
                <p class="date">Monday</p>
              </div>
            </div>
            </li>
            <hr/>
            <li>
            <div class="block">
              <img src={a6} class="img"/>
              <div class="contacts">
                <h3>Person9</h3>
                <div class="sent-msg">
                <CheckOutlined  style={{color:"#6ac8e6", position:"relative", left:"10px"}} />
              <CheckOutlined   style={{color:"#6ac8e6", position:"relative"}} />
              Checked
                </div>
                
              </div>
              <div class="last-seen">
                <p class="date">Sunday</p>
              </div>
          </div>
          </li>
          </ul>
      </div>
       
    
      </div>

      <div class="second-block">
        <div class="contact-profile">
          <img src={a2} class="img1"/>
          <div class="current-contact">
            <h3 style={{position:"relative",top:"10px"}}>Person1</h3>
            <p class="typing" style={{position:"relative",top:"6px"}}>typing...</p>
          </div>
          <div class="attachment">
          <SearchOutlined  style={{fontSize:"20px",paddingLeft:"10px",position:"relative",top:"5px",left:"-5px"}}/>
          <EllipsisOutlined  style={{transform: "rotate(90deg)",fontSize: "30px",position:"relative",top:"10px"}}/>
          </div>

        </div>
        <div>
          <Chat></Chat>
          
      </div>
      
        

      </div>
      

      </div>
    </div>
    
  );
}

export default App;
