import React from 'react';

function FirstPageForm({ formData, setFormData }) {
  return (
    <>
      <h3>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </h3>
      <div>
        <button type="button" value={'lost-found'}>
          lost/found
        </button>
        <button type="button" value={'for-free'}>
          in good hands
        </button>
        <button type="button" value={'sell'}>
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
            type="text"
            name="date"
            defaultValue={formData.dateOfBirth}
            onChange={event =>
              setFormData({ ...formData, dateOfBirth: event.target.value })
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
