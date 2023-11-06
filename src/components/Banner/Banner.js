//Primitive, truly reusable component. Creating a component like this
// Truly makes it modular and leverages what makes React so special.
// We could use this banner for any type of component.
function Banner({children, status}) {
  return (
    <div className={`banner ${status}`}>
     {children}
    </div>
  );
}

export default Banner;
