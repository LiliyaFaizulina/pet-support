import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useAddPetMutation } from "../../redux/userApi";
import { userActions } from "redux/user/userSlice";
import changedateformat from "utilities/dateMaker"; // нужно или нет?
import {
  Label,
  Form,
  Container,
  Input,
  BtnBox,
  ErrorText,
  BtnCancel,
  BtnBack,
  BtnNext,
  BtnDone,
  Textarea,
  Title,
  SubTitle,
  ImageBox,
  MyImageCross,
  ImageContainer,
} from "./ModalAddsPet.styled";

const ModalAddsPet = () => {
  const [nextPage, setNextPage] = useState(false);
  const [isAvatar, setIsAvatar] = useState(false);
  const [addPet] = useAddPetMutation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const handleSubmitClick = async formdata => {
    try {
      const newDateFormat = changedateformat(formdata.birthday);
      formdata.birthday = newDateFormat;
      addPet(formdata);
      dispatch(userActions.changeModalAddPets());
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleNextClick = () => {
    setNextPage(true);
  };

  const handleBackClick = () => {
    setNextPage(false);
  };

  const handleImage = e => {
    const imageContainer = document.getElementById("image_container");
    setIsAvatar(true);
    imageContainer.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`;
  };
  const textRegexp = /[a-zA-Z]+/;

  return (
    <>
      <Title>Add pet</Title>
      <Form id="pets-form" encType="multipart/form-data" onSubmit={handleSubmit(handleSubmitClick)}>
        {!nextPage && (
          <>
            <Label htmlFor="petName">Name pet</Label>
            <Input
              id="petName"
              type="text"
              name="name"
              placeholder="Type name pet"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "This input must exceed 2 characters",
                },
                maxLength: {
                  value: 16,
                  message: "The length of this field cannot exceed 16 characters",
                },
                pattern: {
                  value: textRegexp,
                  message: "Name should  contain only letters.",
                },
              })}
              aria-invalid={errors.petName ? "true" : "false"}
            />
            {errors.name && <ErrorText>{errors.name?.message}</ErrorText>}
            <Label htmlFor="dateOfBirth">Date of birth</Label>
            <Input
              id="dateOfBirth"
              type="date"
              name="birthday"
              placeholder="Type date of birth"
              {...register("birthday", {
                required: "Date of birth is required.",
              })}
            />
            {errors.birthday && <ErrorText role="alert">{errors.birthday?.message}</ErrorText>}
            <Label htmlFor="breed">Breed</Label>
            <Input
              id="breed"
              type="text"
              name="breed"
              placeholder="Type breed"
              {...register("breed", {
                required: "Breed is required",
                maxLength: {
                  value: 16,
                  message: "The length of this field cannot exceed 16 characters",
                },
                minLength: {
                  value: 2,
                  message: "This input must exceed 2 characters",
                },
                pattern: {
                  value: textRegexp,
                  message: "Breed should  contain only letters.",
                },
              })}
              aria-invalid={errors.breed ? "true" : "false"}
            />
            {errors.breed && <ErrorText role="alert">{errors.breed?.message}</ErrorText>}
          </>
        )}

        {nextPage && (
          <>
            <SubTitle htmlFor="avatar">Add photo and some comments</SubTitle>
            <Container>
              <ImageContainer>
                <Input
                  name="avatar"
                  type="file"
                  id="avatar"
                  {...register("avatar", {
                    required: "Photo is required.",
                  })}
                  onChange={handleImage}
                />
                {errors.addPhoto && <ErrorText role="alert">{errors.addPhoto?.message}</ErrorText>}
                <label htmlFor="avatar" id="addPhoto-label">
                  <ImageBox id="image_container">{!isAvatar && <MyImageCross />}</ImageBox>
                </label>
              </ImageContainer>

              <Label textarea id="comments-label" htmlFor="comments">
                Comments
              </Label>

              <Textarea
                id="comments"
                name="comments"
                placeholder="Type comments"
                {...register("comments", {
                  required: "Comments is required.",
                  maxLength: {
                    value: 120,
                    message: "The length of this field cannot exceed 120 characters",
                  },
                  minLength: {
                    value: 8,
                    message: "This input must exceed 8 characters",
                  },
                })}
              />
              {errors.comments && <ErrorText role="alert">{errors.comments?.message}</ErrorText>}
            </Container>
          </>
        )}

        <BtnBox>
          {!nextPage && (
            <>
              <BtnNext onClick={handleNextClick} active disabled={!isValid} type="button">
                Next
              </BtnNext>
              <BtnCancel onClick={() => dispatch(userActions.changeModalAddPets())} type="button">
                Cancel
              </BtnCancel>
            </>
          )}

          {nextPage && (
            <>
              <BtnDone active type="submit">
                Done
              </BtnDone>
              <BtnBack onClick={handleBackClick} type="button">
                Back
              </BtnBack>
            </>
          )}
        </BtnBox>
      </Form>
    </>
  );
};

export default ModalAddsPet;