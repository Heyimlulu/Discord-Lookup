import dayjs from 'dayjs';
import React, { useState } from 'react';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faStar, faIdBadge, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import loadable from '@loadable/component';
import ToolTip from './Tooltip';
import { classNames } from '../../utils/classNames';
import discordLogo from '../../images/logo/Discord-Logo-White.svg';

import 'dayjs/locale/en';
import 'dayjs/locale/fr';
import 'dayjs/locale/de';
import 'dayjs/locale/it';
import 'dayjs/locale/ja';
import { environment } from '../../utils/environment';

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

export default function UserCard({ data, error, loading }) {
  const { t, i18n } = useTranslation();

  const BASE_URL = environment.apiUrl;

  const Placeholder = loadable(() => import('./Placeholder'));

  if (loading) return <Placeholder />;

  if (error) {
    return (
      <div className='bg-white shadow rounded-lg'>
        {/* BANNER COLOR */}
        <div className='border-b rounded-t-md w-full min-h-[60px] bg-[#262626]' />
        {/* USERS */}
        <div className='flex items-center py-3 px-4 border-b'>
          {/* AVATAR */}
          <div className='group flex-none mr-1.5 rounded-full bg-gray-100 overflow-hidden relative w-[4.3rem] h-[4.3rem]'>
            <img
              loading='lazy'
              src={discordLogo}
              alt='default discord avatar'
              className='bg-[#262626] h-full w-full p-[14px] object-contain object-center relative z-20'
            />
          </div>
          {/* INFOS */}
          <div className='flex flex-col'>
            {/* USERNAME AND DISCRIMINATOR */}
            <div className='inline-block w-[fit-content] text-xl font-semibold px-1.5 ml-1'>
              {t('response.userNotFound')}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (data) {
    const {
      discord: {
        lookup: { user },
      },
    } = data;

    const [hover, setHover] = useState(false);
    const [copySuccess, setCopySuccess] = useState(user.profileAppearance.accentColor);

    const toggleHover = () => {
      setHover(!hover);
    };

    const clipboard = (color) => {
      setCopySuccess(t('misc.copiedToClipboard'));
      navigator.clipboard.writeText(color);
      setTimeout(() => {
        setCopySuccess(color);
      }, 2000);
    };

    return (
      <div className='bg-white shadow rounded-lg'>
        {/* BANNER */}
        <div className='relative bg-blurple border-b rounded-t-md w-full min-h-[60px]'>
          {user.profileAppearance.banner?.url && (
            <a
              className='group flex relative w-full h-[120px]'
              target='_blank'
              rel='noopener noreferrer'
              href={`${user.profileAppearance.banner?.url}?size=2048`}
            >
              <div className='absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-all flex items-center justify-center duration-200 z-30'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 stroke-current text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </div>
              <img
                loading='lazy'
                className='h-full w-full object-cover object-center rounded-t-md relative z-20'
                src={`${user.profileAppearance.banner?.url}?size=2048`}
                alt={user.username}
              />
            </a>
          )}
          <div className='absolute top-2 right-2 z-30'>
            <a
              href={`discord://-/users/${user.id}`}
              rel='noopener noreferrer'
              className='flex items-center justify-center text-white bg-black rounded-lg px-3 py-1.5 text-white text-xs font-medium hover:bg-white hover:text-black transition duration-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 stroke-current'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
              <span className='ml-1'>{t('userCard.viewProfile')}</span>
            </a>
          </div>
        </div>
        {/* USER INFOS */}
        <div className='flex items-center py-3 px-4 border-b'>
          {/* AVATAR */}
          <a
            href={
              user.profileAppearance.avatar?.url &&
              `${user.profileAppearance.avatar?.url}?size=2048`
            }
            target='_blank'
            rel='noopener noreferrer'
            className='group flex-none mr-1.5 rounded-full bg-gray-100 relative w-[4.3rem] h-[4.3rem]'
          >
            <div className='absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-all flex items-center justify-center duration-200 z-30'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 stroke-current text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
            </div>
            {user.profileAppearance.avatar?.url ? (
              <img
                loading='lazy'
                href={`${user.profileAppearance.avatar?.url}?size=2048`}
                src={user.profileAppearance.avatar?.url}
                alt={user.username}
                className={classNames(
                  user.profileAppearance.avatarDecoration && 'p-[6px]',
                  'h-full w-full rounded-full object-cover object-center relative z-0',
                )}
              />
            ) : (
              <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center z-10'>
                <svg
                  className='fill-current text-gray-300'
                  width='28'
                  height='20'
                  viewBox='0 0 28 20'
                >
                  <path
                    fill='currentColor'
                    d='M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z'
                  ></path>
                </svg>
              </div>
            )}
            {user.profileAppearance.avatarDecoration && (
              <img
                loading='lazy'
                src={user.profileAppearance.avatarDecoration}
                alt='avatar-decoration'
                className='h-full w-full object-cover object-center absolute top-0 left-0 z-20'
              />
            )}
          </a>

          <div className='flex flex-col'>
            {/* USERNAME AND DISPLAY NAME */}
            <div className='inline-block w-[fit-content] text-xl font-semibold px-1.5 ml-1'>
              <div>
                {user.username}
                {user.displayName && (
                  <small className='font-normal text-md font-mono ml-[1px]'>
                    ({user.displayName})
                  </small>
                )}
              </div>
            </div>
            {/* BADGES */}
            <div className='flex items-center mx-2 mt-[1px] select-none'>
              {user.badges.map((badge, key) => {
                return (
                  <ToolTip key={key} tooltip={badge?.description}>
                    <div className='flex justify-center items-center rounded-lg transition hover:bg-gray-300 h-[2rem] p-[4px] mx-[2px]'>
                      <img
                        loading='lazy'
                        src={`${BASE_URL}${badge?.url}`}
                        alt={badge?.title}
                        className='h-full w-full object-contain'
                      />
                    </div>
                  </ToolTip>
                );
              })}
            </div>
          </div>
        </div>

        <div className='grid sm:grid-cols-2 auto-rows-auto py-3 px-4 gap-3'>
          {/* ACCOUNT TYPE */}
          <div>
            <div className='flex'>
              <FontAwesomeIcon className='mr-2' icon={faIdBadge} />
              <p className='text-sm font-medium text-gray-900'>{t('userCard.accountType')}</p>
            </div>
            <p className='inline-block rounded-full px-[10px] text-sm font-bold text-white bg-blurple'>
              {user.type}
            </p>
          </div>
          {/* ACCENT COLOR */}
          {user.profileAppearance.accentColor && (
            <div>
              <div className='flex'>
                <FontAwesomeIcon className='mr-2' icon={faStar} />
                <p className='text-sm font-medium text-gray-900'>{t('userCard.accent')}</p>
              </div>
              {hover ? (
                <p
                  className='transition ease duration-200 inline-flex px-[10px] rounded-full text-sm'
                  style={{
                    color: user.profileAppearance.accentColor,
                    border: `1px solid ${user.profileAppearance.accentColor}`,
                    boxShadow: 'rgb(167, 86, 255) 0px 0px 2px',
                  }}
                  onMouseEnter={() => toggleHover()}
                  onMouseLeave={() => toggleHover()}
                  onClick={() => clipboard(user.profileAppearance.accentColor)}
                >
                  {copySuccess}
                </p>
              ) : (
                <p
                  className='transition ease duration-200 px-[10px] rounded-full text-sm w-[4.2rem] h-[1.5rem]'
                  style={{ backgroundColor: user.profileAppearance.accentColor }}
                  onMouseEnter={() => toggleHover()}
                  onMouseLeave={() => toggleHover()}
                >
                  <span className='sr-only'>{copySuccess}</span>
                </p>
              )}
            </div>
          )}

          {/* CREATED DATE */}
          <div>
            <div className='flex'>
              <FontAwesomeIcon className='mr-2' icon={faPalette} />
              <p className='text-sm font-medium text-gray-900'>{t('userCard.createdOn')}</p>
            </div>
            <p className='text-sm text-gray-500'>
              {dayjs(user.creationTimestamp)
                .locale(i18n.language === 'jp' ? 'ja' : i18n.language)
                .format('LLL')}
            </p>
          </div>

          {/* ACCOUNT AGE */}
          {user.accountAge && (
            <div>
              <div className='flex'>
                <FontAwesomeIcon className='mr-2' icon={faHourglassHalf} />
                <p className='text-sm font-medium text-gray-900'>
                  {t('userCard.accountAge.title')}
                </p>
              </div>
              <p className='text-sm text-gray-500'>
                {dayjs(user.creationTimestamp)
                  .locale(i18n.language === 'jp' ? 'ja' : i18n.language)
                  .fromNow()}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
