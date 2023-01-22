import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/noticesOperations';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import {
  Modal,
  Form,
  FormWrapper,
  Label,
  Textarea,
  TextInput,
  DateInput,
  CategoryInput,
  SexLabel,
  SexInput,
  Button,
  FileInput,
  FileButton,
  FileImg,
  ErrorMessage,
  Required,
  FormLabel,
  FormText,
  FormCloseBtn,
  BtnWrapper,
} from 'components/NoticeForm/NoticeForm.styled';
import ModalCloseIcon from 'images/modal-close-icon.svg';

export const NoticeForm = ({ closeModal }) => {
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
    category: yup
      .string('Please, enter your category')
      .required('category is required'),
    title: yup
      .string('Please, enter your password')
      .min(3, 'Title must consist of at least 3 symbols')
      .max(30, 'Title must contain no more than 30 symbols')
      .required('Title is required'),
    petName: yup
      .string('Please, enter name of the pet')
      .required('Pet name is required'),
    dateOfBirth: yup.date().required('Date of birth is required'),
    breed: yup
      .string('Please, enter breed of the pet')
      .min(2, 'Breed must consist of at least 2 symbols')
      .max(24, 'Breed must contain no more than 24 symbols'),
    sex: yup.string(),
    location: yup
      .string()
      .required('Location is required')
      .matches(/^(\w+(,)\s*)+\w+$/, 'Example: Brovary, Kyiv'),
    price: yup.number().min(1).positive().integer(),
    image: yup.string().required('Image is required'),
    comment: yup
      .string()
      .min(8, 'Comment must consist of at least 8 symbols')
      .max(120, 'Comment must contain no more than 120 symbols'),
  });

  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: {
      category: 'sell',
      title: '',
      petName: '',
      dateOfBirth: '',
      breed: '',
      sex: 'male',
      location: '',
      price: 0,
      image: '',
      comment: '',
    },
    validationSchema,
    onSubmit: values => {
      const formData = new FormData();
      console.log(values.image);
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
      <Form onSubmit={handleSubmit}>
        <FormCloseBtn type="button" onClick={closeModal}>
          <img src={ModalCloseIcon} alt="X" />
        </FormCloseBtn>
        <FormLabel>Add pet</FormLabel>
        <FormWrapper hidden={page === 2}>
          <FormText>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </FormText>
          <Label>
            Sell
            <CategoryInput
              type="radio"
              name="category"
              value="sell"
              checked={values.category === 'sell'}
              onChange={handleChange}
            />
          </Label>
          <Label>
            In good hands
            <CategoryInput
              type="radio"
              name="category"
              value="for-free"
              onChange={handleChange}
            />
          </Label>
          <Label>
            Lost/found
            <CategoryInput
              type="radio"
              name="category"
              value="lost-found"
              onChange={handleChange}
              req
            />
          </Label>
          <Label>
            Title of ad<Required>*</Required>
            <TextInput
              type="text"
              name="title"
              value={values.title}
              placeholder="Type title"
              onChange={handleChange}
            />
            {errors.title || touched.title ? (
              <ErrorMessage>{errors.title}</ErrorMessage>
            ) : null}
          </Label>
          <Label>
            The name of the pet
            <TextInput
              type="text"
              name="petName"
              value={values.petName}
              placeholder="Type pet name"
              onChange={handleChange}
            />
            {errors.petName || touched.petName ? (
              <ErrorMessage>{errors.petName}</ErrorMessage>
            ) : null}
          </Label>
          <Label>
            Date of birth
            <DateInput
              type="date"
              name="dateOfBirth"
              value={values.dateOfBirth}
              min="2008-01-01"
              max={dateToday}
              placeholder="Type date of birth"
              onChange={handleChange}
            />
            {errors.dateOfBirth || touched.dateOfBirth ? (
              <ErrorMessage>{errors.dateOfBirth}</ErrorMessage>
            ) : null}
          </Label>
          <Label>
            Breed
            <TextInput
              type="text"
              name="breed"
              value={values.breed}
              placeholder="Type breed"
              onChange={handleChange}
            />
            {errors.breed || touched.breed ? (
              <ErrorMessage>{errors.breed}</ErrorMessage>
            ) : null}
          </Label>
          <BtnWrapper>
            <Button NotFillBtn type="button" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              type="button"
              onClick={() => {
                const { category, title, petName, dateOfBirth } = values;
                if (!category || !title || !dateOfBirth || !petName) {
                  toast.info('Please fill in required fields');
                  return;
                }
                changePage(1);
              }}
            >
              Next
            </Button>
          </BtnWrapper>
        </FormWrapper>
        <FormWrapper hidden={page === 1}>
          <SexLabel>
            The sex<Required>*</Required>
          </SexLabel>
          <Label>
            Male
            <SexInput
              type="radio"
              name="sex"
              value="male"
              checked={values.sex === 'sell'}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Female
            <SexInput
              type="radio"
              name="sex"
              value="female"
              onChange={handleChange}
            />
          </Label>

          <Label>
            Location<Required>*</Required>
            <TextInput
              type="text"
              name="location"
              value={values.location}
              placeholder="Type location"
              onChange={handleChange}
            />
            {errors.location || touched.location ? (
              <ErrorMessage>{errors.location}</ErrorMessage>
            ) : null}
          </Label>
          {values.category === 'sell' && (
            <Label>
              Price<Required>*</Required>
              <TextInput
                type="text"
                name="price"
                value={values.price}
                placeholder="Type price"
                onChange={handleChange}
              />
              {errors.price || touched.price ? (
                <ErrorMessage>{errors.price}</ErrorMessage>
              ) : null}
            </Label>
          )}
          <Label>
            Load the pet's image<Required>*</Required>
            <FileInput
              hidden
              type="file"
              name="image"
              ref={inputRef}
              accept="image/*, .jpg, .png"
              value={values.image}
              onChange={e => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                  setImageLink(URL.createObjectURL(e.target.files[0]));
                }
                handleChange(e);
              }}
            />
            <FileButton type="button" onClick={handleClick}>
              {values.image ? (
                <FileImg
                  src={imageLink}
                  alt={values.petName}
                  width="300px"
                  height="300px"
                />
              ) : (
                '+'
              )}
            </FileButton>
            {errors.image || touched.image ? (
              <ErrorMessage>{errors.image}</ErrorMessage>
            ) : null}
          </Label>
          <Label>
            Comments
            <Textarea
              name="comment"
              value={values.comment}
              placeholder="Type comments"
              onChange={handleChange}
            ></Textarea>
            {errors.comment || touched.comment ? (
              <ErrorMessage>{errors.comment}</ErrorMessage>
            ) : null}
          </Label>
          <BtnWrapper>
            <Button
              NotFillBtn
              type="button"
              onClick={() => {
                changePage(-1);
              }}
            >
              Back
            </Button>
            <Button type="submit">Done</Button>
          </BtnWrapper>
        </FormWrapper>
      </Form>
    </Modal>
  );
};
