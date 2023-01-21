import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { IoTrashSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';
import {
  selectFavoriteNoticesIds,
  selectIsAuth,
  selectUsersId,
} from 'redux/auth/authSelectors';
import { updateFavoriteStatus } from 'redux/auth/authOperations';
import {
  ButtonDelete,
  ButtonsDiv,
  ButtonMore,
  Img,
  Item,
  List,
  ListItem,
  Span,
  Title,
  TitleWrapper,
  Wrapper,
  Category,
  LikeButton,
} from './NoticeCategoryItem.styled';
import { transformCategoryName } from 'helpers/transformCategoryName';

export const NoticeCategoryItem = ({
  id,
  image,
  title,
  petName,
  breed,
  place,
  dateOfBirth,
  price,
  category,
  owner,
  deleteOwnNotice,
  openNoticeModal,
}) => {
  const isAuth = useSelector(selectIsAuth);
  const favoriteNotices = useSelector(selectFavoriteNoticesIds);
  const userId = useSelector(selectUsersId);
  const dispatch = useDispatch();

  useEffect(() => {}, [favoriteNotices]);

  const сategoryName = transformCategoryName(category);
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];

  const currentDate = new Date();
  const birthDate = new Date(dateOfBirth);
  const msInYear = 31536000000;
  const msInMonth = 2628000000;
  const age = currentDate - birthDate;
  let ageMessage;

  if (age > msInYear) {
    const years = Math.floor(age / msInYear);
    ageMessage =
      years === 1 ? `${numbers[years]} year` : `${numbers[years]} years`;
  } else {
    const months = Math.floor(age / msInMonth);
    ageMessage =
      months === 1 ? `${numbers[months]} month` : `${numbers[months]} months`;
  }

  const toggleFavorite = () => {
    if (!isAuth) {
      toast.info('You should be logged in to add to favorites');
      return;
    }

    dispatch(updateFavoriteStatus(id));
  };

  return (
    <Item>
      <Img src={image} alt={petName} />

      <Wrapper>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>

        <List length={category === 'sell' ? 4 : 3}>
          <ListItem>
            Breed: <Span>{breed}</Span>
          </ListItem>
          <ListItem>
            Place: <Span>{place}</Span>
          </ListItem>
          <ListItem>
            Age: <Span>{dateOfBirth ? ageMessage : 'no information'}</Span>
          </ListItem>

          {category === 'sell' && (
            <ListItem>
              Price: <Span>{price}$</Span>
            </ListItem>
          )}
        </List>

        <ButtonsDiv>
          <ButtonMore type="button" onClick={() => openNoticeModal(id)}>
            Learn more
          </ButtonMore>
          {owner === userId && (
            <ButtonDelete type="button" onClick={() => deleteOwnNotice(id)}>
              Delete <IoTrashSharp />
            </ButtonDelete>
          )}
        </ButtonsDiv>
      </Wrapper>

      <Category>{сategoryName}</Category>
      <LikeButton type="button" aria-label="Like icon" onClick={toggleFavorite}>
        {favoriteNotices.includes(id) ? <IoIosHeart /> : <IoIosHeartEmpty />}
      </LikeButton>
    </Item>
  );
};
