

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  
  return (
    <div className=" w-full mt-auto p-4 text-xl lg:text-2xl text-white bg-bgsec text-center font-semibold"> ©<a href='https://github.com/Prakhar301101'>&nbsp;&nbsp;Prakhar Pandey&nbsp;&nbsp;</a>{year}</div>
  )
}

export default Footer