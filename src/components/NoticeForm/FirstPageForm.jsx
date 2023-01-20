import React from 'react';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
import './style.css';

// NoticeForm (FormsValidation):
// -* title - будь які літери.мін 2 макс 48, - (required);
// -* name - будь які літери.мін 2 макс 16;
// -* birthdate - дата в форматі 22.10.2022;
// -* breed - будь які літери.мін 2 макс 24;
// -* location - строка в форматі Місто, Область.Наприклад: Brovary, Kyiv або Akhtyrka, Sumy;
// -* comments - будь які літери та символи.мін 8, макс 120 - (required);
// -* price - число, не повинно починатися 0 - (required)

// const AddPetSchema = Yup.object().shape({
//   title: Yup.string()
//     .min(2, 'Too Short!')
//     .max(48, 'Too Long!')
//     .required('Required'),
//   name: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!'),
//   birthdate: Yup.date().min(new Date('01.01.2000')).max(new Date()),
//   breed: Yup.string().min(2, 'Too Short!').max(24, 'Too Long!'),
//   // location: Yup.string()
//   comments: Yup.string()
//     .min(2, 'Too Short!')
//     .max(120, 'Too Long!')
//     .required('Required'),
//   price: Yup.number().required('Required'),
// });

function FirstPageForm({ formData, setFormData }) {
  return (
    <>
      <h3>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </h3>
      <div>
        <button
          type="button"
          value="lost-found"
          className={formData.category === 'lost-found' ? 'active' : ''}
          onClick={event =>
            setFormData({ ...formData, category: event.target.value })
          }
        >
          lost/found
        </button>
        <button
          type="button"
          value="for-free"
          className={formData.category === 'for-free' ? 'active' : ''}
          onClick={event =>
            setFormData({ ...formData, category: event.target.value })
          }
        >
          in good hands
        </button>
        <button
          type="button"
          value="sell"
          className={formData.category === 'sell' ? 'active' : ''}
          onClick={event => {
            setFormData({ ...formData, category: event.target.value });
          }}
        >
          sell
        </button>
      </div>
      <form>
        <div>
          <label>
            Tittle of ad<span>*</span>
          </label>
          <input
            type="text"
            name="title"
            defaultValue={formData.title}
            onChange={event =>
              setFormData({ ...formData, title: event.target.value })
            }
            placeholder="Type name"
            required
          />
        </div>
        <div>
          <label>Name pet</label>
          <input
            type="text"
            name="name"
            defaultValue={formData.name}
            onChange={event =>
              setFormData({ ...formData, name: event.target.value })
            }
            placeholder="Type name pet"
          />
        </div>
        <div>
          <label>Date of birth</label>
          <input
            type="date"
            name="date"
            defaultValue={formData.birthdate}
            onChange={event =>
              setFormData({ ...formData, birthdate: event.target.value })
            }
            placeholder="Type date of birth"
          />
        </div>
        <div>
          <label>Breed</label>
          <input
            type="text"
            name="breed"
            defaultValue={formData.breed}
            onChange={event =>
              setFormData({ ...formData, breed: event.target.value })
            }
            placeholder="Type breed"
          />
        </div>
      </form>
    </>
  );
}

export default FirstPageForm;
