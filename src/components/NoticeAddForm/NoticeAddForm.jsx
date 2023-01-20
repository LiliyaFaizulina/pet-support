import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/noticesOperations';
import { Modal } from 'components/NoticeForm/NoticeForm.styled';

export const NoticeAddForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [file, setFile] = useState(null);

  const changePage = value => {
    setPage(page + value);
  };

  const validationSchema = yup.object({
    category: yup
      .string('Please, enter your category')
      .required('category is required'),
    title: yup
      .string('Please, enter your password')
      .min(3, 'Title must consist of at least 3 symbols')
      .max(30, 'Title must contain no more than 30 symbols')
      .required('Title is required'),
  });

  const { handleSubmit, values, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      category: '',
      title: '',
      petName: '',
      dateOfBirth: '',
      breed: '',
      sex: '',
      location: '',
      price: 0,
      image: '',
      comment: '',
    },
    validationSchema,
    onSubmit: values => {
      const formData = new FormData();
      for (let value in values) {
        console.log(value);
        formData.append(value, values[value]);
      }
      formData.set('image', file);
      dispatch(addNotice(formData));
      closeModal();
    },
  });

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        {page === 1 ? (
          <>
            <label>
              Sell
              <input
                type="radio"
                name="category"
                value="sell"
                onChange={handleChange}
              />
            </label>
            <label>
              In good hands
              <input
                type="radio"
                name="category"
                value="for-free"
                onChange={handleChange}
              />
            </label>
            <label>
              Lost/found
              <input
                type="radio"
                name="category"
                value="lost-found"
                onChange={handleChange}
              />
            </label>
            <label>
              Title of ad*
              <input
                type="text"
                name="title"
                value={values.title}
                placeholder="Type title"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Name pet
              <input
                type="text"
                name="petName"
                value={values.petName}
                placeholder="Type name pet"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Date of birth
              <input
                type="date"
                name="dateOfBirth"
                value={values.dateOfBirth}
                placeholder="Type date of birth"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Breed
              <input
                type="text"
                name="breed"
                value={values.breed}
                placeholder="Type breed"
                onChange={handleChange}
                required
              />
            </label>
            <button
              type="button"
              onClick={() => {
                changePage(1);
              }}
            >
              Next
            </button>
          </>
        ) : (
          <>
            <p>The sex:*</p>
            <label>
              Male
              <input
                type="radio"
                name="sex"
                value="male"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Female
              <input
                type="radio"
                name="sex"
                value="female"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Location
              <input
                type="text"
                name="location"
                value={values.location}
                placeholder="Type location"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Price
              <input
                type="text"
                name="price"
                value={values.price}
                placeholder="Type price"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Load the pet's image
              <input
                type="file"
                name="image"
                accept="image/*, .jpg, .png"
                value={values.image}
                onChange={e => {
                  setFile(e.target.files[0]);
                  handleChange(e);
                }}
                required
              />
            </label>
            <label>
              Comments
              <textarea
                name="comment"
                value={values.comment}
                placeholder="Type price"
                onChange={handleChange}
                required
              ></textarea>
            </label>
            <button
              type="button"
              onClick={() => {
                changePage(-1);
              }}
            >
              Previous
            </button>
            <button type="submit">Done</button>
          </>
        )}
      </form>
    </Modal>
  );
};
