import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/noticesOperations';
import { Modal } from './NoticeForm.styled';
import FirstPageForm from './FirstPageForm';
import SecondPageForm from './SecondPageForm';
import { toast } from 'react-toastify';

// const validationSchema = yup.object({
//   category: yup
//     .string('Please, enter your category')
//     .required('category is required'),
//   title: yup
//     .string('Please, enter your password')
//     .min(3, 'Title must consist of at least 3 symbols')
//     .max(30, 'Title must contain no more than 30 symbols')
//     .required('Title is required'),
//   petName: yup.string('Please, enter name of the pet'),
//   dateOfBirth: yup.date().min(new Date('01.01.2000')).max(new Date()),
//   breed: yup
//     .string('Please, enter breed of the pet')
//     .min(2, 'Breed must consist of at least 2 symbols')
//     .max(24, 'Breed must contain no more than 24 symbols'),
//   sex: yup.string(),
//   location: yup.string(),
//   price: yup.number().min(1).positive().integer(),
//   // image: yup.file(),
//   comment: yup.string(),
// });

export const NoticeForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
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
  });
  const [file, setFile] = useState();
  const [imageLink, setImageLink] = useState('');

  function handleClick(e) {
    const { category, title, petName, dateOfBirth } = formData;
    if (category && title && petName && dateOfBirth) {
      setPage(currPage => currPage + 1);
    } else {
      toast.info('Please fill in a required fields');
    }
  }

  function handleFileChange(e) {
    setFile(e.target.files[0]);
    setImageLink(URL.createObjectURL(e.target.files[0]));
  }

  const submitForm = () => {
    const data = new FormData();
    for (let i in formData) {
      console.log(i);
      data.append(i, formData[i]);
    }
    data.set('image', file);
    dispatch(addNotice(data));
    closeModal();
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <FirstPageForm formData={formData} setFormData={setFormData} />;
    } else {
      return (
        <SecondPageForm
          formData={formData}
          setFormData={setFormData}
          handleFileChange={handleFileChange}
          image={imageLink}
        />
      );
    }
  };

  return (
    <Modal>
      <div className="form-container">
        <div className="header">
          <button type="button" onClick={closeModal}>
            X
          </button>
          <h2>Add pet</h2>
        </div>
        <div className="body">
          <form onSubmit={submitForm}>
            {PageDisplay()}
            <div className="footer">
              {page === 0 ? (
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setPage(currPage => currPage - 1);
                  }}
                >
                  Back
                </button>
              )}
              {page ? (
                <button type="submit">Done</button>
              ) : (
                <button type="button" onClick={handleClick}>
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
