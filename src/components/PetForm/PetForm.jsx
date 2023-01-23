import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { TfiClose, TfiPlus } from 'react-icons/tfi';
import { addPet } from 'redux/auth/authOperations';
import {
  FormPage,
  FormBox,
  CloseBtn,
  AcseptButton,
  BackButton,
  AddButton,
  ButtonWrapper,
} from './PetForm.styled';

export const PetForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [file, setFile] = useState(null);
  const [imageLink, setImageLink] = useState('');
  const dateToday = new Date().toISOString().slice(0, 10);
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };

  const changePage = value => {
    setPage(page + value);
  };

  const validationSchema = yup.object({
    name: yup
      .string('Please, enter name of the pet')
      .min(2, 'too short')
      .max(16, 'too long')
      .required('Pet name is required'),
    birthday: yup.string().required('Date of birth is required'),
    breed: yup
      .string('Please, enter breed of the pet')
      .min(2, 'Breed must consist of at least 2 symbols')
      .max(16, 'Breed must contain no more than 24 symbols')
      .required('Field required'),
    petAvatar: yup.string().required('Image is required'),
    comments: yup
      .string()
      .min(8, 'Comment must consist of at least 8 symbols')
      .max(120, 'Comment must contain no more than 120 symbols')
      .required('Field required'),
  });

  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: {
      name: '',
      birthday: '',
      breed: '',
      petAvatar: '',
      comments: '',
    },
    validationSchema,
    onSubmit: values => {
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      formData.set('petAvatar', file);
      dispatch(addPet(formData));
      closeModal();
    },
  });

  return (
    <FormBox>
      <form onSubmit={handleSubmit}>
        <CloseBtn type="button" onClick={closeModal}>
          <TfiClose />
        </CloseBtn>
        <h3>Add pet</h3>
        <FormPage isHidden={page === 2}>
          <label>
            Name pet
            <input
              type="text"
              name="name"
              value={values.name}
              placeholder="Type name pet"
              onChange={handleChange}
            />
            {errors.name || touched.name ? <p>{errors.name}</p> : null}
          </label>
          <label>
            Date of birth
            <input
              type="date"
              name="birthday"
              value={values.birthday}
              min="2003-01-01"
              max={dateToday}
              placeholder="Type date of birth"
              onChange={handleChange}
            />
            {errors.birthday || touched.birthday ? (
              <p>{errors.birthday}</p>
            ) : null}
          </label>
          <label>
            Breed
            <input
              type="text"
              name="breed"
              value={values.breed}
              placeholder="Type breed"
              onChange={handleChange}
            />
            {errors.breed || touched.breed ? <p>{errors.breed}</p> : null}
          </label>
          <ButtonWrapper>
            <BackButton type="button" onClick={closeModal}>
              Cancel
            </BackButton>
            <AcseptButton
              type="button"
              onClick={() => {
                const { name, birthday, breed } = values;
                if (!name || !birthday || !breed) {
                  toast.info('Please fill in required fields');
                  return;
                }
                changePage(1);
              }}
            >
              Next
            </AcseptButton>
          </ButtonWrapper>
        </FormPage>
        <FormPage isHidden={page === 1}>
          <label>
            Add photo and some comments
            <input
              hidden
              type="file"
              name="petAvatar"
              ref={inputRef}
              accept="image/*,.jpg,.png"
              value={values.petAvatar}
              onChange={e => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                  setImageLink(URL.createObjectURL(e.target.files[0]));
                }
                handleChange(e);
              }}
            />
            <AddButton type="button" onClick={handleClick}>
              {values.petAvatar ? (
                <img
                  src={imageLink}
                  alt="Pet avatar"
                  width="300px"
                  height="300px"
                />
              ) : (
                <TfiPlus />
              )}
            </AddButton>
            {errors.petAvatar || touched.petAvatar ? (
              <p>{errors.petAvatar}</p>
            ) : null}
          </label>
          <label>
            Comments
            <textarea
              name="comments"
              value={values.comments}
              placeholder="Type comments"
              onChange={handleChange}
            ></textarea>
            {errors.comments || touched.comments ? (
              <p>{errors.comments}</p>
            ) : null}
          </label>
          <ButtonWrapper>
            <BackButton
              type="button"
              onClick={() => {
                changePage(-1);
              }}
            >
              Back
            </BackButton>
            <AcseptButton type="submit">Done</AcseptButton>
          </ButtonWrapper>
        </FormPage>
      </form>
    </FormBox>
  );
};
