import {
  IconNotification,
  IconMessages,
  IconUser,
  IconSettings2,
  IconLayoutDashboard,
} from '@tabler/icons';
import Link from 'next/link';
import { Button, buttonClasses } from 'shared/ui/button';
import { css } from 'styled-components';
import * as Styles from './styles';

const items = [
  {
    key: 'home',
    name: 'Главная ',
    icon: <IconLayoutDashboard stroke={1.5} />,
  },
  {
    key: 'messages',
    name: 'Сообщения ',
    icon: <IconMessages stroke={1.5} />,
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

export const Sidebar = () => {
  return (
    <Styles.Nav>
      <Styles.Ul>
        {items.map((item) => {
          return (
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
                    & .${buttonClasses.startIcon} {
                      margin-right: 12px;
                    }
                  `}
                >
                  {item.name}
                </Button>
              </Link>
            </Styles.Li>
          );
        })}
      </Styles.Ul>
    </Styles.Nav>
  );
};
