const SearchSlots = () => {
    return (
    
    
    <div className='search__wrapper cursor-pointer w-96'>
        <div className='flex justify-start items-center bg-blue1 py-1 px-5 rounded-lg'>
          <IconSearch width='16' height='16' color='#909999' />
          <input 
          type="text" 
          placeholder="Game name | Provider" 
          className="input input-bordered w-full max-w-xs bg-blue1 link__color1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    
    )
  }
  
  export default SearchSlots