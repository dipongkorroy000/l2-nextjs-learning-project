import Image from "next/image";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-center my-5">Regular Image Tag</h1>


      <Image src="https://i.ibb.co.com/S7mGMQrm/Kantaji-Temple-1870-s.jpg" width={500} height={500} alt="gallery"></Image>
    </div>
  );
};

export default GalleryPage;
