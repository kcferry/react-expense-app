import React from 'react'
import { connect } from 'react-redux'
import { startLoginGoogle, startLoginGithub, startLoginTwitter } from '../actions/auth'

export const LoginPage = ({startLoginGoogle, startLoginGithub, startLoginTwitter}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <div className='box-layout__buttons'>
                <button onClick={startLoginGoogle} className="button">Login with Google</button>
                <button onClick={startLoginGithub} className="button">Login with GitHub</button>
                <button onClick={startLoginTwitter} className="button">Login with Twitter</button>
            </div>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
     startLoginGoogle: () => dispatch(startLoginGoogle()),
     startLoginGithub: () => dispatch(startLoginGithub()),
     startLoginTwitter: () => dispatch(startLoginTwitter())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)


