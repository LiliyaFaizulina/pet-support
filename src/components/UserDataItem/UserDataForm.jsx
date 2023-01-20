import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { getUser, updateAvatar } from '../../redux/auth/authOperations';
import UserDataItem from './UserDataItem';
import devaultIcon from '../../images/default-icon-user.png';

import { selectUser, selectIsLoading } from '../../redux/auth/authSelectors';
import { Loader } from 'components/Loader';
import {
  UserBlock,
  BoxImg,
  EditImgBtn,
  IconEditImgBtn,
  ImgUser,
  BoxInfo,
  BoxTitle,
  Title,
  Block,
  Form,
  ImageContainer,
} from './UserDataItem.styled';
import { useForm } from 'react-hook-form';

const UserDataForm = () => {
  const user = useSelector(selectUser);
  const [isChangeUserAvatar, setIsChangeUserAvatar] = useState(false);
  const [newUserAvatar, setNewUserAvatar] = useState();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const { register } = useForm({
    mode: 'onBlur',
  });

  const result = user;
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const imgUrl = result?.avatarURL;

  const imgAlt = result?.name;

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const nameRegex = /[a-zA-Z]+/;
  const cityRegex = /^(\w+(,)\s*)+\w+$/;

  const phoneRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12}(\s*)?$/;
  const dateRegexp = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;

  const handleImage = async e => {
    setIsChangeUserAvatar(true);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        const avatar = reader.result;
        setNewUserAvatar(avatar);
        const file = new FormData();
        file.append('avatar', e.target.files[0]);
        dispatch(updateAvatar(file));
      };
    }
  };

  return (
    <UserBlock>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {user.length === 0 ? (
            <div>not found</div>
          ) : (
            <>
              <BoxImg>
                {!isChangeUserAvatar ? (
                  <ImgUser
                    id="img_container"
                    src={imgUrl ? imgUrl : devaultIcon}
                    alt={imgAlt}
                  />
                ) : (
                  <ImgUser
                    id="img_container"
                    src={newUserAvatar}
                    alt={imgAlt}
                  />
                )}

                <EditImgBtn>
                  <ImageContainer>
                    <form>
                      <input
                        name="userAvatar"
                        type="file"
                        id="userAvatar"
                        {...register('avatar', {})}
                        onChange={handleImage}
                      />
                    </form>
                  </ImageContainer>
                  <IconEditImgBtn />
                  <label htmlFor="userAvatar"> Edit photo</label>
                </EditImgBtn>
              </BoxImg>
              <BoxInfo>
                <BoxTitle>
                  <Block>
                    <Form>
                      <BoxTitle>
                        <Title>Name:</Title>
                        <Block>
                          <UserDataItem
                            defaultValue={result.name}
                            name="name"
                            type="text"
                            pattern={nameRegex}
                            errorText="Enter only letters"
                          />
                        </Block>
                      </BoxTitle>
                      <BoxTitle>
                        <Title>Email:</Title>
                        <Block>
                          <UserDataItem
                            defaultValue={result.email}
                            name={'email'}
                            type="email"
                            pattern={emailRegex}
                            errorText="Check your email"
                          />
                        </Block>
                      </BoxTitle>
                      <BoxTitle>
                        <Title>Birthday:</Title>
                        <Block>
                          <UserDataItem
                            defaultValue={result.birthday}
                            name={'birthday'}
                            type="text"
                            pattern={dateRegexp}
                            errorText="Error. Example: 10.10.1990"
                          />
                        </Block>
                      </BoxTitle>
                      <BoxTitle>
                        <Title>Phone:</Title>
                        <Block>
                          <UserDataItem
                            defaultValue={result.phone}
                            name={'phone'}
                            type="tel"
                            pattern={phoneRegex}
                            errorText="Number must be +3800000000 "
                          />
                        </Block>
                      </BoxTitle>
                      <BoxTitle>
                        <Title>City:</Title>
                        <Block>
                          <UserDataItem
                            defaultValue={result.city}
                            name={'city'}
                            type="text"
                            pattern={cityRegex}
                            errorText="Error. Example: Brovary, Kyiv"
                          />
                        </Block>
                      </BoxTitle>
                    </Form>
                  </Block>
                </BoxTitle>
              </BoxInfo>
            </>
          )}
        </>
      )}
    </UserBlock>
  );
};

export default UserDataForm;
