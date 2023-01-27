import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
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
  FileLable,
} from './PetForm.styled';
import { useDropzone } from 'react-dropzone';

export const PetForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [file, setFile] = useState(null);

  const dateToday = new Date().toISOString().slice(0, 10);

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
    petAvatar: yup.string(),

    comments: yup
      .string()
      .min(8, 'Comment must consist of at least 8 symbols')
      .max(120, 'Comment must contain no more than 120 symbols')
      .required('Field required'),
  });

  const { handleSubmit, handleBlur, values, handleChange, errors, touched } =
    useFormik({
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
  const [yourImage, setYourImage] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/*': ['.jpeg', '.png', '.bmp', '.jpg'],
    },
    onDrop: acceptedFiles => {
      setYourImage(
        acceptedFiles.map(upFile =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          })
        )
      );
      setFile(acceptedFiles[0]);
    },
  });
  return (
    <FormBox secondPage={page === 2}>
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
              onBlur={handleBlur}
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
              onBlur={handleBlur}
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
              onBlur={handleBlur}
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
          <h4>Add photo and some comments</h4>
          <FileLable {...getRootProps()}>
            <input
              {...getInputProps()}
              name="petAvatar"
              value={values.petAvatar}
            />
            <AddButton>
              {isDragActive ? <p>image here</p> : <TfiPlus />}
            </AddButton>
            <div>
              {yourImage.map(upFile => {
                return (
                  <div key={upFile}>
                    <img src={upFile.preview} alt="pet-avatar" />
                  </div>
                );
              })}
            </div>
            {!file && <p>Image required</p>}
          </FileLable>

          <label>
            Comments
            <textarea
              name="comments"
              value={values.comments}
              placeholder="Type comments"
              onChange={handleChange}
              onBlur={handleBlur}
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
            <AcseptButton type="submit" disabled={!file}>
              Done
            </AcseptButton>
          </ButtonWrapper>
        </FormPage>
      </form>
    </FormBox>
  );
};
