export const NoticeCategoryItem = ({
  image,
  title,
  petName,
  breed,
  place,
  dateOfBirth,
  price,
  category,
  favorite,
  owner,
  currentCategory,
}) => {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];
  const currentDate = new Date();
  const birthDate = new Date(dateOfBirth);
  const birthDateCurrentYear = new Date(
    currentDate.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() + 1 - (birthDate.getMonth() + 1);
  let ageMessage;

  if (currentDate < birthDateCurrentYear) {
    age -= 1;
  }

  if (age === 0) {
    if (months === 1) {
      ageMessage = `${numbers[months]} month`;
    } else {
      ageMessage = `${numbers[months]} months`;
    }
  } else if (age === 1) {
    ageMessage = `${numbers[age]} year`;
  } else {
    ageMessage = `${numbers[age]} years`;
  }

  return (
    <li>
      <img src={image} alt={petName} />

      <div>
        <h2>{title}</h2>

        <ul>
          <li>
            Breed: <span>{breed}</span>
          </li>
          <li>
            Place: <span>{place}</span>
          </li>
          <li>
            Age: <span>{dateOfBirth ? ageMessage : 'no information'}</span>
          </li>

          {category === 'sell' && (
            <li>
              Price: <span>{price}</span>
            </li>
          )}
        </ul>
      </div>

      <div>
        <button type="button">Learn more</button>
        {/* <button type="button">Delete</button> */}
      </div>

      <p>{currentCategory}</p>
      <button type="button" aria-label="Like icon"></button>
    </li>
  );
};
