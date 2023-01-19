import React from 'react';
import FileUploader from './FileUploader';

function SecondPageForm({
  formData,
  setFormData,
  FileUploaded,
  setSelectedFile,
}) {
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
              id="sexChoice1"
              name="sex"
              value={formData.male}
            />
            <label htmlFor="sexChoice1">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="sexChoice2"
              name="sex"
              value={formData.female}
            />
            <label htmlFor="sexChoice2">Female</label>
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
        <div>
          <label>Load the pet’s image:</label>
          {/* <input type="file" defaultValue={formData.img} name="image" /> */}
          <FileUploader
            onFileSelectSuccess={file => setSelectedFile(file)}
            onFileSelectError={({ error }) => {
              alert(error);
              return;
            }}
          />
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
      </form>
    </>
  );
}

export default SecondPageForm;
