import { IconSpeakerphone } from '@tabler/icons-react';

const Announcement = () => {
    return (
    
    // Homepage Announcement
    <section className='py-4'> 
        <div className="dark-1 rounded-3xl p-3 flex text-white">
            <span className='block mr-3'>
                <IconSpeakerphone color='orange' />
            </span>
            <marquee>Announcements Test Message</marquee>
        </div>
    </section>
    
    )
  }
  
  export default Announcement