import '../styles/GalerySkills.css'
export const GalerySkills = ({ img }) => {
  return (
    <>
      <div className='flex items-center justify-center mb-10'>
        <h2 className='text-[#14213D] font-bold text-3xl'>Basic</h2>
      </div>

      <div className='flex justify-center items-center flex-row'>
        {img && img.map((item, index) => (
          <div className='img-container' key={index}>
            <img src={item.img} alt={item.name} className='img-galeria' />
            <p className='text-center font-bold lng-text'>{item.name}</p>
            {console.log(item)}
          </div>
        ))}
      </div>
    </>
  );
}
