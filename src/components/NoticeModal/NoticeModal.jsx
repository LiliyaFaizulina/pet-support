import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TfiClose } from 'react-icons/tfi';
import { AiFillHeart } from 'react-icons/ai';
import { GiCat } from 'react-icons/gi';
import { toast } from 'react-toastify';
import { getNotice } from 'redux/notices/noticesOperations';
import { updateFavoriteStatus } from 'redux/auth/authOperations';
import {
  selectFavoriteNoticesIds,
  selectIsAuth,
} from 'redux/auth/authSelectors';
import {
  selectCurrentNotice,
  selectIsLoading,
} from 'redux/notices/noticesSelectors';
import { transformCategoryName } from 'helpers/transformCategoryName';
import { transformDate } from 'helpers/transformDate';
import Spinner from 'components/Spinner/Spinner';
import {
  Card,
  CloseBtn,
  Wrapper,
  Overlay,
  Image,
  NoticeTitle,
  NoticeInfoItem,
  ContactLink,
  ToggleFavoriteBtn,
  Comment,
  FlexContainer,
  BtnContainer,
  StyledWrapper,
} from './NoticeModal.styled';

export const NoticeModal = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const notice = useSelector(selectCurrentNotice);
  const isAuth = useSelector(selectIsAuth);
  const favoriteList = useSelector(selectFavoriteNoticesIds);
  const isLoading = useSelector(selectIsLoading);
  const [isFavorite, setIsFavorite] = useState(() => {
    return favoriteList.includes(id);
  });

  const toggleFavorite = () => {
    if (!isAuth) {
      toast.info('You should be logged in to add to favorites', {
        icon: <GiCat />,
      });
      return;
    }
    dispatch(updateFavoriteStatus(id));
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    dispatch(getNotice(id));
  }, [dispatch, id]);

  return (
    <>
      {isLoading || !notice ? (
        <Spinner />
      ) : (
        <Card>
          <CloseBtn type="button" onClick={closeModal}>
            <TfiClose />
          </CloseBtn>
          <FlexContainer>
            <Wrapper>
              <Image src={notice.image} alt="pet" />
              <Overlay>{transformCategoryName(notice.category)}</Overlay>
            </Wrapper>
            <StyledWrapper>
              <NoticeTitle>{notice.title}</NoticeTitle>
              <ul>
                <NoticeInfoItem>
                  Name: <span>{notice.petName}</span>
                </NoticeInfoItem>
                <NoticeInfoItem>
                  Birthday: <span>{transformDate(notice.dateOfBirth)}</span>
                </NoticeInfoItem>
                <NoticeInfoItem>
                  Breed:{' '}
                  <span>{notice.breed ? notice.breed : 'not indicated'}</span>
                </NoticeInfoItem>
                <NoticeInfoItem>
                  Location: <span>{notice.location}</span>
                </NoticeInfoItem>
                <NoticeInfoItem>
                  The sex: <span>{notice.sex}</span>
                </NoticeInfoItem>
                <NoticeInfoItem>
                  Email:{' '}
                  <a href={`mailto:${notice.owner.email}`}>
                    {notice.owner.email}
                  </a>
                </NoticeInfoItem>
                <NoticeInfoItem>
                  Phone:{' '}
                  <a href={`tel:${notice.owner.phone}`}>{notice.owner.phone}</a>
                </NoticeInfoItem>
                {notice.category === 'sell' && (
                  <NoticeInfoItem>
                    Price: <span>{notice.price}&#36;</span>
                  </NoticeInfoItem>
                )}
              </ul>
            </StyledWrapper>
          </FlexContainer>
          <Comment>
            Comments: <span>{notice.comments || 'no comments'}</span>
          </Comment>
          <BtnContainer>
            <ContactLink href={`tel:${notice.owner.phone}`}>
              Contact
            </ContactLink>
            <ToggleFavoriteBtn
              type="button"
              isFavorite={isFavorite}
              onClick={toggleFavorite}
            >
              {isFavorite ? 'Remove at' : 'Add to'} <AiFillHeart />
            </ToggleFavoriteBtn>
          </BtnContainer>
        </Card>
      )}
    </>
  );
};
