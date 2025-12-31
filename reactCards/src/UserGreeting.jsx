
import PropTypes from 'prop-types'
function Greeting({isLogin,name = "user"}){

    /*const ifTrue = <h1 className="Login">Hi {props.name}</h1>
    const ifFalse = <h1 className="NotLogin">Login First</h1>
    return(props.isLogin ? ifTrue : ifFalse);*/
    return(
        isLogin ? <h1 className='Login'>Hi {name}</h1> : <h1 className='NotLogin'>Login First</h1>
    )
}

Greeting.propTypes={
    isLogin : PropTypes.bool,
    name : PropTypes.string,
}

Greeting.defaultProps={
    isLogin : false,
    name : "User"
}



export default Greeting;