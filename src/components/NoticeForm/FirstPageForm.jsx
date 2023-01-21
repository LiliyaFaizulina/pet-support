import './style.css';

function FirstPageForm({ formData, setFormData }) {
  const nameRegex = /[a-zA-Z]+/;
  // const dateRegex = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;
  const dateToday = new Date().toISOString().slice(0, 10);
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
          name="petName"
          pattern={nameRegex}
          defaultValue={formData.petName}
          onChange={event =>
            setFormData({ ...formData, petName: event.target.value })
          }
          placeholder="Type name pet"
        />
      </div>
      <div>
        <label>Date of birth</label>
        <input
          type="date"
          name="dateOfBirth"
          min="2008-01-01"
          max={dateToday}
          // pattern={dateRegex}
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
    </>
  );
}

export default FirstPageForm;
