import Details from './Details'
import SIGNUP from './SIGNUP'

export default function Switch(step,detail,signup,setSignup,setdetail){
    
        switch(step) {
          case 0:
            return <SIGNUP signup={signup} setSignup={setSignup}/>

          case 1:
            return <Details detail={detail} setdetail={setdetail}/>
            
          default:
            return null
        }
    
}