import TargetIcon from '/images/target-icon.png'
const MiniSidenav = () => {
    return (
    
    <div className='desktop__mini__sidenav'>

        <div className='vip__perls'>
            <div className="dropdown dropdown-hover mt-8">
                <label tabIndex={0} className='w-[40px] block relative z-50 cursor-pointer'><img src={TargetIcon} alt="" /></label>
                <ul tabIndex={0} className="dropdown-content flex justify-start items-center p-2 shadow bg-base-100 w-52 z-20 h-11 rounded-lg pl-14">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </div>

    </div>
    
    )
  }
  
  export default MiniSidenav