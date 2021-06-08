export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNumber;
};


export const backToTop = () => {
  const body = document.querySelector("#root");

  body.scrollIntoView(
    {
      behavior: "smooth",
    },
    500
  );
};