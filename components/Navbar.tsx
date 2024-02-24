import Image from 'next/image';

const Navbar = () => {
  return (
    <nav max-width>
    <div className='flexCenter max-container padding-container rounded-md py-10'>
      <div className = 'item-center'>
        <Image 
          src='/BuddyTask.png'
          alt='logo'
          width={300}
          height={300}
        />
      </div>
    </div>
    </nav>
  )
}

export default Navbar