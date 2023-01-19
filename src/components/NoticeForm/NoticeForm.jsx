import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/noticesOperations';
import { Modal } from './NoticeForm.styled';
import FirstPageForm from './FirstPageForm';
import SecondPageForm from './SecondPageForm';

export const NoticeForm = ({ closeModalBtn }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    dateOfBirth: '',
    breed: '',
    male: false,
    female: false,
    location: '',
    price: '',
    comment: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = () => {
    const formDataToSend = new FormData();
    formDataToSend.append('data', formData);
    formDataToSend.append('img', selectedFile);
    console.log(formDataToSend);
    dispatch(addNotice(formDataToSend));
  };

  const BtnTitles = ['Next', 'Done'];

  const PageDisplay = () => {
    if (page === 0) {
      return <FirstPageForm formData={formData} setFormData={setFormData} />;
    } else {
      return (
        <SecondPageForm
          formData={formData}
          setFormData={setFormData}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      );
    }
  };

  return (
    <Modal>
      <div className="form-container">
        <div className="header">
          <button type="button" onClick={() => closeModalBtn(false)}>
            X
          </button>
          <h2>Add pet</h2>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          {page === 0 ? (
            <button type="button" onClick={() => closeModalBtn(false)}>
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

          <button
            type="button"
            onClick={() => {
              if (page === BtnTitles.length - 1) {
                submitForm();
              } else {
                setPage(currPage => currPage + 1);
              }
            }}
          >
            {BtnTitles[page]}
          </button>
        </div>
      </div>
    </Modal>
  );
};
