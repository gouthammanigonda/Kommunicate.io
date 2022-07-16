import {Component} from 'react'

import './index.css'

import "@fontsource/mulish"
import "@fontsource/roboto"; 


class KommunicateHomeScreen extends Component {
  state={
    input:'',
    responseData:[],
    responseMsg:'',
    status:'',
  }



  getResponse = async() => {
    const {input} = this.state

    const url = `https://my-json-server.typicode.com/Prochnost55/mockJSONApi/appId/${input}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
  
    const data = await response.json()
    
    this.setState({
      responseData: data
    })
  }

  onClickSubmit = (event) => {
    event.preventDefault()
    this.getResponse()
    const {input,responseData} = this.state
    console.log(responseData.id,'onsubmit')
    if (responseData.id !== undefined) {
      this.setState({
        responseMsg:'Changes saved successfully!',
        status:'Success response'
      })
    }else {
      this.setState({
        responseMsg:'APP_ID is not Authorized',
        status:"Failure response"
      })
    }
  }

  onChangeInput = (event) => {
    this.setState({input: event.target.value},this.getResponse)
  }

  render(){
    const {input,responseData,responseMsg,status} = this.state
   
    console.log(input)
    const classNameText = status.startsWith("S") ? "success" : 'failure'


    return(
      <div className="main-container">
        <div className="section-one">
          <img src='https://res.cloudinary.com/gouthamchintu/image/upload/v1657956617/Kommunicate/Frame_9_j8snoi.svg' alt='logo' className='logo' />
          <h1 className="main-heading">Adding live cdfhat on your wordpress website is as easy as it gets.</h1>
          <p className="main-heading-para">Leverage the chatbot & live chat to interact with your website visitor and customers 24/7 by following these steps:</p>
        </div>
        <div className="section-two">
          <p className='support-para'>For support, please contact us via chat on our website or reach out to <a href='https://www.kommunicate.io/' target='_blank' className='anchor-ele'>support@kommunicate.i</a> </p>
          <div className='flex-container'>
          <div className="sub-section-1">
            <ul className='unordered-list'>
              <li className='list-item'>
                <p className='list-para'><a href='https://dashboard.kommunicate.io/login' target='_blank' className='anchor-ele'>Login</a> to your kommunicate app and navigate to the <a href='https://dashboard.kommunicate.io/settings/install' target='_blank' className='anchor-ele'>setting-> install</a>  section and copy the APP_ID to update below</p>
              </li>

            </ul>
            <form className="input-container" onSubmit={this.onClickSubmit}>
              <p>Enter your APP_ID to enable chat-based support in your product</p>
              <input type='text' placeholder='APP_ID' onChange={this.onChangeInput} />
              <button type='submit'>Save changes</button>
              {responseMsg !== "" && <p className={`response-msg ${classNameText}`}>{responseMsg}</p>}
            </form>
            <ul className='unordered-list'>
              <li className='list-item'>
                <p className='list-para'>Voila! Live chat is now active on your website.</p> </li>
                <li className='list-item'>
                  <p className='list-para'>Open the website, refresh it and check out the chat plugin. You will find it in the bottom-right corner.</p>
                </li>
                <li className='list-item'>
                  <p className='list-para'>You might need to clear cache if your using any cache plugin to see your updates.</p>
                </li>
            </ul>
          </div>
          <div className="sub-section-2">
            <img src='https://res.cloudinary.com/gouthamchintu/image/upload/v1657957747/Kommunicate/image_26_larf1p.svg' alt='demo img' className='demo-img' />
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default KommunicateHomeScreen