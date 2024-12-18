import React from 'react'

const dashboard = () => {
    const Dashboard=({regdash} =>{
        console.log()
    })
  return (
    <div>
                <Header/>
        
        <nav>
            <ul>
                <li>
                    {regdash.email};
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </nav>
        {/* rendering on parent page ie displaying on same frame*/}
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default dashboard