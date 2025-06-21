function MouseClicker() {
  // Handler for button clicks: logs the button's name attribute
  const handleButtonClick = (e) => {
    console.log('Button name:', e.currentTarget.name);
  };

  // Handler for image clicks: stops propagation so the button handler doesn't fire
  const handleImageClick = (e) => {
    e.stopPropagation();
    console.log('Image src:', e.target.src);
  };

  return (
    <div>
      {/* Button with name="one" */}
      <button name="one" onClick={handleButtonClick}>
        Button One
      </button>

      {/* Button with name="two" and an image inside */}
      <button name="two" onClick={handleButtonClick}>
        <img
          src="https://c8.alamy.com/compit/2h66b04/un-fiore-giallo-di-un-pectinatus-euryops-isolato-su-sfondo-bianco-2h66b04.jpg"
          alt="fiore giallo"
          onClick={handleImageClick}
        />
        Button Two
      </button>
    </div>
  );
}

export default MouseClicker;

/*
  To prevent the button's name attribute from being printed when the image is clicked,
  we call e.stopPropagation() inside the image's click handler. This stops the click event
  from bubbling up to the parent button, so only the image's src is logged.
*/