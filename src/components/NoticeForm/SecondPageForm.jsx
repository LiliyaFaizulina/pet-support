import React from 'react';
import { Formik } from 'formik';

function SecondPageForm({ formData, setFormData, image, handleFileChange }) {
  return (
    <>
      <form>
        <div>
          <label>
            The sex<span>*</span>:
          </label>
          <div>
            <input
              type="radio"
              id="male"
              name="sex"
              value="male"
              checked={formData.sex === 'male'}
              onChange={event => {
                setFormData({ ...formData, sex: event.target.value });
              }}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="sex"
              value="female"
              checked={formData.sex === 'female'}
              onChange={event => {
                setFormData({ ...formData, sex: event.target.value });
              }}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div>
          <label>
            Location<span>*</span>:
          </label>
          <input
            type="text"
            name="title"
            value={formData.location}
            onChange={event =>
              setFormData({ ...formData, location: event.target.value })
            }
            placeholder="Type name"
            required
          />
        </div>
        {formData.category === 'sell' && (
          <div>
            <label>
              Price<span>*</span>:
            </label>
            <input
              type="text"
              name="name"
              value={formData.price}
              onChange={event =>
                setFormData({ ...formData, price: event.target.value })
              }
              placeholder="Type name pet"
              required
            />
          </div>
        )}
        <div>
          <label>Load the pet’s image:</label>
          <input type="file" onChange={handleFileChange} />
          <img src={image} alt="Pet" />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            type="text"
            name="comment"
            value={formData.comments}
            onChange={event =>
              setFormData({ ...formData, comments: event.target.value })
            }
            placeholder="Type comment"
          />
        </div>
      </form>
    </>
  );
}

export default SecondPageForm;
