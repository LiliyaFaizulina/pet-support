import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { TfiClose, TfiPlus } from 'react-icons/tfi';
import { GiCat } from 'react-icons/gi';
import { addNotice } from 'redux/notices/noticesOperations';
import {
  Modal,
  Form,
  FormWrapper,
  Label,
  Textarea,
  TextInput,
  CategoryWrapper,
  CategoryLabel,
  CategoryInput,
  SexWrapper,
  SexLabel,
  Icon,
  SexInput,
  Button,
  FileLabel,
  FileInput,
  FileButton,
  FileImg,
  ErrorMessage,
  Required,
  FormLabel,
  FormText,
  FormCloseBtn,
  BtnWrapper,
  FileInputWrapper,
} from 'components/NoticeForm/NoticeForm.styled';
import FemaleIcon from 'images/female-icon.png';
import MaleIcon from 'images/male-icon.png';

export const NoticeForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const validationSchema = yup.object().shape({
    category: yup.string('Please, enter your category').required(),
    title: yup
      .string('Please, enter title')
      .min(3, 'Minimum 3 symbols')
      .max(30, 'Maximum 30 symbols'),
    petName: yup
      .string('Please, enter name of the pet')
      .min(2, 'Minimum 2 symbols')
      .max(16, 'Maximum 16 symbols')
      .matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/, 'Only letters'),
    dateOfBirth: yup
      .date()
      .required()
      .min('2000-01-01', 'The min date is 01.01.2000')
      .max(dateToday, 'The max date of birth is today'),
    breed: yup
      .string('Please, enter breed of the pet')
      .min(2, 'Minimum 2 symbols')
      .max(24, 'Maximum 24 symbols')
      .matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/, 'Only letters'),
    sex: yup.string(),
    location: yup
      .string()
      .matches(
        /^(([a-zA-Zа-яА-Я]([-]?)){1,})([^-,?,\s,.,0-9,!])+(,)+((\s?[a-zA-Zа-яА-Я](([-]?){0,1})){1,})([^-,?,.,\s,0-9,!])$/,
        'Example: Brovary, Kyiv'
      ),
    price: yup
      .number()
      .min(1, 'Price must be a positive number')
      .max(99999, 'Max price can be 99999')
      .positive('Price must be a positive number')
      .integer('Price must be an integer'),
    image: yup.string(),
    comments: yup
      .string()
      .min(8, 'Minimum 8 symbols')
      .max(120, 'Maximum 120 symbols'),
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
      price: 1,
      image: '',
      comments: '',
    },
    validationSchema,
    onSubmit: values => {
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      formData.set('image', file);
      dispatch(addNotice(formData));
      navigate('/notices/own');
      closeModal();
    },
  });

  const isDisable =
    !values.title ||
    !values.category ||
    !values.petName ||
    !values.dateOfBirth ||
    !values.image ||
    !values.location ||
    (values.category === 'sell' && (!values.price || errors.price));

  return (
    <Modal>
      <Form onSubmit={handleSubmit}>
        <FormCloseBtn type="button" onClick={closeModal}>
          <TfiClose />
        </FormCloseBtn>
        <FormLabel>Add pet</FormLabel>
        <FormWrapper hidden={page === 2}>
          <FormText>
            You can add a pet for others to buy or take it into good hands.
          </FormText>
          <CategoryWrapper>
            <CategoryLabel checkedCategory={values.category === 'lost-found'}>
              lost/found
              <CategoryInput
                hidden
                type="radio"
                name="category"
                value="lost-found"
                onChange={handleChange}
                req
              />
            </CategoryLabel>
            <CategoryLabel checkedCategory={values.category === 'for-free'}>
              in good hands
              <CategoryInput
                hidden
                type="radio"
                name="category"
                value="for-free"
                onChange={handleChange}
              />
            </CategoryLabel>
            <CategoryLabel checkedCategory={values.category === 'sell'}>
              sell
              <CategoryInput
                hidden
                type="radio"
                name="category"
                value="sell"
                onChange={handleChange}
              />
            </CategoryLabel>
          </CategoryWrapper>

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
            Name of the pet<Required>*</Required>
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
            Date of birth<Required>*</Required>
            <TextInput
              isEmpty={values.dateOfBirth === ''}
              type="date"
              name="dateOfBirth"
              value={values.dateOfBirth}
              min="2000-01-01"
              max={dateToday}
              placeholder="Type date of birth"
              onChange={handleChange}
            />
            {errors.dateOfBirth || touched.dateOfBirth ? (
              <ErrorMessage>
                {!values.dateOfBirth
                  ? 'Date must be a valid'
                  : errors.dateOfBirth}
              </ErrorMessage>
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
                if (
                  !category ||
                  errors.category ||
                  !title ||
                  errors.title ||
                  !dateOfBirth ||
                  errors.dateOfBirth ||
                  !petName ||
                  errors.petName
                ) {
                  toast.info('Please fill in required fields in valid format', {
                    icon: <GiCat />,
                  });
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
          <Label labelOfSex>
            The sex<Required>*</Required>
          </Label>
          <SexWrapper>
            <SexLabel checkedSex={values.sex === 'male'}>
              <Icon src={MaleIcon} alt="Male Icon"></Icon>
              Male
              <SexInput
                hidden
                type="radio"
                name="sex"
                value="male"
                onChange={handleChange}
              />
            </SexLabel>
            <SexLabel checkedSex={values.sex === 'female'}>
              <Icon src={FemaleIcon} alt="Female Icon"></Icon>
              Female
              <SexInput
                hidden
                type="radio"
                name="sex"
                value="female"
                onChange={handleChange}
              />
            </SexLabel>
          </SexWrapper>

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
                type="number"
                name="price"
                value={values.price}
                placeholder="Type price"
                onChange={handleChange}
              />
              {errors.price || touched.price || !values.price ? (
                <ErrorMessage>
                  {!values.price
                    ? 'Price must be a positive number'
                    : errors.price}
                </ErrorMessage>
              ) : null}
            </Label>
          )}
          <FileInputWrapper>
            <div>
              Load the pet's image<Required>*</Required>
            </div>
            <FileLabel>
              <FileInput
                type="file"
                name="image"
                ref={inputRef}
                accept="image/jpg, image/png, image/jpeg, image/bmp"
                value={values.image}
                onChange={e => {
                  if (e.target.files[0]) {
                    if (
                      [
                        'image/jpg',
                        'image/png',
                        'image/jpeg',
                        'image/bmp',
                      ].some(item => item === e.target.files[0].type)
                    ) {
                      setFile(e.target.files[0]);
                      setImageLink(URL.createObjectURL(e.target.files[0]));
                    } else {
                      toast.info(
                        'You can add only .png, .jpg, .jpeg, .bmp type of photo'
                      );
                      return;
                    }
                  }
                  handleChange(e);
                }}
              />
              <FileButton type="button" onClick={handleClick}>
                {values.image ? (
                  <FileImg src={imageLink} alt={values.petName} />
                ) : (
                  <TfiPlus />
                )}
              </FileButton>
            </FileLabel>
            {errors.image || touched.image ? (
              <ErrorMessage Input>{errors.image}</ErrorMessage>
            ) : null}
          </FileInputWrapper>
          <Label>
            Comments
            <Textarea
              type="text"
              name="comments"
              value={values.comments}
              placeholder="Type comments"
              onChange={handleChange}
            ></Textarea>
            {errors.comments || touched.comments ? (
              <ErrorMessage Input>{errors.comments}</ErrorMessage>
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
            <Button type="submit" disabled={isDisable}>
              Done
            </Button>
          </BtnWrapper>
        </FormWrapper>
      </Form>
    </Modal>
  );
};
