import { PropsWithChildren, HTMLAttributes, useEffect, KeyboardEventHandler } from 'react';
import { createPortal } from 'react-dom';
import { KEY_CODE } from 'shared/constants';
import { fixedFullCss } from 'shared/styles/css';
import styled from 'styled-components';
import { Backdrop } from '../backdrop';

export type ModalProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    /**
     * `true` - открыть модалку. <br />
     * `false` - закрыть модалку.
     */
    open?: boolean;
    /**
     * Внутрь какого элемента в DOM узле вставить модалку
     */
    container?: HTMLElement;
    BackdropComponent?: React.ElementType<HTMLAttributes<HTMLElement>>;
    onClose?: () => void;
    /**
     * Скрыть Backdrop
     */
    hideBackdrop?: boolean;
  }
>;

const StyledModal = styled.div`
  ${fixedFullCss}
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const Modal = ({
  open = false,
  container = document.body,
  BackdropComponent = Backdrop,
  children,
  onClose,
  hideBackdrop,
  ...props
}: ModalProps) => {
  useEffect(() => {
    if (open) {
      const handleKeyDown = (e: KeyboardEvent) => {
        console.log(e);
        if (e.code === KEY_CODE.Escape && onClose) {
          onClose();
        }
      };
      container.addEventListener('keydown', handleKeyDown);
      return () => {
        container.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [onClose, container, open]);

  return open
    ? createPortal(
        <StyledModal role='presentation' {...props}>
          {!hideBackdrop && <BackdropComponent onClick={onClose} />}
          {children}
        </StyledModal>,
        container,
      )
    : null;
};
