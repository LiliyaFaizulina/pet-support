function SecondPageForm({ formData, setFormData, image, handleFileChange }) {
  // const cityRegex = /^(\w+(,)\s*)+\w+$/;
  return (
    <>
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
          name="location"
          value={formData.location}
          // pattern={cityRegex}
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
            name="price"
            value={formData.price}
            onChange={event =>
              setFormData({ ...formData, price: event.target.value })
            }
            placeholder="Type price of pet"
            required
          />
        </div>
      )}
      <div>
        <label>Load the pet’s image:</label>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*,.jpg,.png"
        />
        <img src={image} alt={formData.petName} width="300px" height="300px" />
      </div>
      <div>
        <label>Comments</label>
        <textarea
          type="text"
          name="comment"
          value={formData.comment}
          onChange={event =>
            setFormData({ ...formData, comment: event.target.value })
          }
          placeholder="Type comment"
        />
      </div>
    </>
  );
}

export default SecondPageForm;
