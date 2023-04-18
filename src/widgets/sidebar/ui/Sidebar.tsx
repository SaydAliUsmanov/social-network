import { IconNotification, IconUser, IconSettings2 } from '@tabler/icons';
import Link from 'next/link';
import { Home } from 'shared/icons/Home';
import { Button, buttonClasses } from 'shared/ui/Button';
import { css } from 'styled-components';
import { Community } from 'shared/icons/Community';
import * as Styles from './Sidebar.styles';

const items = [
  {
    key: 'home',
    name: 'Главная ',
    icon: <Home />,
  },
  {
    key: 'messages',
    name: 'Сообщения ',
    icon: <Community />,
  },
  {
    key: 'notification',
    name: 'Уведомления',
    icon: <IconNotification stroke={1.5} />,
  },
  {
    key: 'profile',
    name: 'Профиль',
    icon: <IconUser stroke={1.5} />,
  },
  {
    key: 'settings',
    name: 'Настройки',
    icon: <IconSettings2 stroke={1.5} />,
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
              {...(item.key === 'notification' && { variant: 'contained' })}
              color='text'
              startIcon={item.icon}
              css={css`
                width: 100%;
                font-size: 1rem;
                padding: 20px 15px;
                height: auto;
                & .${buttonClasses.startIcon} {
                  margin-right: 12px;
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
