// ComponentsMadingImg.jsx
const ComponentsMadingImg = ({ src }) => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <img
        src={src}
        alt="Slide"
        className="w-full h-full object-cover rounded-md"
      />
      
    </div>
  );
};

export default ComponentsMadingImg;
