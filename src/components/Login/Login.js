import React from 'react'

import StudentLogin from './StudentLogin'
import DepartmentLogin from './DepartmentLogin'

const Login = ({ loadUser }) => {
    return (
        <div className=''>
            <div className='mw9 center ph3-ns'>
                <div className='cf ph3-ns2-ns'>
                    <div className='fl mv6 w-100 w-50-ns pa2'>
                        <div className='outline bg-white pv4'>
                            <StudentLogin className='fl w-50 pa2' loadUser={loadUser} />
                        </div>
                    </div>
                    <div className='fl mv6 w-100 w-50-ns pa2'>
                        <div className='outline bg-white pv4'>
                            <DepartmentLogin className='fl w-50 pa2' loadUser={loadUser} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
