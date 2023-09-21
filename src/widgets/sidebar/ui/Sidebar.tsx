import Link from 'next/link';
import { Button, buttonClasses } from 'shared/ui/Button';
import { css } from 'styled-components';
import { Community, Home, Message, Notification, Setting, User } from 'shared/icons';
import * as Styles from './Sidebar.styles';

const items = [
  {
    key: 1,
    name: 'Feed ',
    icon: <Home />,
  },
  {
    key: 2,
    name: 'My community ',
    icon: <Community />,
  },
  {
    key: 3,
    name: 'Messages',
    icon: <Message />,
  },
  {
    key: 4,
    name: 'Notification',
    icon: <Notification />,
  },
  {
    key: 5,
    name: 'Explore',
    icon: <Setting />,
  },
  {
    key: 5,
    name: 'Profile',
    icon: <User />,
  },
];

export const Sidebar = () => (
  <Styles.Nav>
    <Styles.Ul>
      {items.map((item) => (
        <Styles.Li key={item.key}>
          <Link href='/posts'>
            <Button
              variant='text'
              {...(item.key === 1 && { variant: 'contained' })}
              color='text'
              startIcon={item.icon}
              css={css`
                width: 100%;
                font-size: 1rem;
                padding: 12px 20px;
                height: auto;
                & .${buttonClasses.startIcon} {
                  margin-right: 20px;
                }
              `}
            >
              {item.name}
            </Button>
          </Link>
        </Styles.Li>
      ))}
    </Styles.Ul>
  </Styles.Nav>
);
